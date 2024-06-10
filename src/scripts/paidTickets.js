
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const close = document.getElementById('close');
    const nav = document.getElementById('nav');
    const noticeIcon = document.getElementById('notificationsicon');
    const Hidenotification = document.getElementById('hideNotifications');
    const notifications = document.getElementById('notifications');
    const profile = document.getElementById('Profile');
    const Logoutbtn = document.getElementById('Logout');
    const desktoplogut= document.getElementById('icon-logout');
    const logoutbtnDesktop = document.getElementById('logoutbtn');
    const deleteTicket = document.getElementById('deleteTicket');
    const MoreIcon = document.getElementById('MoreIcon')

    menu.addEventListener('click', () => {
        nav.classList.remove('-translate-x-60');
    });

    close.addEventListener('click', () => {
        nav.classList.add('-translate-x-60');
    });

    noticeIcon.addEventListener('click', () => {
        notifications.classList.remove('hidden');
    });

    Hidenotification.addEventListener('click', () => {
        notifications.classList.add('hidden');
    });

    profile.addEventListener('click', () => {
      Logoutbtn.classList.toggle("hidden");
    });

    desktoplogut.addEventListener('click', () => {
        logoutbtnDesktop.classList.toggle('hidden');
    });

    MoreIcon.addEventListener('click', () => {
        deleteTicket.classList.toggle('hidden');
    });
  

});
