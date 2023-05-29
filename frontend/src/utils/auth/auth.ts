import Cookies from 'js-cookie';
import { NavigateFunction } from 'react-router-dom';

const loginUrl = `${import.meta.env.VITE_APP_BACKEND_URL}/users/login`;
const logoutUrl = `${import.meta.env.VITE_APP_BACKEND_URL}/users/logout`;
const fetchUserUrl = `${import.meta.env.VITE_APP_BACKEND_URL}/users/user`;

const TOKEN_COOKIE = 'token';
interface UserState {
  username: string;
}

enum Role {
  ROLE_USER,
  ROLE_ADMIN,
}

interface User {
  username: string;
  role: Role;
}

export class InvalidSessionError extends Error {
  constructor() {
    super('Invalid session');
  }
}

export const removeSessionData = (): void => {
  Cookies.remove(TOKEN_COOKIE);
};

export const logout = async (): Promise<void> => {
  removeSessionData();

  const requestOptions = {
    method: 'POST',
    headers: { Authorization: `Bearer ${getJwtToken()}` },
  };

  try {
    const resp = await fetch(logoutUrl, requestOptions);
    if (resp.status !== 200) throw new Error('Logout failed');
  } catch (err) {}

  document.location.href = '/';
};

export const validateUserState = (userState: UserState): userState is UserState => {
  if (typeof userState !== 'object') return false;
  if (typeof userState.username !== 'string') return false;

  return true;
};

export const getJwtToken = (): string | null => {
  return Cookies.get(TOKEN_COOKIE) ?? null;
};

export const getUserstate = (): UserState | null => {
  const jwt = getJwtToken();
  if (jwt === null) return null;

  try {
    const payload = JSON.parse(atob(jwt.split('.')[1]));
    if (!validateUserState(payload)) return null;

    return payload;
  } catch (err) {
    removeSessionData();
    return null;
  }
};

export const setUserState = (jwt: string): void => {
  Cookies.set(TOKEN_COOKIE, jwt);
};

export const isLoggedIn = (): boolean => {
  const jwt = getJwtToken();
  return jwt !== null;
};

export const login = async (email: string, password: string, navigate: NavigateFunction): Promise<string | void> => {
  const body = {
    email: email,
    password: password,
  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };

  try {
    const resp = await fetch(loginUrl, requestOptions);
    if (resp.status !== 200) {
      if (resp.headers.get('Content-Type')?.includes('text/plain')) {
        return await resp.text();
      } else {
        return 'Error: Connection error. Please try again later.';
      }
    }

    const jwt = await resp.text();
    setUserState(jwt);

    return navigate('/');
  } catch (err) {}

  return 'Login failed';
};

export const validateUser = (user: User): user is User => {
  if (typeof user !== 'object') return false;
  if (typeof user.username !== 'string') return false;
  if (typeof user.role !== 'string') return false;

  switch (user.role) {
    case Role[Role['ROLE_USER']] as unknown as Role: user.role = Role.ROLE_USER; break;
    case Role[Role['ROLE_ADMIN']] as unknown as Role: user.role = Role.ROLE_ADMIN; break;
    default: return false;
  }

  return true;
};

export const fetchUser = async (): Promise<User | null> => {
  const requestOptions = {
    method: 'GET',
    headers: { Authorization: `Bearer ${getJwtToken()}` },
  };

  try {
    const resp = await fetch(fetchUserUrl, requestOptions);
    if (resp.status !== 200) return null;

    const user = await resp.json();
    if (!validateUser(user)) return null;

    return user;
  } catch (err) {}

  return null;
};

export const updateUserState = async (): Promise<void> => {
  const user = await fetchUser();
  if (user === null) return removeSessionData();

  setUserState(user.username);
};
