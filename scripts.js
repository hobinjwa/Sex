let image = document.getElementById("woman");
let movedDown = false;

document.addEventListener('click', () => {
    movedDown = !movedDown;
    
    if (movedDown) {
        image.style.transform = 'translateY(-150px)';
    } else {
        image.style.transform = 'translateY(-90px)';
    }
});