document.addEventListener('DOMContentLoaded', () => {
    const EmailBtn = document.getElementById('EmailBtn');
    const EmailForm = document.getElementById('EmailForm');
    const password = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    


    // functions for SignIn
    EmailBtn.addEventListener('click', () => {
        EmailForm.classList.remove('hidden');
        EmailBtn.classList.add('hidden');
    });
  

    togglePassword.addEventListener('click', () => {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        eyeIcon.src = type === 'password' ? './icons-images/eye-mini.png' : './icons-images/eye-closed-mini.png';
    });

});