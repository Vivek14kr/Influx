let member
function createTripGroup(){
 member= [];
}
let obj = {}

Main()
function Main(){

    //memebers in a form of array
 createTripGroup()
  memberadd("ram")
   memberadd("shyam")
    memberadd("mohan")
      memberadd("mohan");
   console.log("Group Name = Vivek ", JSON.stringify(member));

   expenesadd(30, "ram")
   expenesadd(30, "shyam")
   expenesadd(30, "mohan")
   
     splitbill()
}

function memberadd(props){

 for (let i = 0; i < member.length; i++){
     if (props == member[i]){
         return
     }
 }

   member.push(props)
   for (let j = 0; j < member.length; j++) {
     let char = member[j];
     if (obj[char] == undefined) {
       obj[char] = [];
     }
   }
  

 
}


function expenesadd(expense, name){
  
        for (key in obj){
            if (key == name){
                obj[key] = Number(obj[key]) + expense
            }
        }
 
}

function splitbill(){
   for (key in obj){
       console.log(key , "  => ", obj[key])
   }
}


//additional question
let member1 = []
let obj1 = {}
Tripmain()
function Tripmain(){
  createMember(["a","b", "c","d", "e", "F", "g", "h","i", "j"])
  createExp(300)
  splitshow()
}

function createMember(propsd){
    member1 = propsd
       for (let j = 0; j < member1.length; j++) {
         let char = member1[j];
         if (obj1[char] == undefined) {
           obj1[char] = 0;
         }
       }
  


}

function createExp(num){

    let one = Math.floor(num/member1.length)
   
    for (key in obj1){
        for (let i = 0; i < one; i++){
            obj1[key] = obj1[key] + Math.floor(Math.random() * 100) + 4
        }
    }
   
}
function splitshow(){
    for (key in obj1) {
      console.log(key, "  => ", obj1[key]);
    }
}