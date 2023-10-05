const ul = document.querySelector('ul');
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', () => {
    const myitem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listbtn  = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myitem;
    listItem.appendChild(listbtn);
    listbtn.textContent = 'Delete';
    ul.appendChild(listItem);
    
    listbtn.addEventListener('click', () => {
        ul.removeChild(listItem);
    });
    input.focus();
});
