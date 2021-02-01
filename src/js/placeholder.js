const coinCounter = (moneyToCount, coinCount, coinValues) => {
  if (!coinCount) {
    coinCount = [];
  }
  if (!coinValues) {
    coinValues = [25, 10, 5, 1];
  } 
  if (moneyToCount <= 0) {
    return coinCount;
  } else {
    moduloValue = moneyToCount % coinValues[0];
    coinCount.push((moneyToCount - moduloValue) / coinValues[0]);
    moneyToCount = moneyToCount - coinCount[coinCount.length-1] * coinValues[0];
    coinValues.shift();
    return coinCounter(moneyToCount, coinCount, coinValues);
  }
}

console.log(coinCounter(499));
console.log(coinCounter(514));
console.log(coinCounter(625));
console.log(coinCounter(789));

// REFACTOR
// Analysis:
// 1. We always get the same output - DONE
// 2. Always returns something - DONE
// 3. Cannot rely on external variables - DONE
// 4. Cannot rely on external state - DONE - not 100% sure
// 5. No side effects - DONE

// Fixes:
// 1. How do we use index values in a recursive function? 
// 2. In the simple example of the doubledArray method we have the numArray being doubled into this new array. Can we combine .map() and recursion
// to factor this code. That way, we would never need to instantiate/convert coinValues/coinCount

// --------
// Setup
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


// Is using i pure? How do we instantiate a variable one time, when the recursive call 
// We're zeroing out coinValues -> using index(i)
// How could we get the closure to collapse in such a way that we don't need to append each iterations coinCount

// Define coincount at first level inside of function, but you declare let array = array, you'll pass it or 
// let coinCount = coinCount || [];