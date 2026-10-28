// 목록 위에 표시되는 태그 거르기(filter) 버튼 모음
export default function TagFilter({ tags, selected, onSelect }) {
  if (!tags.length) return null;
  return (
    <div className="tag-filter" role="group" aria-label="태그로 거르기">
      <button type="button" aria-pressed={!selected} onClick={() => onSelect('')}>
        전체
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          aria-pressed={selected === tag}
          onClick={() => onSelect(tag)}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
}
