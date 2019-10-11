const sendForms = () => {
    const errorMessage = 'Ошибка, что-то пошло не так...',
    loadMessage = 'Идет отправка...',
    successMessasge = 'Запрос отправлен!',
    consentMessage = 'Необходимо подвердить согласие!',
    chooseClubMessage = 'Необходимо выбрать клуб!',
    form1 = document.getElementById('form1'),
    form2 = document.getElementById('form2'),
    bannerForm = document.querySelector('#banner-form'),
    thanks = document.querySelector('#thanks'),
    checkBannerForm = document.querySelector('#check1'),
    footerForm = document.querySelector('#footer_form'),
    clubsFooter = document.querySelectorAll('.choose-club>.club>input'),
    cardOrder = document.querySelector('#card_order'),
    cardCheck = document.querySelector('#card_check'),
    priceTotal = document.getElementById('price-total'),
    form = document.querySelectorAll('form');

    form.forEach((oneForm) => {
        oneForm.addEventListener('submit',(event) => {
            event.preventDefault();
            const target = event.target;
            const statusMessage = document.createElement('div');
            statusMessage.style.cssText = 'color:white; font-size: 2rem';

            if (target.matches('#card_order')){
                cardOrder.parentNode.append(statusMessage);
            if (!cardCheck.checked){
                if (statusMessage.previousSibling.textContent == 'Необходимо подвердить согласие!' ||
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
            }
            if (target.matches('#footer_form')){

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

                const formData = new FormData(footerForm);
                let body = {};
                formData.forEach((val, key) => {
                    body[key] = val;
                });
    
                postData(body)
                    .then(()=> {
                        thanks.style.display = 'block';
                        const formInput = footerForm.querySelectorAll('input').forEach((footerForm) => {
                            footerForm.value = '';
                        });
                    })
                    .catch((error) => {
                        footerForm.parentNode.remove();
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    });
            }
            if (target.matches('#banner-form')){

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
                const formData = new FormData(bannerForm);
                let body = {};
                formData.forEach((val, key) => {
                    body[key] = val;
                });
    
                postData(body)
                    .then(()=> {
                        statusMessage.textContent = successMessasge;
                        thanks.style.display = 'block';
                        const formInput = bannerForm.querySelectorAll('input').forEach((bannerForm) => {
                            bannerForm.value = '';
                    });
                    })
                    .catch((error) => {
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    });
            }
            if (target.matches('#form1')){
                form1.parentNode.parentNode.append(statusMessage);
                        statusMessage.textContent = loadMessage;
                        const formData = new FormData(form1);
                        let body = {};
                        formData.forEach((val, key) => {
                            body[key] = val;
                        });
                        postData(body)
                            .then(()=> {
                            form1.parentNode.remove();
                            statusMessage.textContent = successMessasge;
                            const formInput = form1.querySelectorAll('input').forEach((form1)=> form1.value = '');
                            })
                            .catch((error) => {
                                form1.parentNode.remove();
                            statusMessage.textContent = errorMessage;
                            console.error(error);
                        });
            }
            if (target.matches('#form2')){
                form2.parentNode.parentNode.append(statusMessage);
                        statusMessage.textContent = loadMessage;
                        const formData = new FormData(form2);
                        let body = {};
                        formData.forEach((val, key) => {
                            body[key] = val;
                        });
                        postData(body)
                            .then(()=> {
                            form2.parentNode.remove();
                            statusMessage.textContent = successMessasge;
                            const formInput = form2.querySelectorAll('input').forEach((form2)=> form2.value = '');
                            })
                            .catch((error) => {
                                form2.parentNode.remove();
                            statusMessage.textContent = errorMessage;
                            console.error(error);
                        });
            }
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
export default sendForms;