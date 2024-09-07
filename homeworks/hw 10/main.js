const buttons = document.getElementsByTagName('button');
const button = buttons[0];

button.onclick = function () {
        document.getElementById('text').remove()
    // document.getElementById('text').style.height = 0;
    // document.getElementById('text').style.display = 'none';
}


// button.addEventListener('click', ()=> {
//     const div = document.getElementById('text');
//     div.style.display = 'none';
// })

// const someForm = document.forms.someForm;
// const sendButton = someForm.sendButton;
// sendButton.addEventListener('click', ()=>{
//     const nameValue = someForm.name.value;
//     const surnameValue = someForm.surname.value;
//     const ageValue = someForm.age.value;
//     let obj = {nameValue,surnameValue,ageValue};
// });
// const target = document.getElementById('target');
// someForm.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const nameValue = someForm.name.value;
//     const surnameValue = someForm.surname.value;
//     const ageValue = someForm.age.value;
//     let obj = {nameValue,surnameValue,ageValue};
//     console.log(obj);
//     target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
// });


