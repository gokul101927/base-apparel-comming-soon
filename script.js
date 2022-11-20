const form = document.getElementById('form');
const email = document.querySelector('.email');

form.addEventListener('submit', e => {
    e.preventDefault();
    const emailField = form['email'].value;

    if (emailField === '' || (!isValid(emailField))) {
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }
    
})

function isValid(emailField) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailField).toLowerCase());
}