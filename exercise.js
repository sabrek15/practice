const div = document.querySelector('#container');

const new_div = document.createElement('div');
new_div.setAttribute('class', 'newdiv');

new_div.textContent = 'Hello, World!';
div.appendChild(new_div);

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
div.insertBefore(para,new_div);

const h3 = document.createElement('h3');
h3.textContent = "Hey I'm blue h3";
div.appendChild(h3);

const other_div = document.createElement('div');
other_div.setAttribute('class','other_div');
other_div.setAttribute('style', 'border-color: black; background-color: pink');
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
const new_para = document.createElement('p');
new_para.textContent = "ME TOO";
other_div.appendChild(h1);
other_div.appendChild(new_para);
div.appendChild(other_div);

