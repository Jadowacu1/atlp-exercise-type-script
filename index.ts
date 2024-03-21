// This is the prime number filter
const arrNumbers: number[] = [4,8,17,20];
const isPrime = (number: number): boolean => {
    if (number <= 1) {
        return false;
    }
    for (let i: number = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
let filteredArray: number[] = []; 
const primeFilter = (arrNumbers: number[]) => {
     for(let index: number = 0; index < arrNumbers.length; index++){
        if(isPrime(arrNumbers[index])){
          filteredArray.push(arrNumbers[index]);
        }
     }
     console.log(filteredArray);
}
// primeFilter(arrNumbers);



// palindrome checking 
const myString: string = "ollo";
let reversedArr: string [] = [];
const palindroneChecker = (str: string) => {
      const arrString: string [] = str.split('');
      for(let index: number = arrString.length ; index >= 0; index --){
        reversedArr.push(arrString[index]);
      }
      let reversedString = reversedArr.join('').toString();
      console.log(reversedString);
      if(reversedString === str){
        return "The string is palindrome";
      }
      else{
        return "The string is not palindrome";
      }
}
// console.log(palindroneChecker(myString));
  

// reversing an array
const arrNumber: number[] = [1,2,3,4,5];
let arrNumberReversed: number[] = [];
const reverseNumberArr = (arr: number[] ) => {
     for(let index: number = arr.length -1 ; index >= 0; index --){
        arrNumberReversed.push(arr[index]);
     }
     return arrNumberReversed;
}
// console.log(reverseNumberArr(arrNumber));
 


// inplace array reverse 
let arr: number[] = [90,20,30,6763,532];
const inplaceArrReverse = (arrNumber: number[]):number[] => {
let left:number = 0;
let right:number = arr.length - 1;    
while(left < right){
    let temp:number = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left ++;
    right --; 
}
return arr;
}
// console.log(inplaceArrReverse(arr));


// Array & Object
interface PersonInfo  { secondName: string; age: number };
interface groupByGender {
    females: Record<string, PersonInfo>;
    males: Record<string, PersonInfo>;
}
function arrangedArray(arr: string[]): groupByGender {
    let groupByGender: groupByGender = { females: {}, males: {} };
    for(let index:number = 0; index < arr.length;index ++){
        let [fullName, ageStr, gender] = arr[index].split(', ');
        let [firstName, secondName] = fullName.split(' ');

        let age = parseInt(ageStr);
        let personInfo: PersonInfo = { 'secondName': secondName, age };

        if (gender === 'female') {
            groupByGender.females[firstName] = personInfo;
        } else if (gender === 'male') {
            groupByGender.males[firstName] = personInfo;
        }
    }
    return groupByGender;
}
let inputs = [
    "Rusaro Kelia, 18, female",
    "Murenzi Abdul, 24, male",
    "John Doe, 43, male",
    "Richard delice, 34, male",
    "Kanyana shania, 14, female",
];
// console.log(arrangedArray(inputs));


//sorting array of not prime numbers
const sortingNonePrime = (arr: number[]) => {
    const filteredArray: number[] = [];
    for (let index: number = 0; index < arr.length; index++) {
        if (!isPrime(arr[index])) { 
            filteredArray.push(arr[index]);
        }
    }
    const n:number = filteredArray.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (filteredArray[j] < filteredArray[j + 1]) {
                const temp = filteredArray[j];
                filteredArray[j] = filteredArray[j + 1];
                filteredArray[j + 1] = temp;
            }
        }
    }
    return filteredArray;
}
const arra:number[] = [1,89,65,8,17,12,13,17,18,9];

// 7. majorityArray
function majorityElement(array: number[]) {
    const result: Record<number, number> = {};
    for (let i:number = 0; i < array.length; i++) {
        const num: number = array[i];
        result[num] = (result[num] || 0) + 1;
        if (result[num] > array.length / 2) {
            console.log(array[i] + " is "+ result[num] + " out of " + array.length );
        }
    }
    return false;
}
majorityElement([8, 8, 3, 8, 3,8]);


//js async
interface student{
    name: string,
    age?:number
}

let   setStudentAgeApi = (student: student , age:number) => {
    //    console.log("1. starting");
       return new Promise(function(resolve,reject){
       setTimeout(() =>{
        //  console.log("2.Setting the age of student...");
         student.age = age;
         if(age<0){
            reject("Bad Age");
         }
         else{
            resolve(student);
         }
       },500)
    });
        //   console.log("3. done ... ");
       }
//   let student = {name: "eric" }     
// console.log(setStudentAgeApi(student,12));       
// setStudentAgeApi(student, -2).then(resolve=>{
//         console.log(resolve)
//      }).catch(err => console.log(err))

interface family{
    fatherName: string;
    motherName: string;
    childrenNumber: number;
    numberOfFamilyMembers?: number;
 }

const setFamilyMember = async (members: family[]) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let index:number = 0; index < members.length; index++) {
                members[index].numberOfFamilyMembers = members[index].childrenNumber + 2;
                if (members[index].fatherName.toLowerCase() === "yves") reject("Yves is not an allowed dad in 2022.")
            }
            resolve(members);
        }, 1000);
    });
}   
let families = [
    {
        fatherName: "David",
        motherName: "Noella",
        childrenNumber: 4,
    },
    {
        fatherName: "Emmy",
        motherName: "Ange",
        childrenNumber: 6,
    },
    {
        fatherName: "Mutoni",
        motherName: "Rachel",
        childrenNumber: 2,
    }
];

// (async () => {
//     console.log("Waiting Family DATA...")
//     try {
//         const family = await setFamilyMember(families);
//         console.log(family);
//     } catch (error) {
//         console.error(error);
//     }
// })();
