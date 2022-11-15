const btn = document.querySelector('.switch-button');

function handleClick() {
    if (btn) {
        btn.classList.toggle('active');
        document.body.classList.toggle('active');
    }
}


btn.addEventListener('click', handleClick);