
function function1(){
  console.log('Hello');
  console.log(2+2);
}


function1(); 


function calculateTax(cost, taxPercent=0.1) {
console.log(cost*taxPercent)  
}
calculateTax(2000);
calculateTax(5000);
calculateTax(10000, 0.2) 




function greet(){
  console.log('hello');
}

greet();

function greet (name){
  console.log(`hello ${name}`);
  if('name is undefined'){
    console.log('hi there')
  }
}
greet('ryan')
greet('derrick')
greet('giggs')
greet();
 

function greet (name){
if(!name){
  console.log('hi there')
};

}
greet();
greet('ryan'); 


function toFahrenheit(celsius , Fahrenheit = (celsius*(9 / 5) + 32)) {
  console.log((celsius*(9 / 5) + 32))
}
toFahrenheit(25)



function toCelsius(Fahrenheit , celsius= (Fahrenheit - 32)*5 / 9 )  {
  console.log((Fahrenheit - 32)*5 / 9)
}
toCelsius(86)


function convertTemprature (degrees , unit= f){
  console.log(f*(9 / 5) + 32 + `f`  )
}
convertTemprature(25, + `f` );





      function convertToFahrenheit(celsius = 70) {
        return (celsius * 9 / 5) + 32;
      }

      function convertToCelsius(fahrenheit = 86) {
        return (fahrenheit - 32) * 5 / 9;
      }


      function convertTemperature(degrees, unit) {
        if (unit === 'C') {
          const result = convertToFahrenheit(degrees);
          return `${result}F`;
        } else if (unit === 'F') {
          const result = convertToCelsius(degrees);
          return `${result}C`;
        }
      }

      console.log(convertTemperature(25, 'C'));
      console.log(convertTemperature(86, 'F')); 



    
      function convertLength(length, from, to) {
        if (from === 'km' && to === 'miles') {
          return `${length / 1.6} miles`;
        } else if (from === 'miles' && to === 'km') {
          return `${length * 1.6} km`;

        // You can also do if (from === 'km' && to === 'km) { ... }
        // if (from === to) is a trick you can use to save some code.
        } else if (from === to) {
          return `${length} ${to}`;
        }
      }


      console.log(convertLength(50, 'miles', 'km'));
      console.log(convertLength(32, 'km', 'miles'));
      console.log(convertLength(50, 'km', 'km')); 
   
      function convertLength(length, from, to) {
        if (from === 'km' && to === 'miles') {
          return `${length / 1.6} ${to}`;
        } else if (from === 'km' && to === 'ft') {
          return `${length * 3281} ${to}`;
          
        } else if (from === 'miles' && to === 'km') {
          return `${length * 1.6} ${to}`;

        } else if (from === 'miles' && to === 'ft') {
          return `${length * 5280} ${to}`;

        } else if (from === 'ft' && to === 'km') {
          return `${length / 3281} ${to}`;

        } else if (from === 'ft' && to === 'miles') {
          return `${length / 5280} ${to}`;

        // You can also do if (from === 'km' && to === 'km) { ... }
        // if (from === to) is a trick you can use to save some code.
        } else if (from === to) {
          return `${length} ${to}`;
        }
      }

      console.log(convertLength(50, 'miles', 'km'));
      console.log(convertLength(32, 'km', 'miles'));
      console.log(convertLength(50, 'km', 'km'));

      console.log(convertLength(5, 'miles', 'km'));
      console.log(convertLength(5, 'miles', 'ft'));
      console.log(convertLength(5, 'km', 'ft'));
 
      function convertLength(length, from, to) {
        // I like to put invalid checks at the top since it's a bit
        // easier to see. Also, if something is invalid, we can skip
        // the rest of the function.
        if (from !== 'km' && from !== 'miles' && from !== 'ft') {
          return `Invalid unit: ${from}`;
        } else if (to !== 'km' && to !== 'miles' && to !== 'ft') {
          return `Invalid unit: ${to}`;
        }
        
        if (from === 'km' && to === 'miles') {
          return `${length / 1.6} ${to}`;

        } else if (from === 'km' && to === 'ft') {
          return `${length * 3281} ${to}`;
          
        } else if (from === 'miles' && to === 'km') {
          return `${length * 1.6} ${to}`;

        } else if (from === 'miles' && to === 'ft') {
          return `${length * 5280} ${to}`;

        } else if (from === 'ft' && to === 'km') {
          return `${length / 3281} ${to}`;

        } else if (from === 'ft' && to === 'miles') {
          return `${length / 5280} ${to}`;

        // You can also do if (from === 'km' && to === 'km) { ... }
        // if (from === to) is a trick you can use to save some code.
        } else if (from === to) {
          return `${length} ${to}`;
        }
      }

      console.log(convertLength(50, 'miles', 'km'));
      console.log(convertLength(32, 'km', 'miles'));
      console.log(convertLength(50, 'km', 'km'));

      console.log(convertLength(5, 'miles', 'km'));
      console.log(convertLength(5, 'miles', 'ft'));
      console.log(convertLength(5, 'km', 'ft'));

      console.log(convertLength(5, 'lbs', 'lbs'));
 







    
      function convertLength(length, from, to) {
        // I like to put invalid checks at the top since it's a bit
        // easier to see. Also, if something is invalid, we can skip
        // the rest of the function.
        if (from !== 'km' && from !== 'miles' && from !== 'ft') {
          return `Invalid unit: ${from}`;
        } else if (to !== 'km' && to !== 'miles' && to !== 'ft') {
          return `Invalid unit: ${to}`;
        }
        
        if (from === 'km' && to === 'miles') {
          return `${length / 1.6} ${to}`;

        } else if (from === 'km' && to === 'ft') {
          return `${length * 3281} ${to}`;
          
        } else if (from === 'miles' && to === 'km') {
          return `${length * 1.6} ${to}`;

        } else if (from === 'miles' && to === 'ft') {
          return `${length * 5280} ${to}`;

        } else if (from === 'ft' && to === 'km') {
          return `${length / 3281} ${to}`;

        } else if (from === 'ft' && to === 'miles') {
          return `${length / 5280} ${to}`;

        // You can also do if (from === 'km' && to === 'km) { ... }
        // if (from === to) is a trick you can use to save some code.
        } else if (from === to) {
          return `${length} ${to}`;
        }
      }

      console.log(convertLength(50, 'miles', 'km'));
      console.log(convertLength(32, 'km', 'miles'));
      console.log(convertLength(50, 'km', 'km'));

      console.log(convertLength(5, 'miles', 'km'));
      console.log(convertLength(5, 'miles', 'ft'));
      console.log(convertLength(5, 'km', 'ft'));

      console.log(convertLength(5, 'lbs', 'lbs'));

























