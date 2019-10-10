const head = () => {
    const callbackForm = document.getElementById('callback_form'),
    freeVisitForm = document.getElementById('free_visit_form'),
    popup = document.querySelectorAll('.popup'),
    fixedGift = document.querySelector('.fixed-gift'),
    gift = document.getElementById('gift'),
    clubsList = document.querySelector('.clubs-list'),
    nameClubs = clubsList.querySelector('ul');

    
    document.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains('close_icon') || target.classList.contains('overlay') || target.classList.contains('close-btn')){ 
            popup.forEach( (elem) => {
                elem.style.display = "none";
            });
        }
        if(target.matches('.clubs-list>p')){
            if (nameClubs.hasAttribute("style") ){
                nameClubs.removeAttribute("style");
                return;
            } 
            if (nameClubs.style.display = "none" ) {
                nameClubs.style.display = "block";
            }
        }

        if (target.matches('.fixed-gift>img')){
            fixedGift.style.display = 'none';
            gift.style.display = 'block';
        }
        if (target.classList.contains('open-popup')){
            freeVisitForm.style.display = "block";
        }
        if (target.matches('.head-main>.right>.call>.btn')){
            callbackForm.style.display = 'block';
        }
    });
};

export default head;