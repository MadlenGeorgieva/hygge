const galleryData = [
    {
        img: "Pictures/Create Aarhus Home.jpg",
        title: "Aarhus",
        subtitle: "Create"
    },
    {
        img: "Pictures/Domen Home.jpg",
        title: "Domen's Coffee",
        subtitle: ""
    },
    {
        img: "Pictures/Creating Moments Home.jpg",
        title: "Moments",
        subtitle: "Creating"
    }
];

let currentIndex = 1; // start with center image

const leftImg = document.querySelector(".image-left img");
const centerImg = document.querySelector(".image-central img");
const rightImg = document.querySelector(".image-right img");

const leftText = document.querySelector(".image-left h3");
const centerText = document.querySelector(".image-central h3");
const rightText = document.querySelector(".image-right h3");

const leftBtn = document.querySelector(".arrow-left");
const rightBtn = document.querySelector(".arrow-right");

function updateGallery() {
    const leftIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    const rightIndex = (currentIndex + 1) % galleryData.length;

    leftImg.src = galleryData[leftIndex].img;
    centerImg.src = galleryData[currentIndex].img;
    rightImg.src = galleryData[rightIndex].img;

    leftText.textContent = galleryData[leftIndex].title;
    centerText.textContent = galleryData[currentIndex].title;
    rightText.textContent = galleryData[rightIndex].title;
}

updateGallery();

rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryData.length;
    updateGallery();
});

leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    updateGallery();
});








function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    const backdrop = document.getElementById('menuBackdrop');
    
    menuOverlay.classList.toggle('active');
    
    if (backdrop) {
        backdrop.classList.toggle('active');
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menuOverlay = document.getElementById('menuOverlay');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (!menuOverlay.contains(event.target) && !menuBtn.contains(event.target)) {
        menuOverlay.classList.remove('active');
    }
});