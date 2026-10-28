import { useEffect, useState } from 'react';
import { watchAuthState } from './auth.js';

// 현재 로그인한 사용자를 알려 줍니다. (확인 중에는 loading: true)
export default function useAuth() {
  const [state, setState] = useState({ user: null, loading: true });
  useEffect(() => watchAuthState((user) => setState({ user, loading: false })), []);
  return state;
}
