// Code your solutions in this file
//reverse the count from 10 to 0
//>= 0 && count < 11

//array bracket notation and string literals
function writeCards(names, surprise) {
  return [
    `Thank you, ${names[0]}, for the wonderful ${surprise} gift!`,
    `Thank you, ${names[1]}, for the wonderful ${surprise} gift!`,
    `Thank you, ${names[2]}, for the wonderful ${surprise} gift!`,
  ];
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

//reverse countdown from 10-0 and invoke 11 console.log()
function countDown() {
  let count = 0;
  let myArr = [];
  while (count < 11) {
    myArr.push(count);
    count++;
  }
  let reverseArr = myArr.reverse();
  console.log(reverseArr[0]);
  console.log(reverseArr[1]);
  console.log(reverseArr[2]);
  console.log(reverseArr[3]);
  console.log(reverseArr[4]);
  console.log(reverseArr[5]);
  console.log(reverseArr[6]);
  console.log(reverseArr[7]);
  console.log(reverseArr[8]);
  console.log(reverseArr[9]);
  console.log(reverseArr[10]);
}
countDown();

//option 2
/*function countDown(myArr) {
  let count = 0;
  while (count === count++ && count <= 1) {
    let reverseArr = myArr.reverse();
    return reverseArr);
  }
}
countDown([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);*/
