// 자료별 토론 영역.
// 다음 단계(Firebase 연동)에서 이 파일의 내용만 실제 토론 기능으로 교체합니다.
// itemPath(예: "/research/sample")는 자료마다 토론을 구분하는 데 사용할 예정입니다.
export default function Discussion({ itemPath }) {
  return (
    <section className="discussion" aria-labelledby="discussion-heading" data-item={itemPath}>
      <h2 id="discussion-heading">토론</h2>
      <p className="discussion-notice" role="note">
        토론 기능은 준비 중입니다. 승인된 대학원생은 곧 Google 계정으로 로그인해 참여할 수
        있습니다.
      </p>
    </section>
  );
}
