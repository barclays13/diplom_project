const sendForm = () => {
    const errorMessage = 'Ошибка, что-то пошло не так...',
    loadMessage = 'Идет отправка...',
    successMessasge = 'Запрос отправлен!',
    consentMessage = 'Необходимо подвердить согласие!',
    chooseClubMessage = 'Необходимо выбрать клуб!',
    forms = document.querySelectorAll('.form-content>form'),
    bannerForm = document.querySelector('#banner-form'),
    thanks = document.querySelector('#thanks'),
    checkBannerForm = document.querySelector('#check1'),
    footerForm = document.querySelector('#footer_form'),
    clubsFooter = document.querySelectorAll('.choose-club>.club>input'),
    cardOrder = document.querySelector('#card_order'),
    cardCheck = document.querySelector('#card_check'),
    priceTotal = document.getElementById('price-total');


    //cardForm
    cardOrder.addEventListener('submit', (event) => {
        event.preventDefault();
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'color:black; font-size: 2rem';
        cardOrder.parentNode.append(statusMessage);

        if( !cardCheck.checked){

            if ( statusMessage.previousSibling.textContent == 'Необходимо подвердить согласие!' ||
             statusMessage.previousSibling.name == 'check'){
                statusMessage.name = 'check';
                return;
            } else {
                statusMessage.style.cssText = 'color:red; font-size: 1rem';
                statusMessage.textContent = consentMessage;
                statusMessage.name = 'check';
                return;
            }
        }
        statusMessage.textContent = loadMessage;
        const formData = new FormData(cardOrder);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        if(priceTotal){
            body.Price = priceTotal.textContent;
        }

        postData(body)
            .then(()=> {

            statusMessage.textContent = successMessasge;
            const formInput = cardOrder.querySelectorAll('input').forEach((cardOrder)=> cardOrder.value = '');
            })
            .catch((error) => {
            statusMessage.textContent = errorMessage;
            console.error(error);
            });
    });

    //footerForm
    footerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'color:white; font-size: 2rem';
        footerForm.append(statusMessage);

        if (!clubsFooter[0].checked && !clubsFooter[1].checked){
            statusMessage.style.cssText = 'color:red; font-size: 1rem';
            if ( statusMessage.previousSibling.textContent == 'Необходимо выбрать клуб!' ||
             statusMessage.previousSibling.name == 'checkbox'){
                statusMessage.name = 'checkbox';
                return;
            } else {
                statusMessage.textContent = chooseClubMessage;
                statusMessage.name = 'checkbox';
                return;
            }
        }
        const target = event.target;
        const formData = new FormData(footerForm);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
    
        postData(body)
            .then(()=> {
                thanks.style.display = 'block';
                const formInput = footerForm.querySelectorAll('input').forEach((footerForm)=> footerForm.value = '');
            })
            .catch((error) => {
                footerForm.parentNode.remove();
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
        
    });

    //баннер форм
    bannerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'color:white; font-size: 2rem';
        bannerForm.append(statusMessage);

        if( !checkBannerForm.checked){
            statusMessage.style.cssText = 'color:red; font-size: 1rem';
            if ( statusMessage.previousSibling.textContent == 'Необходимо подвердить согласие!' ||
             statusMessage.previousSibling.name == 'checkbox'){
                statusMessage.name = 'checkbox';
                return;
            } else {
                statusMessage.textContent = consentMessage;
                statusMessage.name = 'checkbox';
                return;
            }
        }

        statusMessage.textContent = loadMessage;
        const target = event.target;
        const formData = new FormData(bannerForm);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
    
        postData(body)
            .then(()=> {
                bannerForm.parentNode.remove();
                statusMessage.textContent = successMessasge;
                thanks.style.display = 'block';
                const formInput = bannerForm.querySelectorAll('input').forEach((bannerForm)=> bannerForm.value = '');
            })
            .catch((error) => {
                bannerForm.parentNode.remove();
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
    });

    // модальные окна
    forms.forEach((elem)=> {
        elem.addEventListener('submit', (event) => {
            event.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.style.cssText = 'color:white; font-size: 2rem';
            elem.parentNode.parentNode.append(statusMessage);
            statusMessage.textContent = loadMessage;

            const formData = new FormData(elem);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body)
                .then(()=> {
                elem.parentNode.remove();
                statusMessage.textContent = successMessasge;
                const formInput = elem.querySelectorAll('input').forEach((elem)=> elem.value = '');
                })
                .catch((error) => {
                elem.parentNode.remove();
                statusMessage.textContent = errorMessage;
                console.error(error);
                });
        });
    });

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










    /*
    forms.forEach((elem)=> {
        elem.addEventListener('submit', (event) => {
            event.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.style.cssText = 'color:white; font-size: 2rem';
            elem.parentNode.parentNode.append(statusMessage);
            statusMessage.textContent = loadMessage;

            const formData = new FormData(elem);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body)
                .then(()=> {
                elem.parentNode.remove();
                statusMessage.textContent = successMessasge;
                const formInput = elem.querySelectorAll('input').forEach((elem)=> elem.value = '');
                })
                .catch((error) => {
                elem.parentNode.remove();
                statusMessage.textContent = errorMessage;
                console.error(error);
                });
        });
    });

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
*/
export default sendForm;