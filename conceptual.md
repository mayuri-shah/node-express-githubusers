### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
JavaScript provides three methods of handling asynchronous code:
1)Callbacks:-
The original method of handling asynchronicity. Callbacks allow you to provide a function to be executed after the asynchronous code has finished.
2)Promises:-
One of the main problems with callbacks is, when chaining a number of function calls together it can become increasingly difficult to follow the flow of execution. Promises aim to solve this issue by allowing you to chain together promises using the .then() syntax. 
Error handling with promises is also less complex. Rather than calling the callback with an error object, promises provide a .catch() wrapper to help manage error states.
3)Async/Await:-
In the more recent versions of JavaScript, the async and await keywords were added. This provides a cleaner method of writing promises and gives the user more control over execution order. The below example is identical to the promises example in functionality, but is written using the async and await keywords.
Error handling for async function calls is provided using a try/catch block.

- What is a Promise?
A promise is an object that may produce a single value some time in the future : either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). ... Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

- What are the differences between an async function and a regular function?
a function that returns a Promise. There is a small, but quite important difference between a function that just returns a Promise, and a function that was declared with the async keyword. The only difference between the two functions is that asyncFn is declared with the async keyword. .

- What is the difference between Node.js and Express.js?
Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.
Express.js is a framework based on Node.js for which is used for building web-application using approaches and principles of Node.js.event-driven.

- What is the error-first callback pattern?
Error-First Callback in Node. js is a function which either returns an error object or any successful data returned by the function. ... The second argument of the callback function is reserved for any successful data returned by the function. If no error occurred then the error object will be set to null

- What is middleware?
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.

- What does the `next` function do?
The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

- What does `RETURNING` do in SQL? When would you use it?
The RETURNING clause allows you to retrieve values of columns (and expressions based on columns) that were modified by an insert, delete or update. Without RETURNING you would have to run a SELECT statement after the DML statement is completed, in order to obtain the values of the changed columns

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

it has promises error...
In $.getJSON, $ is undefined...


```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
