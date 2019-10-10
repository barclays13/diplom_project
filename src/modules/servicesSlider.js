const servicesSlider = () => {
    const servicesSlider = document.querySelector('.services-slider'),
    slides = servicesSlider.querySelectorAll('.slide-services'),
    prev = document.getElementById('services-left'),
    next = document.getElementById('services-right');


    let firstElement = 0;
    let lastElement = 4;
    let activeSlide = [0,1,2,3,4];

    const nextSlide = () => {

        if ( lastElement === 9 ){
            lastElement = 0;
        } else {
            lastElement++;
        }

        activeSlide.shift();
        activeSlide.push(lastElement);
        slides.forEach( elem => {
            elem.classList.remove('active');
        });

        slides.forEach((elem,index) => {
            
            activeSlide.forEach( value => {
               
                if (value == index){                    
                    elem.classList.add('active');
                }
            })
        })
    };

    const prevSlide = () => {
        console.log('prev');
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
            })
        })
        
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