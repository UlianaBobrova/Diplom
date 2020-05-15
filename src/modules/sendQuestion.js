'use strict';

const sendQuestion = () => {

    //переменные с сообщениями,которые мы будем передавать пользователю
    const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const inputMsg = document.querySelector('#userQuest');
    const popupConsultation = document.querySelector('.popup-consultation');
    const formConsultation = document.querySelector('#sendQuestionForm');
    const inputName = document.querySelector('#name_13');
    const directorBtn = document.querySelector('.director-btn');

    //очистка input-ов
    const clearInput = () => {
        document.querySelectorAll('input').forEach((item) => {
            item.value = ''; 
        });
    };

    inputMsg.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-я \.\,\:\?\-\+\@\_0-9]/gi, '');
    });
    inputName.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-я ]/gi, '');
        });    

    //div для хранения сообщений для пользователя
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';

    //Модальное окно "Получить консультацию"
    directorBtn.addEventListener('click', (event) => {
        event.preventDefault();
            popupConsultation.style.display = 'block';
            let userMsg = inputMsg.value;
            
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
     const postData = (body, outputData, errorData) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if(request.readyState !== 4) {
                return;
            }
            if(request.status === 200) {
                outputData();
            } else {
                errorData(request.status);
            }
        });
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');

        request.send(JSON.stringify(body));
    };
};    

export default sendQuestion;