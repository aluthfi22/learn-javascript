const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done!!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("dah beres!!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("hai mahluk laut");
