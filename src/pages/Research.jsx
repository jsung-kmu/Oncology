import { getAll } from '../lib/content.js';
import useDocumentTitle from '../lib/useDocumentTitle.js';
import ContentList from '../components/ContentList.jsx';

export default function Research() {
  useDocumentTitle('연구');
  return (
    <>
      <h1>연구</h1>
      <p className="lead">연구 자료 목록입니다. 최신 자료가 위에 표시됩니다.</p>
      <ContentList items={getAll('research')} />
    </>
  );
}
