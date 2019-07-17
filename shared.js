var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var closeModalButton = document.querySelector('.modal__action--negative');
var toogleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');

//console.dir(backdrop.style['background-image']); / A different way to access to CSS properties

for (var i = 0; i < selectPlanButtons.length; i++) {
    
    selectPlanButtons[i].addEventListener('click', () => {
        /* modal.style.display = 'block';
        backdrop.style.display = 'block'; */
        //modal.className = 'open'; / This will actualy overwrite the complete class
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(() => {
            backdrop.classList.add('open');
        }, 10);
    });
    
}

if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    this.closeModal();
});

function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(() => {
        backdrop.style.display = 'none';
    }, 200);
}

toogleButton.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(() => {
        backdrop.classList.add('open');
    }, 10);
});

ctaButton.addEventListener('animationstart', () => {
    console.log('animation started', event);
});

ctaButton.addEventListener('animationend', () => {
    console.log('animation ended', event);
});

ctaButton.addEventListener('animationiteration', () => {
    console.log('animation iteration', event);
});