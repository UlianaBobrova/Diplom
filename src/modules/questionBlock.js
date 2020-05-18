'use strict';

const questionBlock = () => {
    const accordionTwo = document.querySelector('#accordion-two');
    const collapse = accordionTwo.querySelectorAll('.panel-collapse');
    const collapsedBtn = accordionTwo.querySelectorAll('.panel-heading');

    const toggleCollapse = (index) => {
        for(let i = 0; i < collapse.length; i++) {
            if(index === i) {
                collapse[i].classList.add('in');
            }else {
                collapse[i].classList.remove('in');
            }
        }
    };

//Добалвляем класс collapse-in элементу,на который нажали
    accordionTwo.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

             while(target !== accordionTwo) {
                 if(target.classList.contains('panel-heading')) {
                     collapsedBtn.forEach((item, i) => {
                         if(item === target) {
                             toggleCollapse(i);
                         }
                     });
                     return;
                 }
                 target = target.parentNode;
             }
    });       
};


export default questionBlock;