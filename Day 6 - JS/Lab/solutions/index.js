let inter ;
// let nowTime;
function showTime() {
  let d = new Date();
  let text = d.toTimeString();
  return text.slice(0,8);
}
function writeElement() {
  document.getElementById("clock").innerHTML = showTime();
}
// const d = new Date();
// let text = d.toTimeString();
// console.log(text.slice(0,8));