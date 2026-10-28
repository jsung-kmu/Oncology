import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from './firebase.js';

// 사용자가 팝업을 닫거나 다시 눌러 생긴 경우 — 오류로 안내하지 않고 조용히 넘어갑니다.
const SILENT_ERRORS = new Set(['auth/popup-closed-by-user', 'auth/cancelled-popup-request']);

// 화면에 보여 줄 한국어 안내 문구
const ERROR_MESSAGES = {
  'auth/popup-blocked':
    '브라우저 주소창 오른쪽의 팝업 차단 아이콘을 눌러 이 사이트의 팝업을 허용해 주세요',
  'auth/unauthorized-domain':
    '이 사이트 주소가 Firebase 승인된 도메인에 등록되어 있지 않습니다. 관리자에게 문의해 주세요.',
  'auth/network-request-failed': '네트워크 연결을 확인한 뒤 다시 시도해 주세요.',
};

// 반드시 로그인 버튼의 클릭 처리 함수 안에서, 다른 await 없이 곧바로 호출해야 합니다.
// (클릭과 팝업 사이에 지연이 생기면 브라우저가 팝업을 차단합니다.)
// 반환값: { user } 로그인 성공 / { user: null } 사용자가 취소 / { error: '안내 문구' } 실패
export async function signInWithGoogle() {
  if (!auth) return { error: '로그인 기능이 아직 설정되지 않았습니다.' };
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return { user: result.user };
  } catch (error) {
    if (SILENT_ERRORS.has(error?.code)) return { user: null };
    console.error('[auth] 로그인 실패:', error);
    return {
      error: ERROR_MESSAGES[error?.code] || '로그인 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.',
    };
  }
}

export function signOutUser() {
  return auth ? signOut(auth) : Promise.resolve();
}

// 로그인 상태가 바뀔 때마다 callback(user 또는 null)을 호출합니다. 팝업은 열지 않습니다.
export function watchAuthState(callback) {
  if (!auth) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
}
