function pMaker(req) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(req);
    }, 2000);
  });
}

function success(req) {
  console.log(req + " was fullfiled");
}

function failure(req) {
  console.log(req + " failed");
}

let you = pMaker("Teach javascript");
you.then(success).catch(failure);
