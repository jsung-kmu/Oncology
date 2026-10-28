import { useState } from 'react';
import { isFirebaseConfigured } from '../lib/firebase.js';
import { signInWithGoogle, signOutUser } from '../lib/auth.js';
import useAuth from '../lib/useAuth.js';

export default function LoginButton() {
  const { user, loading } = useAuth();
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState('');

  if (!isFirebaseConfigured) {
    return (
      <button type="button" className="login-button" disabled aria-describedby="login-status">
        로그인
        <span id="login-status" className="badge">
          준비 중
        </span>
      </button>
    );
  }

  // 클릭했을 때만 팝업 로그인을 시작합니다. (페이지를 열 때 자동으로 호출하지 않음)
  const handleSignIn = async () => {
    setMessage('');
    setPending(true);
    const result = await signInWithGoogle();
    setPending(false);
    if (result.error) setMessage(result.error);
  };

  const handleSignOut = async () => {
    setMessage('');
    await signOutUser();
  };

  return (
    <div className="login-area">
      {user ? (
        <>
          <span className="login-user">{user.displayName || user.email}</span>
          <button type="button" className="login-button" onClick={handleSignOut}>
            로그아웃
          </button>
        </>
      ) : (
        <button
          type="button"
          className="login-button"
          onClick={handleSignIn}
          disabled={loading || pending}
        >
          {pending ? '로그인 중…' : 'Google 로그인'}
        </button>
      )}
      {message && (
        <p className="login-message" role="alert">
          {message}
        </p>
      )}
    </div>
  );
}
