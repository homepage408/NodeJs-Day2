let anagram = (sentenceA, sentenceB) => {
  sentenceA = sentenceA.replace(/[^\w]/g, '').toLowerCase();
  sentenceB = sentenceB.replace(/[^\w]/g, '').toLowerCase();

  return getString(sentenceA) === getString(sentenceB)
}

function getString(string) {
  data = string.split('').sort().join('');
  return data
}

console.log(anagram('hello wolrd', 'world hello'))
console.log(anagram('hello wolrd', 'world there'))
console.log(anagram('hello wolrd', 'world there!'))

console.log('**********************************************************')

function palidrom(str) {
  var re = /[\W_]/g;
  var lowStr = str.toLowerCase().replace(re, "");
  var reversStr = lowStr.split("").reverse().join("");
  return reversStr === lowStr;
}
console.log(palidrom("Cigar? Toss it in a can. It is so tragic"));
console.log(palidrom('Hello World'))
console.log('**********************************************************')

function FizzBuzz(number) {
  for (let number = 1; number <= 30; number++) {
    if (number % 2 == 0 && number % 3 == 0) {
      console.log("FizzBuzz");
    } else if (number % 3 == 0) {
      console.log("Buzz");
    } else if (number % 2 == 0) {
      console.log("Fizz");
    }
  }
}
FizzBuzz(30);
console.log('**********************************************************')

function arrayReversal(string) {
  let reverse = new Array();
  for (let i = string.length - 1; i >= 0; i--) {
    //   console.log(i)
    reverse.push(string[i]);
  }
  return reverse.join("");
}

console.log(arrayReversal('Hello World!'))
console.log(arrayReversal('Welcome World'))


console.log('**********************************************************')
function censoringWords(sentence) {
  let string = [
    "dolor",
    "elit",
    "quis",
    "nisi",
    "fugiat",
    "proident",
    "laborum",
  ];
  let re = /[\W\s]/g;
  let reSentence = sentence.toLowerCase().replace(re, " ").split(" ");
  // console.log(reString)
  let array = new Array();
  for (let i = 0; i < reSentence.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (reSentence[i] === string[j]) {
        var sensor = sentence.replace(reSentence[i], "****");
        // replace(reSentence[i], "*"* reSentence[i].length)
        console.log(sensor);
      }
    }
  }
}

var sentence =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// console.log(censoringWords(sentence));
censoringWords(sentence);

console.log('**********************************************************')
function checkLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' adalah tahun Kabisat');
    } else {
        console.log(year + ' adalah bukan tahun Kabisat');
    }
}

const year = 2004

checkLeapYear(year);

console.log('**********************************************************')

var angka = Math.floor(Math.random() * 100) + 1
console.log(`Angka random ${angka}`)
var hitung = 0
do {
    hitung += 1
}
while (angka !== Math.floor(Math.random() * 100) + 1) {
    hitung += 1
}
console.log(`Sebanyak ${hitung} langkah untuk menemukan angka yang tepat`)

console.log('**********************************************************')

angka = 1000000
for (let i = 1; i < 8; i++) {
    console.log(i * angka)
    angka = angka / 10
}