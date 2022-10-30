console.log("LENGVESNI");
console.log("1 uzdavinys");
multiplyNum(5,8);

function multiplyNum(a,b){
    console.log("a * b = "+a*b);
}
//----------------------------------------------
console.log("2 uzdavinys");
sayHiName("Jonas");

function sayHiName(name) {
    console.log("Hi " + name + "!");
}

//----------------------------------------------
console.log("3 uzdavinys");
findCharNum("labas");

function findCharNum(text) {
    // text.replace(/\s/g, ''); => panaikina tekste esancius tarpus
    text = text.replace(/\s/g, '');
    console.log("Tekste esanciu simboliu sk: " + text.length);
}

//----------------------------------------------
console.log("4 uzdavinys");

findInitials("jonas", "petraitis")

function findInitials(firstName, lastName) {
    let initials = "";
    firstName = firstName.replace(/\s/g, '');
    lastName = lastName.replace(/\s/g, '');
    initials += firstName[0];
    initials += lastName[0];
    console.log(initials.toUpperCase());
}
//----------------------------------------------
console.log("5 uzdavinys");
printNum(1234);

function printNum(num) {
    let numPlace = document.getElementById("numberPlace");
    numPlace.innerText = num;
}
//----------------------------------------------
console.log("6 uzdavinys");
//----------------------------------------------
console.log("7 uzdavinys");

printNumStr();

function printNumStr(params) {
    let num = "";
    for (let i = 0; i < 3; i++) {
        let randomNum = Math.round(Math.random() * 5);
        num += randomNum;
        num += ", ";   
    }
    console.log(num.slice(0, num.length - 2));
}
//----------------------------------------------
console.log("8 uzdavinys");

console.log(generateRandomNum(5,25));

function generateRandomNum(min,max) {
    let randomNum = Math.round(Math.random() * (max - min) + min)
    return randomNum;
}
//----------------------------------------------
console.log("9 uzdavinys");
createPtag();
function createPtag() {
    let sequence = document.getElementById("sequence");
    let innerValue = "";
    for (let i = 0; i < 10; i++) {
        innerValue += "<p>";
        innerValue += i + 1;
        innerValue += "</p>";
    }
    sequence.innerHTML = innerValue;
}
//----------------------------------------------
console.log("10 uzdavinys");
//----------------------------------------------
console.log("VIDUTINIAI");
console.log("1 uzdavinys");

console.log(raiseDegree(5,3));
function raiseDegree(num, degree) {
    let num2 = num;
    for (let i = 1; i < degree; i++) {
        num*=num2;
    }
    return num;
}
//----------------------------------------------
console.log("2 uzdavinys");

let htmlID = document.getElementById("printNumHere");
raiseDegree2(3,3,htmlID)
function raiseDegree2(num, degree, htmlID) {
    let num2 = num;
    for (let i = 1; i < degree; i++) {
        num*=num2;
    }
    htmlID.innerText = num;
}
//----------------------------------------------
console.log("SUNKESNI");
console.log("1 uzdavinys");

displayTextToH1("LABAS JONAI!")
function displayTextToH1(text) {
    let h1tag = document.getElementById("h1tag");
    h1tag.innerText = text;
}
//----------------------------------------------
console.log("2 uzdavinys");

displayTextToH("labas",1);
function displayTextToH(text, tagNum) {
    let tag = "<h" + tagNum + ">" + text + "</h" + tagNum + ">"
    let div = document.getElementById("newDiv")
    div.innerHTML = tag;
}
//----------------------------------------------
console.log("3 uzdavinys");

displayString(50)
function displayString(length) {
    var string           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        string += characters.charAt(Math.floor(Math.random() * charactersLength));
      //  string += " ";
    }
    // cia saugosiu stringe esancius skaicius
    let numbers = "";
    for (let i = 0; i < string.length; i++) {
        if (isNumber(string[i])) 
        {
            numbers += string[i];  
        }else if (!isNumber(string[i]) && isNumber(string[i-1])) {
            numbers += " ";  
        }
    }
    let tag = "<h1>" + numbers + "</h1>"
    let div = document.getElementById("newDiv2");
    div.innerHTML = tag;
}

function isNumber(char) {
    if (typeof char !== 'string') {
      return false;
    }
  
    if (char.trim() === '') {
      return false;
    }
  
    return !isNaN(char);
  }
  //----------------------------------------------
  console.log("4 uzdavinys");
  let numIsOdd = false;
  console.log(findNum(20));
  // atranda is kiek skaiciu argumentas dalijasi be liekanos
  function findNum(number) {
      // sveiku skaiciu (is kuriu argumentas dalijasi be liekanos) kiekis 
      let intNum = 0;
      for (let i = 2; i < number; i++) {
          if (number % i == 0) {
              intNum++;
            }
    }
    return intNum;
}
//----------------------------------------------
console.log("5 uzdavinys");
let newArray = createArray(33,77,100);
console.log(newArray);

const num=[13,17,14,19,16];
let temp;
for(let i=0;i<newArray.length;i++){
    for(let j=i+1;j<newArray.length;j++){
        if(findNum(newArray[i])<=findNum(newArray[j])){
            temp=newArray[i]
            newArray[i]=newArray[j]
            newArray[j]=temp
        }
    }
}
console.log(newArray);

