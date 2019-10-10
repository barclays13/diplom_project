const validationForms = () => {

    document.getElementsByName('name').forEach((element) => {
        element.addEventListener('input', () => {
            console.log(0);
            element.value = element.value.replace(/[^а-яё]/i, '');
        });
    });
    

};
export default validationForms;

//\+375[0-9]{9}$
    /*
    document.getElementsByName('phone').forEach((element) => {
        element.addEventListener('input', () => {
            console.log(2);
            element.value = element.value.replace(/[^375]{3}/, '');
            //element.value = element.value.replace(/+375[0-9+]/, '');
        });
    });
    */