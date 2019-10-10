const mainSlider = () => {
    const mainSlider = document.querySelector('.main-slider'),
    slide = mainSlider.querySelectorAll('.slide');
    let currentSlide = 0;

    const autoPlay = () => {
        slide[currentSlide].style.display = 'none';
        currentSlide++;
        if ( currentSlide >= slide.length ){
            currentSlide = 0;
        } 
        slide[currentSlide].style.display = 'flex';
    };
    setInterval(autoPlay, 3000);
};

export default mainSlider;