const btn = document.querySelector('.switch-button');
const body = document.querySelector('body');


function handleClick() {

    const styles = window.getComputedStyle(body, null).getPropertyValue('background-color');
    const save = localStorage.setItem('background', styles);
    

    if (btn) {
        btn.classList.toggle('active');
        body.classList.toggle('active');
    }
}


btn.addEventListener('click', handleClick);