//1
function countToTwenty(){
  for (let i = 1; i <= 20; i++){
      console.log(i);
  }
}
// countToTwenty();

//2
function countFromTwenty(){
  for (let i = 20; i >= 1; i--){
      console.log(i);
  }
}
// countFromTwenty();

//3
function countToN(number){
  for (let i = 1; i <= number; i++){
      console.log(i);
  }
}
// countToN(5);
//4
function countFromN(number){
  for (let i = number; i >= 1; i--){
      console.log(i);
  }
}
// countFromN(10);

//5
function countEveryOdd(integer){
  for (let i = 1; i <= integer; i ++){
      if (i % 2 !== 0){
          console.log(i);
      }
  }
}
countEveryOdd(9);
