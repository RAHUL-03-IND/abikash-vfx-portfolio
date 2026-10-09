// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Category Filtering System (The 4 Options requirement)
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Modal Video Player Functions
const modal = document.getElementById('videoModal');
const modalIframe = document.getElementById('modalIframe');
const modalTitle = document.getElementById('modalTitle');

function openModal(videoUrl, title) {
    modal.style.display = 'flex';
    modalIframe.src = videoUrl + '?autoplay=1';
    modalTitle.textContent = title;
}

function closeModal() {
    modal.style.display = 'none';
    modalIframe.src = '';
}

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
