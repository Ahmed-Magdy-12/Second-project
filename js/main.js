let inputTasks = document.getElementById('inputTasks');
let addBtn = document.getElementById('addTasks');
let allTasks = document.getElementById('allTasks');
let noTasks = document.getElementById('noTasks');
let InvalidData = document.getElementById('InvalidData');
let closeBtn = document.getElementById('close');
let btnmodel = document.getElementById('btnmodel');
let model = document.getElementById('model');

let showmodel = ()=>{
    model.classList.toggle('block');
}
btnmodel.addEventListener('click' , showmodel);
let noTask = () => {
    if (allTasks.childElementCount == 0) {
      noTasks.classList.remove('none');
    }
}

let closeData = () => {
    InvalidData.remove();
};

let fulldata = () => {
    let Data = inputTasks.value ; 
    if (inputTasks.value = "" || inputTasks.value.length < 3 || inputTasks.value.length > 20) {
        InvalidData.classList.remove('none');
        inputTasks.value = "";
    } else {
        noTasks.classList.add('none');
        allTasks.innerHTML += `<div class="task alert alert-info"> ${Data} <i class="check fa-solid fa-trash-can float-right"></i> </div>`;
        inputTasks.value = "";
        allTasks.addEventListener('click', function (e) {
            if (e.target.classList.contains('task')) {
                e.target.classList.toggle('checked');
            }
        })
        showmodel();

    }

}

addBtn.addEventListener('click', fulldata);
closeBtn.addEventListener('click', closeData);

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('check')) {
        e.target.parentElement.remove();
        noTask();
    }

});