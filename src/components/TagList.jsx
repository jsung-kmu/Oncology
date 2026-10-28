import { Link } from 'react-router-dom';

// 태그를 누르면 해당 목록 페이지에서 그 태그로 거른 결과를 보여 줍니다.
export default function TagList({ tags, type }) {
  if (!tags.length) return null;
  return (
    <ul className="tag-list" aria-label="태그">
      {tags.map((tag) => (
        <li key={tag}>
          <Link className="tag" to={`/${type}?tag=${encodeURIComponent(tag)}`}>
            #{tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
