import { AUTHORITY, IS_AUTH } from '../constants/localStorage';
import { logOutAction } from '../redux/actions/user';
import { GraphService } from '../services';
export function isAuth() {
  return localStorage.getItem(IS_AUTH);
}

export function getAuth() {
  return JSON.parse(localStorage.getItem(AUTHORITY));
}

export async function logout() {
  localStorage.removeItem(AUTHORITY);
  localStorage.removeItem(IS_AUTH);
  await GraphService.AADLogout();
  return true;
}
