import React from 'react';

const Blog = () => {
    return (
        <div className='py-12 w-5/6 mx-auto'>
          <div className='q1'>
            <h4 className='text-2xl py-2'>1. What are the different ways to manage a state in a React application?</h4>
            <p>There are four main types of state you need to properly manage in your React apps: <br />
                1.Local state <br />
                2.Global state <br /> 
                3.Server state <br />
                4.URL state</p>
            </div> 
           <div>
           <h4 className='text-2xl py-2'>2. How does prototypical inheritance work?</h4>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. <br /> Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p> <br />
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png" alt="" />
           </div>
           <div>
           <h4 className='text-2xl py-2'>3. What is a unit test? Why should we write unit tests?</h4>
            <p> The main objective of unit testing is to isolate written code to test and determine if it works as intended.</p> 
            <p>Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
           </div>
           <div>
           <h4 className='text-2xl py-2'>4. React vs. Angular vs. Vue?</h4>
           <h4 className='font-bold'>Angular: </h4>
            <p>Developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 </p> 
            <h4 className='font-bold'>Vue: </h4>
            <p>Also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company.</p>
            <h4 className='font-bold'>React: </h4>
            <p>Developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.</p>
           </div>
        </div>
    );
};

export default Blog;