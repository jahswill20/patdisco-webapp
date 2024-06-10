document.addEventListener('DOMContentLoaded', () => {
    const password = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    const EmailBtn = document.getElementById('EmailBtn');
    const EmailForm = document.getElementById('EmailForm');


    
    EmailBtn.addEventListener('click', () => {
        EmailForm.classList.remove('hidden')
        EmailBtn.classList.add('hidden');
    });
    



    eyeIcon.addEventListener('click', () => {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        eyeIcon.src = type === 'password' ? '../icons-images/eye-mini.png' : '../icons-images/eye-closed-mini.png';

        EmailBtn.classList.add('hidden');
    });

});