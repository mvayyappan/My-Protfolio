function moveCarousel(projectId, direction) {
    const card = document.querySelector(`.project-card[data-project-id="${projectId}"]`);
    if (!card) return;

    const images = card.querySelectorAll('.project-img');
    let currentIndex = -1;

    // Find current active index
    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            currentIndex = index;
        }
    });

    if (currentIndex === -1) return;

    // Remove active from current
    images[currentIndex].classList.remove('active');

    // Calculate new index
    let newIndex = currentIndex + direction;
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;

    // Add active to new
    images[newIndex].classList.add('active');
}
