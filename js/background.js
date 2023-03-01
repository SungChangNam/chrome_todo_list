const images =[
    '03.jpeg','01.jpeg','02.jpeg'
];

const chosenImage = images[Math.floor(Math.random() *images.length)];

const bgImage =document.createElement('img');

bgImage.src =`img/${chosenImage}`;

document.body.appendChild(bgImage);