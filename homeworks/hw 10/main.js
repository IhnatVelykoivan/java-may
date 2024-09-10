const buttons = document.getElementsByTagName('button');
const button = buttons[0];

button.onclick = function () {
    document.getElementById('text').style.display = 'none';
}

button.addEventListener('click', ()=> {
    const div = document.getElementById('text');
    div.style.display = 'none';
})

const someForm = document.forms.someForm;
const sendButton = someForm.sendButton;

sendButton.addEventListener('click', ()=>{
    const nameValue = someForm.name.value;
    const surnameValue = someForm.surname.value;
    const ageValue = someForm.age.value;
    let object = {nameValue,surnameValue,ageValue};
});
const target = document.getElementById('target');
someForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nameValue = someForm.name.value;
    const surnameValue = someForm.surname.value;
    const ageValue = +someForm.age.value;
    let obj = {nameValue,surnameValue,ageValue};
    target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
});


let currentNum = +localStorage.getItem('num') || 0;
currentNum += 1;
localStorage.setItem('num', currentNum);

document.getElementById('div').innerText = currentNum;

let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList))
for (const sessionsListElement of sessionsList) {
        const div = document.createElement('div');
        div.innerText = sessionsListElement.toString();
        document.body.appendChild(div);
};

const input =document.getElementById('xxx');
const res = document.getElementById('res')
input.oninput = function () {
        res.innerText = +this.value*2.2;
};

const tableT = document.getElementById('table');

const tableForm = document.forms['table'];
tableForm.onsubmit = function (e) {
        tableT.innerText = '';
        e.preventDefault();
        const linesValue = +tableForm.lines.value;
        const cellsValue = +tableForm.cells.value;
        const dataValue = tableForm.data.value;
        console.log(linesValue,cellsValue,dataValue)

        for (let i = 0; i < linesValue; i++) {
                const tr = document.createElement('tr');
                tableT.appendChild(tr);
                for (let j = 0; j < cellsValue; j++) {
                        const td = document.createElement('td');
                        td.innerText = dataValue;
                        tr.appendChild(td);

                }
        }
};

function addToLocal (arrName, objName){
        const lsItem = localStorage.getItem(arrName);
        if (!lsItem){
                throw new Error('Not found')
        }
        const array = JSON.parse(lsItem);
        if (typeof objName === 'object') {
                array.push(objName);
        }
        localStorage.setItem(array,JSON.stringify(array));
}
addToLocal('sessionsList',{})

