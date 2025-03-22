document.querySelectorAll('.modal-trigger').forEach(image => {
    image.addEventListener('click', function() {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');

        modalImage.src = this.src; 
        modal.style.display = 'flex'; 
    });
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('imageModal').style.display = 'none';
});

