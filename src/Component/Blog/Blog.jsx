import React from "react";

const Blog = () => {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-container">
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">When should you use context API?</h2>
            <p><strong>ANS: </strong>We should use the Context API in React when we need to share state between multiple components that are not directly related in the component hierarchy, and when prop drilling becomes frequent.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-2xl ">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">What is a custom hook?</h2>
            <p><strong>ANS: </strong>A custom hook is a JavaScript function in React that encapsulates stateful logic using built-in hooks, making code more reusable and modular.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-2xl ">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">What is useRef?</h2>
            <p><strong>ANS: </strong>useRef is a built-in hook in React that returns a mutable ref object whose current property is initialized to the passed argument. It can be used to access and manipulate DOM elements, persist values between renders, and more.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-2xl ">
          <div className="card-body ">
            <h2 className="card-title text-2xl font-bold">What is useMemo?</h2>
            <p><strong>ANS: </strong>useMemo is a built-in hook in React that allows us to memoize a function's return value, preventing unnecessary re-computation of expensive operations on every render. It takes a function and a list of dependencies, and returns a memoized value that only changes when the dependencies change.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

// a. When should you use context API?
// b. What is a custom hook?
// c. What is useRef?
// d. What is useMemo?
