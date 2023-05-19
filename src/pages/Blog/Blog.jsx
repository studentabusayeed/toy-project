import React from 'react';

const Blog = () => {
    return (
        <div className='my-6'>
            <div className='bg-slate-400 p-8 rounded bg-opacity-25 mx-24 my-4'>
                <h4 className='blog-container font-bold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                <p className='blog-container'>Ans: An access token is a short-lived credential granted to a user after authentication and authorization. It is used to access specific resources or perform actions. A refresh token is a long-lived credential issued alongside the access token. It allows the application to obtain a new access token when the current one expires.Access tokens are included in requests to protected resources, while refresh tokens are securely stored on the client-side. Access tokens are typically stored in memory or temporary storage, while refresh tokens are stored using secure mechanisms like HTTP-only cookies or encrypted local storage.</p>
            </div>
            <div className='bg-slate-400 p-8 rounded bg-opacity-25 mx-24 my-4'>
                <h4 className='blog-container font-bold'>Compare SQL and NoSQL databases?</h4>
                <p className='blog-container'>Ans: SQL databases use a structured data model based on tables with predefined schemas, enforce data integrity and relationships, and scale vertically. NoSQL databases, on the other hand, have a flexible data model, allowing various formats, don't enforce strict schemas, scale horizontally, and are designed for large-scale data and high traffic.</p>
            </div>
            <div className='bg-slate-400 p-8 rounded bg-opacity-25 mx-24 my-4'>
                <h4 className='blog-container font-bold'>What is express js? What is Nest JS?</h4>
                <p className='blog-container'>Ans: Express.js is a minimalist and flexible web application framework for Node.js. It provides a set of features and middleware that simplifies the process of building web applications and APIs. Express.js is known for its simplicity, lightweight nature, and its ability to easily integrate with other libraries and frameworks.Nest.js is a progressive, extensible, and TypeScript-based framework for building scalable and maintainable server-side applications. It is built on top of Express.js and enhances it with additional features and architectural patterns inspired by Angular. Nest.js provides a modular and organized approach to building server-side applications, emphasizing modularity, dependency injection, and strong typing. It is particularly well-suited for building complex enterprise-level applications.</p>
            </div>
            <div className='bg-slate-400 p-8 rounded bg-opacity-25 mx-24 my-4'>
                <h4 className='blog-container font-bold'>
                    What is MongoDB aggregate and how does it work?
                </h4>
                <p className='blog-container'>Ans: In MongoDB, the aggregate function is used to perform advanced data processing and analysis on collections of documents. It works by using a pipeline of stages, where each stage performs a specific operation on the input documents. The stages can include operations like filtering, grouping, sorting, and transforming data. The aggregate function allows you to chain multiple stages together to perform complex data operations and generate meaningful results.</p>
            </div>
        </div>
    );
};

export default Blog;