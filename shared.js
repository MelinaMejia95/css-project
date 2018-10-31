var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var closeModalButton = document.querySelector('.modal__action--negative');
var toogleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

//console.dir(backdrop.style['background-image']); / A different way to access to CSS properties

for (var i = 0; i < selectPlanButtons.length; i++) {
    
    selectPlanButtons[i].addEventListener('click', () => {
        /* modal.style.display = 'block';
        backdrop.style.display = 'block'; */
        //modal.className = 'open'; / This will actualy overwrite the complete class
        modal.classList.add('open');
        backdrop.classList.add('open');
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
}

toogleButton.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});