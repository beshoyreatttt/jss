// let telephone = '01023456771';
// if (telephone.match(/^(01)(2|0|5|1)\d{8}$/)) {
//   document.write('good number')
// }

// Create array that contain some tips about JavaScript (Array of 10 strings, each string
//   is tip about JS), and show random tip for the user each time he opens the page "Tip of
//   the day".

// let randomNumber, arrayOfTips;

// arrayOfTips = [
//   "Stay hydrated",
//   "Exercise daily",
//   "Eat healthy food",
//   "Get enough sleep",
//   "Read regularly",
//   "Practice gratitude",
//   "Meditate often",
//   "Limit screen time",
//   "Set clear goals",
//   "Stay positive",
// ];

// randomNumber = parseInt(Math.random() * 10);
// alert(arrayOfTips[randomNumber]);

/*
2-Make a button that display the current date and time in local format on the page.
*/

// function getDateInButton() {
//   let d = new Date();
//   document.write(d.toLocaleTimeString());
//   document.write(d.toLocaleDateString());
// }

// 3- Ask the user to enter his Email, and use function strings (Don’t use RegExp) to check
// if the Email contains @, and not in the first or last index.

// let Email = prompt("Enter Your Email : ");
// let lenghtOfEmail = Email.length - 1;
// console.log(lenghtOfEmail);
// if (Email[0] === "@" || Email[lenghtOfEmail] === "@") {
//   document.write("wrong input");
// } else if (Email.indexOf("@") < 1) {
//   document.write("wrong input");
// } else {
//   document.write(`THANK YOU!! your email is ${Email}`);
// }

//4-

// let userName ;//prompt('enter your name');
// let userEmail;

// let checkUserName;

// let checkEmail;

// do {
//   userName = prompt('enter your name: ');
//   checkUserName = userName.match(/^([a-z]{3,} )+[a-z]{3,}$/i);
//   userEmail = prompt('enter your Email: ');
//   checkEmail = userEmail.match(
//     /^.{3,}@.{3,}(.com.eg)|(.net.eg)|(edu.eg)|(.org.eg)$/i
//   );
// } while (!checkUserName&&!checkEmail);



//6-
// let studentGrade = [60,100,10,15,85];

// studentGrade.sort(function(a,b){return b-a});
// console.log(studentGrade);
// console.log('highest degree is : '+studentGrade[0]);
// //or
// console.log('highest degree is : '+studentGrade.find(function(studentGrade){return studentGrade<=100}));
// console.log(`grades < 100 ${studentGrade.filter(function(studentGrade){return studentGrade<=60})}`);


//7-
// let obj1 = {
//   'studenName':'pisho',
//   'grade':60
// };
// let obj2 = {
//   'studenName':'refaat',
//   'grade':100
// };
// let obj3 = {
//   'studenName':'willliam',
//   'grade':10
// };
// let obj4 = {
//   'studenName':'boktor',
//   'grade':15
// };
// let obj5 = {
//   'studenName':'estafanos',
//   'grade':85
// };
// let data = [obj1,obj2,obj3,obj4,obj5];

// let bestDegree = data.find(function(data){return data.grade>=90&&data.grade<=100});
// console.log('Best Degree is : ' + bestDegree.studenName);
// let lessThan60 = data.filter(function(data){return data.grade < 60});
// for (let i = 0; i < lessThan60.length; i++) {
//   console.log(lessThan60[i].studenName + ' is '+lessThan60[i].grade);
  
// }
// let obj6 = {
//   'studenName':'hedra',
//   'grade':95
// }
// data.push(obj6);
// for (let key in data) {
//   console.log(data[key].studenName+ " : " +data[key].grade);
// }
// data.pop(obj6);
// console.log('--------------------------');
// for (const iterator of data) {
//   console.log(iterator.studenName+' : '+iterator.grade);
// }

// console.log('--------------------------');
// let newData = new Array();
// for (let i = 0; i < data.length; i++) {
//   newData.push(data[i].studenName);
// }
// console.log(newData.sort());
// console.log('--------------------------');
// let obj7 = {
//   'studenName':'bellgates',
//   'grade':95
// }
// let obj8 = {
//   'studenName':'stevejops',
//   'grade':95
// }
// data.splice(2,0,obj7,obj8);
// for (const iterator of data) {
//   console.log(iterator.studenName+' : '+iterator.grade);
// }
// console.log('--------------------------');
// data.splice(3,1);
// for (const iterator of data) {
//   console.log(iterator.studenName+' : '+iterator.grade);
// }



