const popupMenu = () => {
    
    const topMenu = document.querySelector('.top-menu'),
    btnTopMenu = topMenu.querySelector('img'),
    popupMenu = document.querySelector('.popup-menu'),
    btnpopupMenu = popupMenu.querySelector('img');

    btnTopMenu.addEventListener('click', () => {
        popupMenu.style.display = 'flex';
    });
    popupMenu.addEventListener('click', () => {
        popupMenu.style.display = 'none';
    });
};
export default popupMenu;