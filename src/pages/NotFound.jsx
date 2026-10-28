import { Link } from 'react-router-dom';
import useDocumentTitle from '../lib/useDocumentTitle.js';

export default function NotFound() {
  useDocumentTitle('페이지를 찾을 수 없습니다');
  return (
    <section className="not-found">
      <p className="error-code" aria-hidden="true">
        404
      </p>
      <h1>페이지를 찾을 수 없습니다</h1>
      <p>주소가 바뀌었거나 삭제된 페이지입니다. 주소를 다시 확인해 주세요.</p>
      <p>
        <Link className="button" to="/">
          홈으로 돌아가기
        </Link>
      </p>
    </section>
  );
}
