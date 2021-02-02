const coinCounter = (moneyToCount, coinCount = [], coinValues = [25,10,5,1]) => {
  if (moneyToCount <= 0) {
    return coinCount;
  } else {
    moduloValue = moneyToCount % coinValues[0];
    newCoinCount = coinCount.concat(Math.floor(moneyToCount / coinValues[0]));
    newCoinValues = coinValues.slice(1);
    return coinCounter(moduloValue, newCoinCount, newCoinValues);
  }
}

console.log(coinCounter(499));
console.log(coinCounter(514));
console.log(coinCounter(625));
console.log(coinCounter(789));

// Travis Refactor Suggestions
// a) Utilize default parameters, defaults, in the definition of function. Arguments that you might pass in, and might not you can do coinCount = []
// b) floor() is a factor because it rounds down: (moneyToCount - moduloValue)
// c) line 7 moneyToCount - coinCount[coinCount.length-1] * coinValues[0] simply evaluates to modulovalue found on line 5
// d) line 8 is mutating, and it's bad. Don't do side effects... but updating the DOM is a side effect (because it's not a return value).
// e) shift (mutating) refactor: new variable equal to coinValues[1]
// f) push (mutating) refactor: spread operator (tonights HW), concat 
// f continued) spread operator suggestion elippses ... 
// equals "take all the values inside arr2 and spread them out"
// let arr1 = ['a','b','c'];
// let arr2 = arr1.slice(1);
// let arr3 = arr2.concat('d');

// function asdf(a, b, c);
// asdf(...arr1); // works
// asdf(arr1) // doesnt work

// make a new array, and tack on another elemtn
// let arr3 = [...arr2, 'b'];

// altenratively, use concat
// let arr3 = arr2.concat('d');

// g) refactor return value into a dictionary so that if the user passes in 25, and gets [1] back, they know thats a quarter
// g continued) 
// make new value for coinValues and pass that in

// also what if they passed in 25
// [1], but how do you know if it's quarters, dimes, nickles, pennies
// You could solve this by using a 

// Fixes:
// 1. How do we use index values in a recursive function? 
// 2. In the simple example of the doubledArray method we have the numArray being doubled into this new array. Can we combine .map() and recursion
// to factor this code. That way, we would never need to instantiate/convert coinValues/coinCount
// Is using i pure? How do we instantiate a variable one time, when the recursive call 

// We're zeroing out coinValues -> using index(i)
// How could we get the closure to collapse in such a way that we don't need to append each iterations coinCount

// Define coincount at first level inside of function, but you declare let array = array, you'll pass it or - DONE
// let coinCount = coinCount || [];

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

// Pure Checklist:
// 1. We always get the same output - DONE
// 2. Always returns something - DONE
// 3. Cannot rely on external variables - DONE
// 4. Cannot rely on external state - DONE - not 100% sure
// 5. No side effects - DONE