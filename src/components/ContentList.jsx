import { useSearchParams } from 'react-router-dom';
import { getTags } from '../lib/content.js';
import ContentCard from './ContentCard.jsx';
import TagFilter from './TagFilter.jsx';

// 연구/수업자료 목록 공통 화면 (태그 거르기 포함)
export default function ContentList({ items }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = searchParams.get('tag') || '';
  const tags = getTags(items);
  const visible = selected ? items.filter((item) => item.tags.includes(selected)) : items;

  const handleSelect = (tag) => {
    setSearchParams(tag ? { tag } : {}, { replace: true });
  };

  return (
    <>
      <TagFilter tags={tags} selected={selected} onSelect={handleSelect} />
      <p className="result-count" aria-live="polite">
        {selected ? `#${selected} 태그 자료 ${visible.length}건` : `전체 ${visible.length}건`}
      </p>
      {visible.length ? (
        <div className="card-list">
          {visible.map((item) => (
            <ContentCard key={item.path} item={item} />
          ))}
        </div>
      ) : (
        <p>해당하는 자료가 없습니다.</p>
      )}
    </>
  );
}
