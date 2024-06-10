document.addEventListener('DOMContentLoaded', () => {
    const password1 = document.getElementById('current-password');
    const togglevisibility1 = document.getElementById('toggle-visibility1');
    const togglevisibility2 = document.getElementById('toggle-visibility2');
    const togglevisibility3 = document.getElementById('toggle-visibility3');
    const password2 = document.getElementById('New-password');
    const password3 = document.getElementById('Confirm-password')
    const menu = document.getElementById('menu');
    const nav = document.getElementById('nav');
    const close = document.getElementById('close');
    const Hidenotification = document.getElementById('hideNotifications');
    const notifications = document.getElementById('notifications');
    const noticeIcon = document.getElementById('notificationsicon');
    
    // nav
    menu.addEventListener('click', () => {
        nav.classList.remove('-translate-x-60');
    });
    close.addEventListener('click', () => {
        nav.classList.add('-translate-x-60');
    });

// toggling visibility
    togglevisibility1.addEventListener('click', () => {
        const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
        password1.setAttribute('type', type);
        eyeIcon.src = type === 'password' ? '../icons-images/eye-mini.png' : '../icons-images/eye-closed-mini.png';

        EmailBtn.classList.add('hidden');
    });
    togglevisibility2.addEventListener('click', () => {
        const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
        password2.setAttribute('type', type);
        eyeIcon.src = type === 'password' ? '../icons-images/eye-mini.png' : '../icons-images/eye-closed-mini.png';

        EmailBtn.classList.add('hidden');
    });

    togglevisibility3.addEventListener('click', () => {
        const type = password3.getAttribute('type') === 'password' ? 'text' : 'password';
        password3.setAttribute('type', type);
        eyeIcon.src = type === 'password' ? '../icons-images/eye-mini.png' : '../icons-images/eye-closed-mini.png';

        EmailBtn.classList.add('hidden');
    });
    


    // notification
    Hidenotification.addEventListener('click', () => {
        notifications.classList.add('hidden');
    });
    noticeIcon.addEventListener('click', () => {
        notifications.classList.remove('hidden');
    });



});