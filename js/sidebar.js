function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    
    sidebar.classList.toggle('open');
    content.classList.toggle('shifted');
}

function navigateTo(page) {
    toggleSidebar();
    
    if (page === 'signIn') {
        window.location.href = 'signIn.html';
    } else if (page === 'signUp') {
        window.location.href = 'signUp.html';
    }
}

function logOut() {
    document.getElementById('logoutModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('logoutModal').style.display = 'none';
}

function confirmLogout() {
    window.location.href = 'logout.html';
}
