const servicesSlider = () => {
    const servicesSlider = document.querySelector('.services-slider'),
    slides = servicesSlider.querySelectorAll('.slide-services'),
    prev = document.getElementById('services-left'),
    next = document.getElementById('services-right');


    let firstElement = 0;
    let lastElement = 4;
    
    let activeSlide = [];

    const activeSlideFirst = () =>{
        slides.forEach((elem, index) => {
            if (index < 5){
                elem.classList.add('active');
                activeSlide.push(index);
            }
        });
    };
    activeSlideFirst();

    const activeSlideLast = () =>{
        slides.forEach((elem, index) => {
            if (index > 4){
                elem.classList.add('active');
                activeSlide.push(index);
            }
        });
    };

    const cleanStrSlides = () => {
        slides.forEach( elem => {
            elem.classList.remove('active');
        });
    };
    const addActivClass = () =>{
        for(let i = 0; i < activeSlide.length; i++){
            slides[activeSlide[i]].classList.add('active');
        }
    };


    const nextSlide = () => {
        if ( lastElement == 9 ){
            cleanStrSlides();
            activeSlide = [];
            activeSlideFirst();
            lastElement = 4;
        } else {
            lastElement++;
            activeSlide.shift();
            activeSlide.push(lastElement);
            cleanStrSlides();
            addActivClass();
        }
    };

    const prevSlide = () => {
        if ( firstElement == 0 ){
            cleanStrSlides();
            activeSlide = [];
            activeSlideLast();
            firstElement = 5;
        } else {
            firstElement--;
            activeSlide.pop();
            activeSlide.unshift(firstElement);
            cleanStrSlides(); 
            addActivClass();
        }
    };

    servicesSlider.addEventListener('click', (event) => {
        const target = event.target;
        event.preventDefault();

        if (!target.matches('#services-right, #services-left')){
            return;
        }
        if (target.matches('#services-right')){
            nextSlide();
        }
        if (target.matches('#services-left')){
            prevSlide();
        }
    });   
};

export default servicesSlider;


/*
    const prevSlide = () => {
        if ( firstElement === 0 ){
            firstElement = 9;
        } else {
            firstElement--;
        }

        activeSlide.pop();
        activeSlide.unshift(firstElement);
        
        slides.forEach( elem => {
            elem.classList.remove('active');
        });
        slides.forEach((elem,index) => {
            activeSlide.forEach( value => {
                if (value == index){
                    elem.classList.add('active');
                }
            });
        });
        
    };
*/