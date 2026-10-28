import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { formatDate, getBySlug } from '../lib/content.js';
import useDocumentTitle from '../lib/useDocumentTitle.js';
import Discussion from '../components/Discussion.jsx';
import TagList from '../components/TagList.jsx';
import NotFound from './NotFound.jsx';

const LABELS = {
  research: { list: '연구', path: '/research' },
  teaching: { list: '수업자료', path: '/teaching' },
};

export default function ContentDetail({ type }) {
  const { slug } = useParams();
  const item = getBySlug(type, slug);
  const label = LABELS[type];
  useDocumentTitle(item ? item.title : '페이지를 찾을 수 없습니다');

  if (!item) return <NotFound />;

  return (
    <article className="detail">
      <nav aria-label="현재 위치" className="breadcrumb">
        <Link to={label.path}>← {label.list} 목록</Link>
      </nav>
      <header className="detail-header">
        {type === 'teaching' && item.course && (
          <p className="detail-course">
            {item.course}
            {item.week !== '' && ` · ${item.week}주차`}
          </p>
        )}
        <h1>{item.title}</h1>
        {item.date && (
          <p className="muted">
            <time dateTime={item.date}>{formatDate(item.date)}</time>
          </p>
        )}
        {item.summary && <p className="lead">{item.summary}</p>}
        <TagList tags={item.tags} type={type} />
      </header>

      <div className="markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.body}</ReactMarkdown>
      </div>

      {item.pdf && (
        <section className="attachment" aria-labelledby="attachment-heading">
          <h2 id="attachment-heading">첨부 파일</h2>
          <p>
            <a href={item.pdf} target="_blank" rel="noopener noreferrer">
              PDF 파일 열기 (새 창)
            </a>
          </p>
        </section>
      )}

      <Discussion itemPath={item.path} />
    </article>
  );
}
