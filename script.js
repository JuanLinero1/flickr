const slider = document.querySelector(".slider")

const images = [
    "/images/transitionImages/image1.jpg",
    "/images/transitionImages/images2.jpg",
    "/images/transitionImages/images3.jpg",
    "/images/transitionImages/images4.jpg",
]

let num = 0

slider.innerHTML = `<img src="${images[0]}" alt="bg-Image">`;
const sum = () => {
    num++
    if(num === images.length){
        num = 0;
    }
    slider.innerHTML = `<img src="${images[num]}" alt="bg-Image">`;
    slider.style,transition = `all 2s ease`;
    console.log("this thing is working", num)
} 

setInterval(sum, 5000)


