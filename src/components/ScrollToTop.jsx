import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 페이지를 이동하면 화면을 맨 위로 올립니다.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
