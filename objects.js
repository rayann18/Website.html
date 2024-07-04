  
    let product ={
      name : 'basketball',
      price: 2095,
    
      ['delivery-time' ] : '3 days'
    
      
    }
    console.log(product);
    console.log(product.name);
    product.price += 500
    
    console.log(product)
    console.log(product.delivery-time)
    
   
    
    let product1 = {name: 'Basketball' , price: 595}
    let product2 = {name: 'Basketball' , price: 1995}
    
    
    function comparePrice(product1,product2){
      if(product1.price < product2.price){
        return product1
      } else{
        return product2
      }
    }
    console.log(comparePrice(product1, product2))


const product1 = {name:'netball' , price : 100}
const product2 = {name : 'netball', price : 500}

function isSameProduct(product1, product2){
if(product1 === product2){
  return 'true'
} else{
  return 'false'
}
}
console.log(isSameProduct(product1.name.price, product2.name.price))



const product3 = {name:'football' , price : 100}
const product4 = {name : 'volleyball' , price: 100}

const product1= {name:'netball', price: 295}
const product2 = {name: 'netball', price: 2595}

function isSameProduct(product1, product2){
  if (product1.name === product2.name && product1.price === product2.price){
    return 'true'
  } else {
    return 'false'
  }
}

console.log(isSameProduct(product1,product2))
console.log(isSameProduct(product3,product4))

var greeting = 'GoodMorning'
var greeting2 = greeting.toLowerCase();
console.log(greeting2 )

var rptgreeting = 'test  '.repeat(5)
var rptgreeting = 'test  '.repeat(10)
var rptgreeting = 'test  '.repeat(15)

console.log(rptgreeting)


let calculation = 4
let loadedCalculation = loadCalculation();

function saveCalculation(calculation){
  localStorage.setItem('calculation' , calculation)
}

function loadCalculation(){
  return localStorage.getItem('calculation')
}

console.log(loadedCalculation)




function coinFlip(){
  return Math.random()  < 0.5? 'heads' : 'tails'
}

function playgame(guess){
  let result = coinFlip()
  if (guess === result){
    console.log('you win , the result was ' + result )
  } else {
    console.log('you lose, the result was ' + result)
  }
}
playgame('heads');
playgame('tails')

const score = {wins:0 , losses: 0}

function updateScore(result){
  if(result ==='win'){
    score.wins += 1
  } else if(result ==='losses'){
    score.losses += 1
  }

}
console.log(score)


function playgameAndUpdateScore(guess){
let result = coinFlip();
if(guess === result){
  console.log('you win , the result was '  + result)
  updateScore('win')
} else{
  console.log('you lose,  the result was ' + result)
  updateScore('loss')
}
}

playgameAndUpdateScore('heads')
playgameAndUpdateScore('tails') 


function saveScore(score){
localStorage.setItem('score', JSON.stringify(score));
}

function loadScore(score){
   score = localStorage.getItem('score', )
  return score ? JSON.parse(score) : {wins :0 , losses: 0};
}


playgameAndUpdateScore('heads')
playgameAndUpdateScore('tails')
let loadedScore = loadScore()
console.log(loadedScore);





//objects

const person =  {name : 'alice' , age : 30 ,
   
greet : function() //object method     
    {
    console.log('hello')
  }
}
console.log(person.name);
console.log(person.age);
person.greet()


 //objects as refferences

 const original = {name : 'alice'}
 const copy = original 
 console.log(copy)


 copy.name = 'bob'
 console.log(original.name )
 console.log(copy.name )


 //object destructuring



 const user1 = {
 username: 'jdoe' , email: 'jdoeatgmail.com',}
 console.log(user1.username)


 const  {username , email} = user1
 console.log(username)
 console.log(email)


//shorthand method

const car = {
  brand : 'toyota',
  model : 'corrola',
  start(){console.log('car started')} // object method
}
car.start()


//shorthand property

const brand = 'ford'
const model = 'mustang'
const vehicle = {brand , model , year: 2021}
console.log(vehicle)
