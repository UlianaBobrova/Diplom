'use strict';

const togglePopup = () => {
    //получаем popup окна
    const popup = document.querySelectorAll('.popup');
    const popupCall = document.querySelector('.popup-call');
    const callBtn = document.querySelectorAll('.call-btn');
    const discountBtn = document.querySelectorAll('.discount-btn');
    const popupDiscount = document.querySelector('.popup-discount');
    const checkBtn = document.querySelector('.check-btn');
    const popupCheck = document.querySelector('.popup-check');
    
    //Вызов модального окна при клике на надпись "Перезвоните мне"
        callBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
            popupCall.style.display = 'block';
            });
        });
    
        discountBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
            popupDiscount.style.display = 'block';
            });
        });
    
     //Вызов модального окна при клике на кнопку "Получить чек-лист и скидку"
        checkBtn.addEventListener('click', () => {
            popupCheck.style.display = 'block';
            });
    
     //закрытие модального окна
        popup.forEach((elem) => {
            elem.addEventListener('click', (event) => {
            let target = event.target;
                if(target.classList.contains('popup-close')) {
                elem.style.display = 'none';
        
                } else {
            target = target.closest('.capture-form');
                    if(!target) {
                    elem.style.display = 'none';
                    }
                }
            });
        });
    };
    
export default togglePopup;