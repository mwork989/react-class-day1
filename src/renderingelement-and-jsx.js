import React from 'react';

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

// ReactDOM.render(
//     React.createElement('h1',{title:'hello world'},'welcome to react training day1'),
//     document.getElementById('root')
// )


// simple rendering of react element without jsx
let root = createRoot(document.getElementById('root'));
root.render(React.createElement('h1', null, 'welcome to react training day1'));



// simple rendering with template string without attribute 
const user = "david";

root.render(React.createElement('h1', null, `welcome to react training day1 part2 ${user}`));


// simple rendering  with attribute 


root.render(React.createElement('h1', { greet: "hello", title: "title1" }, `welcome to react training day1 part3`));


// multiple rendering of react element without jsx
const title1 = React.createElement('h1', null, `title1`)
const title2 = React.createElement('h1', null, `title2`)
const parentElement = React.createElement('div', null, [title1, title2])
root.render(parentElement);


// simple rendering with jsx

root.render(<h1>Welcome to day1 training in react with jsx</h1>);

// multiple element rendering with jsx
root.render(
    <div>
        <h1>Welcome to day1 training in react with jsx part1</h1>
        <h1>Welcome to day1 training in react with jsx part2</h1>
</div>);

// multiple element rendering with jsx with usage of variables
const employee ="david"
root.render(
    <div>
        <h1>Welcome to day1 training in react with jsx part1 {employee}</h1>
        <h1>Welcome to day1 training in react with jsx part2</h1>
</div>);

