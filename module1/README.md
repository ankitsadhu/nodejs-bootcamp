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

```
    //If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
    hello = () => "Hello World!";

    //If you have parameters, you pass them inside the parentheses:
    hello = (val) => "Hello " + val;

     //if you have only one parameter, you can skip the parentheses as well:
    hello = val => "Hello " + val;

 ```

   - Arrow & this

# **Asynchronous JS**
  - Callbacks, Promises and Async/Await

- **Callbacks**

A callback function is a <mark>function that is passed as an argument to another function, to be “called back” at a later time</mark>. A function that accepts other functions as arguments is called a <mark>higher-order function</mark>, which contains the logic for when the callback function gets executed. It’s the combination of these two that allow us to extend our functionality.
```javascript
    function createQuote(quote, callback){ 
    var myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2
    }

    function logQuote(quote){
    console.log(quote);
    }

    createQuote("eat your vegetables!", logQuote); // 1
```

```terminal
    terminal: node aap.js 
     Like I always say, eat your vegetables!
```
- **Promises**

- **Async/Await**
