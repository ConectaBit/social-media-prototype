export function isAuth() {
  return localStorage.getItem("access-token") ? true : false;
}
