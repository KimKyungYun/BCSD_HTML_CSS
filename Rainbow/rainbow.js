const RAINBOW_COLOR = ['#EF3550', '#F9A825', '#EEFF41', '#43A047', '#0000FF', '#000080', '#7E57C2'];
let box_index = 0;
let color_index = 0;
const box = document.querySelectorAll('.inner');

document.querySelector('#btn').addEventListener('click', () => {
    box.forEach((item)=>{item.style.backgroundColor='white';});
    if (box_index == box.length)
        box_index = 0;
    if (color_index == RAINBOW_COLOR.length)
        color_index = 0;
    box[box_index++].style.backgroundColor = RAINBOW_COLOR[color_index++];
});
