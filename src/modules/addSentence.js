
'use strict';

const addSentence = () => {
    const addBtn = document.querySelector('#show');
    const blockHidden = document.querySelectorAll('.hidden');
    const blockVisible = document.querySelector('.visible-sm-block');  

    addBtn.addEventListener('click', () => {
        
        blockHidden.forEach((elem) => {
            elem.classList.toggle('hidden');
        });
        blockVisible.classList.toggle('visible-sm-block');

        if(addBtn.innerHTML === 'Больше...'){
            addBtn.innerHTML = 'Скрыть..';
            return;
        } else {
            addBtn.innerHTML = 'Больше...';}
    });
};

export default addSentence;