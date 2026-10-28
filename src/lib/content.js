import { parse as parseYaml } from 'yaml';

// src/content/research/, src/content/teaching/ 안의 .md 파일을 모두 자동으로 불러옵니다.
// 새 .md 파일을 폴더에 넣기만 하면 목록에 자동으로 나타납니다.
const researchFiles = import.meta.glob('../content/research/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});
const teachingFiles = import.meta.glob('../content/teaching/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

function parseMarkdown(raw, path) {
  const match = raw.match(FRONTMATTER);
  if (!match) {
    console.warn(`[content] frontmatter(---)가 없습니다: ${path}`);
    return { data: {}, body: raw };
  }
  try {
    return { data: parseYaml(match[1]) || {}, body: match[2] };
  } catch (error) {
    console.warn(`[content] frontmatter 형식 오류: ${path}`, error);
    return { data: {}, body: match[2] };
  }
}

function toDateString(value) {
  if (!value) return '';
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
}

function toTags(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String);
  return String(value)
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function buildItems(files, type) {
  return Object.entries(files).map(([path, raw]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '');
    const { data, body } = parseMarkdown(raw, path);
    return {
      type,
      slug,
      path: `/${type}/${slug}`,
      title: data.title ? String(data.title) : slug,
      date: toDateString(data.date),
      tags: toTags(data.tags),
      summary: data.summary ? String(data.summary) : '',
      pdf: data.pdf ? String(data.pdf) : '',
      course: data.course ? String(data.course) : '',
      week: data.week ?? '',
      body,
    };
  });
}

const byDateDesc = (a, b) => b.date.localeCompare(a.date);

const research = buildItems(researchFiles, 'research').sort(byDateDesc);

// 수업자료: 과목명 → 주차 순서로 정렬
const teaching = buildItems(teachingFiles, 'teaching').sort(
  (a, b) =>
    a.course.localeCompare(b.course, 'ko') ||
    Number(a.week || 0) - Number(b.week || 0) ||
    byDateDesc(a, b),
);

export function getAll(type) {
  return type === 'teaching' ? teaching : research;
}

export function getBySlug(type, slug) {
  return getAll(type).find((item) => item.slug === slug);
}

export function getRecent(count) {
  return [...research, ...teaching].sort(byDateDesc).slice(0, count);
}

export function getTags(items) {
  return [...new Set(items.flatMap((item) => item.tags))].sort((a, b) =>
    a.localeCompare(b, 'ko'),
  );
}

export function formatDate(date) {
  if (!date) return '';
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
