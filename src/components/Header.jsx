import { Link, NavLink } from 'react-router-dom';
import site from '../config/site.js';
import LoginButton from './LoginButton.jsx';

const menu = [
  { to: '/', label: '홈', end: true },
  { to: '/research', label: '연구' },
  { to: '/teaching', label: '수업자료' },
  { to: '/guide', label: '이용 안내' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="site-title">
          <span className="site-title-ko">{site.name}</span>
          <span className="site-title-en">{site.nameEn}</span>
        </Link>
        <nav aria-label="주 메뉴" className="main-nav">
          <ul>
            {menu.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <LoginButton />
      </div>
    </header>
  );
}
