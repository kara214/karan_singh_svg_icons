document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', (event) => {
        console.log(`Icon clicked: ${event.target.id}`);
    });
});
function shakeIcon(event) {
    let icon = event.target;
    icon.classList.add('shake');

    // Remove the class after animation completes
    setTimeout(() => {
        icon.classList.remove('shake');
    }, 300);
}

// Apply event listener to all icons
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', shakeIcon);
});