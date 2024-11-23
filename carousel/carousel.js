const image=document.getElementById('image');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let images;
const bullets =document.querySelectorAll('.bullets');

const fetchImages =async()=>{
   const res = await fetch('https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json');
   const mydata = await res.json();
   images = Object.values(mydata).map(item =>  item.flag.large); 
   images=images.slice(0,5);

   const length = images.length;
   let currentIndex = 0;
   image.src = images[currentIndex];

   prev.addEventListener('click', ()=>{
    currentIndex=(currentIndex-1 + length)%length;
    image.src = images[currentIndex];
    updateBullet(currentIndex);
   });
   next.addEventListener('click',()=>{
        currentIndex = (currentIndex+1)%length;
        image.src=images[currentIndex];
        updateBullet(currentIndex);
   });
   
} 
fetchImages();

function updateBullet(currentIndex){

   const bullets = document.querySelectorAll('.bullets div');
   bullets.forEach(bullet => bullet.style.color = 'black')
   const  bullet =  document.getElementById(`bullet-${currentIndex}`);
   bullet.style.color="red";

}






