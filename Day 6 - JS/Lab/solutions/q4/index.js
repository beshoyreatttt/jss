let quer = location.search;
let splittingEquals = quer.split("=");
let splittingAnd = splittingEquals[1].split("&");
console.log(splittingAnd);
document.querySelector("h1").innerHTML = `Thank You ...${splittingAnd[0]}`;
