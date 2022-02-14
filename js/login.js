document.getElementById('login-submit').addEventListener('click', function() {
    const email = document.getElementById('user-email');
    const emailValue = email.value;


    const password = document.getElementById('user-password');
    const passwordValue = password.value;

    if (emailValue == 'salikur6@gmail.com' && passwordValue == 'salik') {
        window.location.href = 'banking.html'
    }
});