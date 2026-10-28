import { getAll } from '../lib/content.js';
import useDocumentTitle from '../lib/useDocumentTitle.js';
import ContentList from '../components/ContentList.jsx';

export default function Teaching() {
  useDocumentTitle('수업자료');
  return (
    <>
      <h1>수업자료</h1>
      <p className="lead">과목별·주차별 수업 자료 목록입니다.</p>
      <ContentList items={getAll('teaching')} />
    </>
  );
}
