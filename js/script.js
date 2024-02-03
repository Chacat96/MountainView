/************************* GALERIE IMAGE******************/

function openImage(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');

    lightbox.style.display = 'flex';
    lightboxImage.src = imageSrc;
}

function closeImage() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

/**********************************************CAROUSEL AVIS****************************/

let currentIndex = 0;

function avis(index) {
    const carousel = document.querySelector('.carousel');
    const avisTaille = document.querySelector('.guys').offsetWidth;

    currentIndex = index;
    const translateValue = -index * avisTaille;
    carousel.style.transform = `translateX(${translateValue}px)`;
    
    if (index === 0) {
        const cloneFirstAvis = carousel.firstElementChild.cloneNode(true);
        carousel.appendChild(cloneFirstAvis);
    } else if (index === document.querySelectorAll('.guys').length - 1) {
        const cloneLastAvis = carousel.lastElementChild.cloneNode(true);
        carousel.insertBefore(cloneLastAvis, carousel.firstElementChild);
    }
}

function avisSuivant() {
    const carousel = document.querySelector('.carousel');
    const avisTaille = document.querySelector('.guys').offsetWidth;

    currentIndex = (currentIndex + 1) % document.querySelectorAll('.guys').length;
    const translateValue = -currentIndex * avisTaille;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(${translateValue}px)`;

    if (currentIndex === 0) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(0)`;
        }, 500);
    }
}

function avisPrecedent() {
    const carousel = document.querySelector('.carousel');
    const avisTaille = document.querySelector('.guys').offsetWidth;

    currentIndex = (currentIndex - 1 + document.querySelectorAll('.guys').length) % document.querySelectorAll('.guys').length;
    const translateValue = -currentIndex * avisTaille;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(${translateValue}px)`;

    if (currentIndex === document.querySelectorAll('.guys').length - 1) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${-(document.querySelectorAll('.guys').length - 1) * avisTaille}px)`;
        }, 500);
    }
}


/****************************** FORMULAIRE VALIDATION ********************************/

function submitForm() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const commentaires = document.getElementById('commentaires').value;
    const confirmationMessage = document.getElementById('confirmationMessage');

    if (nom.trim() === '' || prenom.trim() === '' || email.trim() === '' || commentaires.trim() === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Validation de l'adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Veuillez entrer une adresse e-mail valide.');
        return;
    }

    confirmationMessage.innerHTML = 'Formulaire soumis avec succès!';
    confirmationMessage.style.color = 'green';

    document.getElementById('contactForm').reset();
}

/*************************MODE NUIT **************************************/

var lune = document.getElementById("lune");

    lune.onclick = function(){
        console.log(lune);
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")) {
            lune.src = "img/icons8-soleil-30.png";
        } else {
            lune.src = "img/icons8-lune-50.png"
        }
    }



