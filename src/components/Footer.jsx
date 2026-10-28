import { Link } from 'react-router-dom';
import site from '../config/site.js';

export default function Footer() {
  const { researcher } = site;
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          {researcher.affiliation} · {researcher.name}
          {researcher.email && (
            <>
              {' · '}
              <a href={`mailto:${researcher.email}`}>{researcher.email}</a>
            </>
          )}
        </p>
        <p>
          <Link to="/guide">이용 안내 및 개인정보 처리 원칙</Link>
        </p>
        <p className="muted">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
