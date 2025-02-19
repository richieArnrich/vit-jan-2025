function pMaker(request) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(request);
    }, 2000);
  });
}

let you = pMaker("Please teach JS for the exam");
you
  .then((request) => {
    console.log("success: " + request);
  })
  .catch((request) => {
    console.log("error: " + request);
  });
