export function isAuth() {
  return localStorage.getItem('isAuth');
}

export function logout() {
  localStorage.removeItem('userAuth');
  localStorage.removeItem('isAuth');
  return true;
}
