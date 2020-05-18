
'use strict';

const sendForm = () => {
    //переменные с сообщениями,которые мы будем передавать пользователю
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
 
        const formCapture = document.querySelectorAll('.mix');
        const inputEmail = document.querySelectorAll('.form-email');
        const inputTel = document.querySelectorAll('.phone-user');
        const inputName2 = document.querySelector('#name_2');
        const inputQuestion = document.querySelector('#userQuest');
        const popupConsultation = document.querySelector('.popup-consultation');
        const inputName13 = document.querySelector('#name_13');
        const directorBtn = document.querySelector('.director-btn');
        let userMsg;

    //очистка input-ов
        const clearInput = () => {
            document.querySelectorAll('input').forEach((item) => {
                item.value = ''; 
            });
        };
    
    //валидация вводимых знаков
        inputEmail.forEach((elem) => elem.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[^a-z\.\-\+\@\_0-9]/gi, '');
            })
        );
    
        inputTel.forEach((elem) => elem.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^0-9+]/gi, '');
            })
        );
    
        inputName2.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[^а-я ]/gi, '');
            });         
        inputName13.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[^а-я ]/gi, '');
            });         
    
        inputQuestion.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[^а-я \.\,\:\?\-\+\@\_0-9]/gi, '');
        });
    
    //div для хранения сообщений для пользователя
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem;';

            formCapture.forEach((elem) => {
                elem.addEventListener('submit', (event) => {
                event.preventDefault();
                elem.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(elem);
                let body = {};
                body.user_quest = userMsg;
                for(let val of formData.entries()) {
                    body[val[0]] = val[1];                   
                }
                postData(body)
                        .then((response) => {
                            if(response.status !== 200) {
                                throw new Error('Status network not 200');
                            }
                            statusMessage.textContent = successMessage;
                            setTimeout(() => {statusMessage.textContent = ''}, 5000);
                        })
                        .catch((error) => {
                            statusMessage.textContent = errorMessage;
                            setTimeout(() => {statusMessage.textContent = ''}, 5000);
                            console.error(error);
                        });           
                clearInput();
                });     
            });

        //Модальное окно "Получить консультацию"
        directorBtn.addEventListener('click', (event) => {
            event.preventDefault();
            popupConsultation.style.display = 'block';
            userMsg = inputQuestion.value;
        });

    //функция обращения к серверу
            const postData = (body) => {
             return fetch('./server.php', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
             });   
            };
    };
    

export default sendForm;