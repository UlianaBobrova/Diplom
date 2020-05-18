
'use strict';

const sendForm = () => {
    //переменные с сообщениями,которые мы будем передавать пользователю
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    
        const formMain = document.querySelector('.main-form');
        const formCapture = document.querySelector('.capture-form')
        const inputEmail = document.querySelectorAll('.form-email');
        const inputTel = document.querySelectorAll('.phone-user');
        const inputName2 = document.querySelector('#name_2');
        const inputQuestion = document.querySelector('#userQuest');
        const popupConsultation = document.querySelector('.popup-consultation');
        const formConsultation = document.querySelector('#sendQuestionForm');
        const inputName13 = document.querySelector('#name_13');
        const directorBtn = document.querySelector('.director-btn');
      
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
    
     //вешаем на форму обработчик события,срабатывает submit
        formMain.addEventListener('submit', (event) => {
        
            event.preventDefault();
            formMain.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(formMain);
            let body = {};
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

            formCapture.addEventListener('submit', (event) => {
        
                event.preventDefault();
                formCapture.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(formCapture);
                let body = {};
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

        //Модальное окно "Получить консультацию"
        directorBtn.addEventListener('click', (event) => {
            event.preventDefault();
            popupConsultation.style.display = 'block';
            let userMsg = inputQuestion.value;
        
            formConsultation.addEventListener('submit', (event) => {
    //отменяем стандартное поведение,чтобы страница не перезагружалась после кнопки submit
            event.preventDefault();
            formConsultation.appendChild(statusMessage);
        //когда состояние readyState поменялось с 0 появилось сообщение Загрузка...
            statusMessage.textContent = loadMessage;
                    
            const formData = new FormData(formConsultation);
        //Если серверу надо передать в JSON-формате,извлекаем данные из formData,переберем данные с цикле for of
            let body = {};
            body.user_quest = userMsg;
        //с помощью метода .entries вытащим значения из formData.Получаем массив
            for(let val of formData.entries()) {
        //Добавляем полученные данные в body. Значения с ключом.Получаем объект
                body[val[0]] = val[1];                   
            }
         //в postData передаем body, callback-фун-ию(outputData-оповещение пользователя) 
         postData(body, 
                    () => { 
                    statusMessage.textContent = successMessage;
                    }, 
                    (error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                    });
            clearInput();
            });
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