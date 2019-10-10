const scrollDocument = () => {
    const topMenu = document.querySelector('.top-menu'),
    wrapper = document.querySelector('.wrapper>a');

    if ( window.scrollY == 0 ) { // wrapper показываем после 1 блока
        wrapper.style.display = 'none';
    }

    document.addEventListener('scroll', () => {
        if (window.scrollY > 190 && document.documentElement.clientWidth < 768){ // фиксируем menu-button к верху стр 
            topMenu.style.position = 'fixed';
        } else {
            topMenu.removeAttribute("style");
        }

        if (window.scrollY < 775){ // wrapper показываем после 1 блока
            wrapper.style.display = 'none';
        } else {
            wrapper.style.display = 'block';
        }
    });
};
export default scrollDocument;
