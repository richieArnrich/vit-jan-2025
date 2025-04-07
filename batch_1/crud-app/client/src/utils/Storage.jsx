export const storeUser = (user, token) => {
  //store user in local storage
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export const getUser = () => {
  //get user from local storage
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  if (user && token) {
    return JSON.parse(user);
  }
};
