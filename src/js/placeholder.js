// Take amount of money (4.99)
// FYI: Base case == 0 (?)
// Key value pair of coin increments 
//
// Program:
// 
// coin[0] = 499 % 25
// remQuarter = 24
// numQuarters = total - remQuarter / coin[0] // 19
// coin[1] = 24 % 10
// remDime = 4
// numDimes = total - remDime / coin[1] // 2
// coin[2] = 4 % 5
// remNickel = 4
// numNickels = total - remNickel / coin[2] // 0
// coin[3] = 4 % 1
// remPenny = 0
// numPennies = total - remPenny / coin[3] // 4

// 19 Quarters, 2 dimes, 0 nickels, 4 pennies

coinValues = [25, 10, 5, 1];
coinCount = [];
const coinCounter = (moneyToCount) => {
  if (moneyToCount <= 0) {
    return coinCount;
  } else {
    moduloValue = moneyToCount % coinValues[0];
    coinCount.push((moneyToCount - moduloValue) / coinValues[0]);
    moneyToCount = moneyToCount - coinCount[coinCount.length-1] * coinValues[0];
    coinValues.shift();
    return coinCounter(moneyToCount);
  }
}

console.log(coinCounter(499));

// const incrementCounter = (counter) => {
//   // counter is 3 or more
//   if (counter >= 3) {
//     return counter;
//   } 
//   // counter is less than 3
//   else {
//     console.log(counter);
//     return incrementCounter(counter + 1);
//   }
// }

// const recurseReverse = (string) => {
//   if (string === "") {
//     return "";
//   } else {
//     return recurseReverse(string.substring(1)) + string[0];
//   }
// }