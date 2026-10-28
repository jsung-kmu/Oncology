// ============================================================
// 사이트 기본 정보 — 이 파일만 고치면 사이트 전체에 반영됩니다.
// 따옴표(" ") 안의 글자만 바꾸고, 쉼표와 괄호는 그대로 두세요.
// ============================================================

const site = {
  // 사이트 이름 (상단 메뉴, 브라우저 탭에 표시)
  name: '간호학 연구·수업 자료실',
  nameEn: 'Nursing Research & Teaching Archive',

  // 홈 화면 첫 문단에 표시되는 사이트 소개
  description:
    '종양간호(oncology nursing), 정신종양학(psycho-oncology), 디지털 헬스케어(digital healthcare) 분야의 연구 자료와 수업 자료를 공유하는 공간입니다.',

  // 연구실 소개 (홈 화면)
  lab: {
    name: '○○ 연구실',
    nameEn: '○○ Lab',
    intro:
      '암 환자와 가족의 삶의 질 향상을 위한 간호 중재와 디지털 헬스케어 기술을 연구합니다.',
    interests: ['Oncology nursing', 'Psycho-oncology', 'Digital healthcare'],
  },

  // 연구자 소개 (홈 화면)
  // 개인 연락처는 공개해도 되는 공식 주소만 적으세요.
  researcher: {
    name: '연구자 이름',
    nameEn: 'Researcher Name, PhD, RN',
    position: '교수',
    affiliation: '○○대학교 간호대학',
    email: 'name@university.ac.kr',
  },

  // 홈 화면 "최근 자료"에 보여 줄 개수 (3~5 권장)
  recentCount: 5,
};

export default site;
