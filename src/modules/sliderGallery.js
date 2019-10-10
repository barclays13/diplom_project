const sliderGallery = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
    slides = gallerySlider.querySelectorAll('.slide'),
    btn = document.querySelectorAll('.gallery-btn'),
    dots = document.querySelectorAll('.dot');

    
    slides.forEach( (slide, index) => {
        if (index == 0) {
            slide.style.display = 'block';
        } else if (index !== 0) {
           slide.style.display = 'none';
        }
    });

    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };

    const nextSlide = (elem, index) => {
        
        elem[index].style.display = 'block';
    };

    const prevDot =(elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    
    const nextDot =(elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    let currentSlide = 0,
    interval = 0;
    const autoPlay = () => {
        prevSlide(slides,currentSlide);
        prevDot(dots,currentSlide, 'dot-active');
        currentSlide++;
        if ( currentSlide >= slides.length ){
            currentSlide = 0;
        } 
        nextSlide(slides,currentSlide);
        nextDot(dots,currentSlide, 'dot-active');
    };

    const startSlide = ( time = 2500 ) => {
        interval = setInterval (autoPlay , time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    gallerySlider.addEventListener('click', (event) => {
        let target = event.target;
        event.preventDefault();

        if(!target.matches('.slider-arrow, .dot')){ //проверяем клики по кнопкам prev and next and dot
            return;
        }

        prevSlide(slides,currentSlide); //у текущего слайда убираем акт классы
        prevDot(dots,currentSlide, 'dot-active');//у текущей точки убираем акт классы

        if (target.matches('#services-right')){ // клик некст добавляем +1 слайд
            currentSlide++;
        } if (target.matches('#services-left')){ // клик прев уменьшем -1 слайд
            currentSlide--;
        } else if (target.matches('.dot')){ // по индексу активируем точку
            dots.forEach((elem, index) => {
                if ( elem === target){
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slides.length){ // проверка на посл слайд, то возвр к 1 слайду
            currentSlide = 0;
        } if (currentSlide < 0){ // проверка есди 1 слайд и жмем прев то переход к посл
            currentSlide = slides.length -1 ;
        } 
        nextSlide(slides,currentSlide); // присв. акт классы
        nextDot(dots,currentSlide, 'dot-active');

    });

    gallerySlider.addEventListener('mouseover', (event) => { //при наведении мышки на указ. слайды приост слайдер
        if (event.target.matches('.slider-arrow') || 
        event.target.matches('.dot')){
            stopSlide();
        }
    });

    gallerySlider.addEventListener('mouseout', (event) => { //при убранной мышки запускаем слайд
        if (event.target.matches('.slider-arrow') || 
        event.target.matches('.dot')){
            startSlide();
        }
    });

    startSlide(3000);
};
export default sliderGallery;