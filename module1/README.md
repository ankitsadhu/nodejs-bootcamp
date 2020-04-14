# ES6

  # 1. Arrow Function

 ```javascript
    //function
    hello = function() {
    return "Hello World!";
    }

    //with arrow function
    hello = () => {
        return "Hello World!";
    }
```

```javascript
    //If the function has only one statement, and the statement 
    //returns a value, you can remove the brackets and the return keyword
    hello = () => "Hello World!";

    //If you have parameters, you pass them inside the parentheses:
    hello = (val) => "Hello " + val;

     //if you have only one parameter, you can skip the parentheses as well:
    hello = val => "Hello " + val;

 ```

   - Arrow & this

# **Asynchronous JS**

- **Callbacks**

A callback function is a <mark> function that is passed as an argument to another function, to be “called back” at a later time </mark>. A function that accepts other functions as arguments is called a <mark> higher-order function </mark>, which contains the logic for when the callback function gets executed. It’s the combination of these two that allow us to extend our functionality.

```javascript
   // add() function is called with arguments a, b 
   // and callback, callback will be executed just  
   // after ending of add() function 
   function add(a, b , callback){ 
   document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>"); 
   callback(); 
   } 
     
   // disp() function is called just 
   // after the ending of add() function  
   function disp(){ 
   document.write('This must be printed after addition'); 
   } 
     
   // Calling add() function 
   add(5,6,disp);
```

```console
     Ronie@Ankit-MacBook-Air ~ % node app.js
     The sum of 5 and 6 is 11.
     This must be printed after addition
```


```javascript
    function add(a, b , callback){ 
   document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>"); 
   callback(); 
   } 
   
   // add() function is called with arguments given below 
   add(5,6,function disp(){ 
   document.write('This must be printed after addition.'); 
   });
```

```javascript
    function add(a, b , callback){ 
   document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>"); 
   callback(); 
   } 
   
   // add() function is called with arguments given below 
   add(5,6,disp() => { 
   document.write('This must be printed after addition.'); 
   });
```

- **Promises**
Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
   
   A Promise has four states:
    - fulfilled: Action related to the promise succeeded.
    - rejected: Action related to the promise failed.
    - pending: Promise is still pending i.e not fulfilled or rejected yet.
    - settled: Promise has fulfilled or rejected.


    Syntax
    
    ```javascript
        var promise = new Promise(function(resolve, reject){
            //do something
        });
        
    ```
        
- Parameters

    - Promise constructor takes only one argument,a callback function.
    - Callback function takes two arguments, resolve and reject
    - Perform operations inside the callback function and if everything went well then call resolve.
    - If desired operations do not go well then call reject.

    ```javascript
        var promise = new Promise(function(resolve, reject) { 
            const x = "Developer"; 
            const y = "Developer";
            if(x === y) { 
            resolve(); 
            } else { 
            reject(); 
            } 
        }); 
    
        promise. 
        then(function () { 
            console.log('Success, You are a Developer'); 
        }). 
        catch(function () { 
            console.log('Some error has occured'); 
        }); 
    ```

- **Async/Await**
