import site from '../config/site.js';
import useDocumentTitle from '../lib/useDocumentTitle.js';

export default function Guide() {
  useDocumentTitle('이용 안내');
  const { researcher } = site;

  return (
    <article className="guide">
      <h1>이용 안내</h1>
      <p className="lead">
        이 사이트는 연구·교육 목적의 자료 공유를 위해 운영됩니다. 모든 이용자는 아래 원칙을
        지켜 주시기 바랍니다.
      </p>

      <section aria-labelledby="principles-heading">
        <h2 id="principles-heading">자료 게시 및 이용 원칙</h2>
        <ol className="principles">
          <li>
            <strong>환자 식별 정보 게시 금지</strong>
            <p>
              환자를 알아볼 수 있는 정보(이름, 등록번호, 연락처, 얼굴 사진, 희귀 사례의 구체적
              정보 등)와 기관생명윤리위원회(IRB) 승인 범위를 벗어난 데이터는 게시하지
              않습니다.
            </p>
          </li>
          <li>
            <strong>미발표 원자료(raw data) 게시 금지</strong>
            <p>
              학술지 등에 아직 발표되지 않은 연구의 원자료는 게시하지 않습니다. 공개 자료는
              요약·교육용으로 가공된 내용에 한합니다.
            </p>
          </li>
          <li>
            <strong>토론 내용의 외부 무단 공유 금지</strong>
            <p>
              토론에 올라온 의견과 자료는 작성자와 운영자의 동의 없이 캡처·복사하여 외부에
              공유하지 않습니다.
            </p>
          </li>
          <li>
            <strong>개인정보는 최소한으로 수집하며, 요청 시 삭제합니다</strong>
            <p>
              토론 참여를 위한 로그인 시 수집하는 개인정보는 로그인에 필요한 최소 정보(이름,
              이메일)뿐입니다. 본인이 요청하면 해당 정보와 작성 글을 삭제합니다.
            </p>
          </li>
        </ol>
      </section>

      <section aria-labelledby="scope-heading">
        <h2 id="scope-heading">공개 범위</h2>
        <p>
          이 사이트에 게시된 자료 본문과 첨부 파일(PDF 등)은 로그인 없이{' '}
          <strong>인터넷의 누구나 볼 수 있습니다.</strong> 공개해도 되는 자료만 게시합니다.
        </p>
      </section>

      <section aria-labelledby="privacy-heading">
        <h2 id="privacy-heading">개인정보 처리 안내</h2>
        <table className="info-table">
          <caption className="visually-hidden">개인정보 처리 요약</caption>
          <tbody>
            <tr>
              <th scope="row">수집 항목</th>
              <td>이름, 이메일 (Google 계정 로그인 시 제공되는 정보)</td>
            </tr>
            <tr>
              <th scope="row">수집 목적</th>
              <td>승인된 대학원생 확인 및 토론 참여자 표시</td>
            </tr>
            <tr>
              <th scope="row">보관 및 삭제</th>
              <td>이용 기간 동안 보관하며, 본인 요청 시 지체 없이 삭제</td>
            </tr>
            <tr>
              <th scope="row">문의</th>
              <td>
                {researcher.name}
                {researcher.email && (
                  <>
                    {' '}(<a href={`mailto:${researcher.email}`}>{researcher.email}</a>)
                  </>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <p className="muted">
          현재는 로그인·토론 기능이 준비 중이므로 개인정보를 수집하지 않습니다.
        </p>
      </section>
    </article>
  );
}
