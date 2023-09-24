let i = 16; // Number of boxes you want to add
const grid_container = document.getElementsByClassName('grid')[0]; // Assuming that you have only one element with class "grid"

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

for (let n = 0; n < i*i; n++) {
    const grid_box = document.createElement('div');
    grid_box.className = 'box';
    grid_box.style.width = '2em';
    grid_box.style.height = '2em';
    grid_box.style.borderStyle = 'solid';
    grid_box.style.borderColor ='white';
    grid_container.appendChild(grid_box);
    
}