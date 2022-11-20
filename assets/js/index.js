const body = document.querySelector("body");
const btn = document.querySelector(".switch-button");


window.onload = () => {

}

function saveValues(value, key) {
    localStorage.setItem(value, key);
}

function getValues(value, key) {
    const values = localStorage.getItem(value, key);
    return values;
}

function handleClick() {

    btn.classList.toggle('active');
    body.classList.toggle('active');

    const styleVerify = () => {
        const styles = getComputedStyle(body, null).getPropertyValue('background-color');
        return styles;
    }
    
    const btnVerify = () => {
        
        return btnAuth;
    }

    console.log(btnVerify());

    // if (localStorage.getItem === undefined) {
    //     saveValues('background', );
    //     saveValues('buttonState');
    // }
}



btn.addEventListener('click', handleClick);