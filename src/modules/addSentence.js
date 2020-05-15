
'use strict';

const addSentence = () => {
    const addBtn = document.querySelector('#show');
    const removeBtn = document.querySelector('#close');
    const blockHidden = document.querySelector('.hidden');
    const blockVisible = document.querySelector('.visible-sm-block');  

    addBtn.addEventListener('click', () => {
        blockHidden.classList.toggle('hidden');
        blockVisible.classList.toggle('visible-sm-block');
        addBtn.style.display = 'none';
        // addBtn.textContent = 'Скрыть..';
        });
};


export default addSentence;