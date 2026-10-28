import { Link } from 'react-router-dom';
import site from '../config/site.js';
import { getRecent } from '../lib/content.js';
import useDocumentTitle from '../lib/useDocumentTitle.js';
import ContentCard from '../components/ContentCard.jsx';

export default function Home() {
  useDocumentTitle('');
  const recent = getRecent(site.recentCount);
  const { lab, researcher } = site;

  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <h1 id="hero-heading">{site.name}</h1>
        <p className="hero-en">{site.nameEn}</p>
        <p className="lead">{site.description}</p>
        <p className="hero-links">
          <Link className="button" to="/research">
            연구 자료 보기
          </Link>
          <Link className="button button-outline" to="/teaching">
            수업 자료 보기
          </Link>
        </p>
      </section>

      <section className="intro-grid" aria-label="연구실 및 연구자 소개">
        <div className="panel">
          <h2>
            {lab.name} <span className="muted">{lab.nameEn}</span>
          </h2>
          <p>{lab.intro}</p>
          {lab.interests.length > 0 && (
            <>
              <h3 className="small-heading">주요 연구 분야</h3>
              <ul className="interest-list">
                {lab.interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="panel">
          <h2>연구자 소개</h2>
          <dl className="profile">
            <dt>이름</dt>
            <dd>
              {researcher.name} <span className="muted">({researcher.nameEn})</span>
            </dd>
            <dt>소속</dt>
            <dd>
              {researcher.affiliation} {researcher.position}
            </dd>
            {researcher.email && (
              <>
                <dt>이메일</dt>
                <dd>
                  <a href={`mailto:${researcher.email}`}>{researcher.email}</a>
                </dd>
              </>
            )}
          </dl>
        </div>
      </section>

      <section aria-labelledby="recent-heading">
        <h2 id="recent-heading">최근 자료</h2>
        {recent.length ? (
          <div className="card-list">
            {recent.map((item) => (
              <ContentCard key={item.path} item={item} showType />
            ))}
          </div>
        ) : (
          <p>아직 등록된 자료가 없습니다.</p>
        )}
      </section>
    </>
  );
}
