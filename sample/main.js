const slider= document.querySelector(".circular-slider");
const image= document.querySelector(".slider .img");
const indicator =document.querySelector(".indicator");
const menuItems =document.querySelectorAll(".menu span");
const descriptions= document.querySelectorAll(".text");

const rotationValues =[-58,-32,0,32,58];

const colors= [
    "radial-gradient(#75d124, #3e7b08))",
    "radial-gradient(#ff4b5f, #a40b16 )",
    "radial-gradient(#5d4040, #362525)",
    "radial-gradient(#fdb76d, #f08a00  )",
    "radial-gradient(#e7ad59, #883e2a)",
];

const images= [
    "img1", "img2", "img3", "img4", "img5"
];

let itemIndex=2;

function rotate(rotationValues){
    image.style.transform = `rotate(${rotationValues}deg)`;
    indicator.style.transform= `translate(-50%, -50) rotate(${rotationValues}deg)`;

}
menuItems.forEach((menuItem, i)=>{
    menuItem.addEventListener("click",() =>{
        image.style.backgroundImage="url(img/"+ images[i]+ ".png)"; 
        slider.style.background= colors[i];

        if(i>itemIndex){
            rotate(rotationValues[itemIndex] -10);

        }else if(i<itemIndex){
            rotate(rotationValues[itemIndex] +10);
        }else {
            return "";
        }
        setTimeout(()=>{
            rotate(rotationValues[i]);

        },300);

        descriptions.forEach(text =>{
            text.style.display="none";
        });
        descriptions[i].style.display="block";
        itemIndex=i;

    });
});