//----------------------------------------------
console.log("6 uzdavinys");
let array = [];
let arrayNum = [];

function createArray(min, max, length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        let randomNum = Math.round(Math.random() * (max-min) + min) 
        array[i] = randomNum;
    }
    return array
}

arrayNum = createArray(333, 777, 100);
console.log(arrayNum);

findOddNum(arrayNum);
function findOddNum(numberArray) {
    let arrayID = [];
    let ID = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 > 0) {
            arrayID[ID] = numberArray[i];
            ID++;
        }
    } 
    for (let i = 0; i < numberArray.length; i++) {
        for (let a = 0; a < arrayID.length; a++) {
            if (numberArray[i] == arrayID[a]) {
                numberArray.splice(i, 1);       
            }       
        } 
    }
    console.log(numberArray);
    
}
//----------------------------------------------
console.log("7 uzdavinys");

let fullArr = fullArray();
console.log(fullArr);


// paskutinis array
function createlastArr() {
    let lastArray = [];
    let minLength = 10;
    let maxLength = 20;
    let lastArrlastElement = 0;
    let randomLength = Math.round(Math.random() *(maxLength - minLength) + minLength);
    for (let i = 0; i < randomLength; i++) {
        if (i < randomLength - 1) {
            let randomNum = Math.round(Math.random() * 10);
            lastArray[i] = randomNum;
        }else{
            lastArray[i] = lastArrlastElement;

        }
    }
    return lastArray;
   // console.log(lastArray);
}

function createNewArr(lastElement){
    let array = [];
    let minLength = 10;
    let maxLength = 20;
    let randomLength = Math.round(Math.random() *(maxLength - minLength) + minLength);
    for (let i = 0; i < randomLength; i++) {
        if (i < randomLength - 1) {
            let randomNum = Math.round(Math.random() * 10);
            array[i] = randomNum;
        }else{
            array[i] = lastElement;
        }
    }
    return array;
}

function fullArray() {
    let array = [];
    let minRepeat = 10;
    let maxRepeat = 30;
    let randomRepeat = Math.round(Math.random()*(maxRepeat-minRepeat)+minRepeat);
    for (let i = 0; i < randomRepeat; i++) {
        let lastArray = createlastArr();
        if (i == 0) {
           array = createNewArr(lastArray);
        }else{
            array = createNewArr(array);
        }
    }
    console.log("Random REPEAT: " + randomRepeat);
    return array
}
//----------------------------------------------
console.log("8 uzdavinys");
// console.log(array[array.length-1].length);
console.log("Visu elementu, kurie nera masyvai suma: " + findElementSum(fullArr));

function findElementSum(array){
    let currentArray = array;
    let elementSum = 0
    while (true) {
        for (let i = 0; i < currentArray.length; i++) {
            if (i < currentArray.length - 1) {
                elementSum += currentArray[i];
            }else{
                currentArray = currentArray[i];
            }
        }
        if (currentArray == 0) {
            break;
        }
    }
    return elementSum
}
//----------------------------------------------
console.log("9 uzdavinys");

oddNum();

function oddNum() {
    let newArray2 = createArray(1,33,3);
    while (true) {
        let evenNumExist = false;
        for (let i = newArray2.length - 1; i >= newArray2.length - 3; i--) {
            if (newArray2[i] % 2 == 0) {
                evenNumExist = true;
            }
        } 

        if (!evenNumExist) {
            console.log("DONE");
            console.log(newArray2);
            break;
        }else{
            newArray2.push(Math.round(Math.random()*(33-1)+1))
        }
    }
    
}
//----------------------------------------------
console.log("10 uzdavinys");
let array2 = [];
let array2Length = 10
for (let i = 0; i < array2Length; i++) {
    array2[i] = createArray(1,100,10);
}

while (true) {
    let oddNumAvr = findOddNumAverage(array2).toFixed(2);
    if (oddNumAvr > 70) {
        console.log("Pirminiu skaiciu vidurkis: " + oddNumAvr);
        break;
    }
    array2 = findMin(array2);
}

function findOddNumAverage(array) {
    let oddNumSum = 0;
    let oddNum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let a = 0; a < array[i].length; a++) {
            if (array[i][a] % 2 > 0) {
                oddNumSum += array[i][a];
                oddNum++;
            }
        }        
    }
    return oddNumSum / oddNum;
}
// randa min reiksme visame masyve ir prideda tris Grazina array su pakeista min reiksme
function findMin(array) {
    let minValue = 100;
    let min_i = 0;
    let min_a = 0;
    for (let i = 0; i < array.length; i++) {
        for (let a = 0; a < array[i].length; a++) {
            if (array[i][a] < minValue) {
                minValue = array[i][a];
                min_i = i;
                min_a = a;
            }
        }        
    }
    array[min_i][min_a] += 3;
    return array;
}

//----------------------------------------------
console.log("11 uzdavinys");
//----------------------------------------------
console.log("12 uzdavinys");
//----------------------------------------------
