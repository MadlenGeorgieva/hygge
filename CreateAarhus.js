function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    const backdrop = document.getElementById('menuBackdrop');
    
    menuOverlay.classList.toggle('active');
    
    if (backdrop) {
        backdrop.classList.toggle('active');
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menuOverlay = document.getElementById('menuOverlay');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (!menuOverlay.contains(event.target) && !menuBtn.contains(event.target)) {
        menuOverlay.classList.remove('active');
    }
});