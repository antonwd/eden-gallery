const dropDownMenu = document.querySelectorAll("nav .drop-down a");

for (let i = 0; i < dropDownMenu.length; i++) {
    dropDownMenu[i].addEventListener("click", function() {
        dropDownMenu[i].parentElement.nextElementSibling.classList.toggle("open");
        dropDownMenu[i].parentElement.classList.toggle("open");
    });
}

const mobileMenuToggle = document.getElementById("toggle-menu");
mobileMenuToggle.addEventListener("change", () => {
    document.querySelector("nav").classList.toggle("open-nav");
})

const artists = document.querySelectorAll("#artists .artist-box .artist");

for (let i = 0; i < artists.length; i++) {
    let boxBg = artists[i].getAttribute("data-artist-img");
    artists[i].style.backgroundImage = "url('assets/img/content-img/"+boxBg+"')";
}

const wishBoxes = document.querySelectorAll("#artworks .artwork-box .wish-click-box");

for (let i = 0; i < wishBoxes.length; i++) {
    wishBoxes[i].addEventListener("click", () => {
        wishBoxes[i].classList.toggle("checked");
    })
}

const sharingBoxes = document.querySelectorAll("#artworks .artwork-box .share-it");

for (let i = 0; i < sharingBoxes.length; i++) {
    sharingBoxes[i].addEventListener("click", () => {
        sharingBoxes[i].classList.toggle("show-box");
    })
    const closeBtn = sharingBoxes[i].querySelectorAll(".close-btn");
    closeBtn[0].parentElement.classList.toggle("shiw-box");
}

const inputFields = document.querySelectorAll("#subscribe .form-control");
for(let i = 0; i < inputFields.length; i++) {
    inputFields[i].querySelector("input").addEventListener("change", e => {
        if(e.target.value != '') {
            inputFields[i].querySelector('span.placeholder').classList.add('moved');
        } else {
            inputFields[i].querySelector('span.placeholder').classList.remove('moved');
        }
    })
}

const menuOptions = document.querySelectorAll("nav .menu-items li.primary-link");
for(let i = 0; i < menuOptions.length; i++) {
    if(menuOptions[i].querySelector(".sub-links")) {
        const submenuOptions = menuOptions[i].querySelectorAll("li");
        for(let j = 0; j < submenuOptions.length; j++) {
            let imgSrc = submenuOptions[j].getAttribute("data-image");
            submenuOptions[j].addEventListener("mouseover", () => {
                if(imgSrc != undefined && imgSrc != null && imgSrc != '') {
                    menuOptions[i].querySelector(".image-container--img").src = imgSrc;
                }
            })
        }
    }
}

window.addEventListener("scroll", () => {
    if(window.scrollY > 500) {
        document.querySelector("header nav").classList.add("sticky");
    }
    else {
        document.querySelector("header nav").classList.remove("sticky");
    }
})