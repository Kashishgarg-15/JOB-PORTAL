export const catchAsyncErrors = (theFunction) => {
    return (req,res,next) => {
        Promise.resolve(theFunction(req,res,next)).catch((err)=>next(err));
    }
}

// A controller is just a function that handles a route.
// It’s where your main logic lives: reading from DB, creating users, sending responses.
// const p = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("Here’s your data!");
//   } else {
//     reject("Something went wrong.");
//   }
// });
// p.then((data) => console.log(data))
//  .catch((err) => console.log(err));
//  Why we use catchAsyncErrors?
// Because in Express, if an error happens inside an async controller, it won’t go to errorMiddleware unless you catch it manually.
// try {
//   // your code
// } catch (error) {
//   next(error);
// }
// in every function, we just use:
// catchAsyncErrors(async (req, res, next) => { ... })
// And it automatically catches and forwards errors.
// What does Promise.resolve() do?
// It takes any value (promise or not) and returns a Promise that resolves with that value.

// If the value is already a Promise, it just returns that Promise.

// If the value is not a Promise, it wraps it inside a resolved Promise
// Why use it with .catch()?
// Since .catch() is a method on a Promise, you need a Promise to call .catch() on.

// If you have a function that may or may not return a Promise, using Promise.resolve() ensures you always have a Promise.

// Then you can attach .catch() to handle any errors.
// function maybeAsync() {
//   // Could be sync or async function
//   return 42;  // sync value here, but could be a Promise sometimes
// }

// Promise.resolve(maybeAsync())
//   .then((result) => {
//     console.log("Result:", result);
//   })
//   .catch((error) => {
//     console.error("Error caught:", error);
//   });
