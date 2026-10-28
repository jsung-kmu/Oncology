import { Link } from 'react-router-dom';
import { formatDate } from '../lib/content.js';
import TagList from './TagList.jsx';

export default function ContentCard({ item, showType = false }) {
  const isTeaching = item.type === 'teaching';
  return (
    <article className="card">
      <p className="card-meta">
        {showType && (
          <span className={`type-label type-${item.type}`}>
            {isTeaching ? '수업자료' : '연구'}
          </span>
        )}
        {isTeaching && item.course && (
          <span>
            {item.course}
            {item.week !== '' && ` · ${item.week}주차`}
          </span>
        )}
        {item.date && <time dateTime={item.date}>{formatDate(item.date)}</time>}
      </p>
      <h3 className="card-title">
        <Link to={item.path}>{item.title}</Link>
      </h3>
      {item.summary && <p className="card-summary">{item.summary}</p>}
      <TagList tags={item.tags} type={item.type} />
    </article>
  );
}
