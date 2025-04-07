//store the user in localstorage
export function storeUser(user, token) {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
}

//function to getlocal storage data
export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}
export function getToken() {
  return localStorage.getItem("token");
}