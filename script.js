'use strict';

const burgerIcon = document.querySelector('.sidebar__burger');
const burgerMenu = document.querySelector('.sidebar__open');
const burgerClose = document.querySelector('.sidebar__open-close-btn');
const burgerItems = document.querySelector('.sidebar__items');
const sideBarWide = document.querySelector('.sidebar__wide')

// Events
burgerIcon.addEventListener('click', function() {
    burgerMenu.style.display = 'block';  
})

burgerClose.addEventListener('click', function() {
    burgerMenu.style.display = 'none'; 
})

burgerItems.addEventListener('click', function(e) {
    e.preventDefault();

    if(e.target.classList.contains('sidebar__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    }
})

sideBarWide.addEventListener('click', function(e) {
    e.preventDefault();

    if(e.target.classList.contains('sidebar__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'}) 
        }
})

//Tabbed component
const tabs = document.querySelectorAll('.adv-buttons--btn');
const tabsContainer = document.querySelector('.adv-buttons');
const tabsContent = document.querySelectorAll('.advantages--description');
const tabsLines = document.querySelectorAll('.advantages--description-line');

tabsContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.adv-buttons--btn');
  
    if (clicked) {
        tabs.forEach(t => t.classList.remove('adv-buttons--active'));
        tabsContent.forEach(description => description.classList.remove('advantages--description-active'));
        tabsLines.forEach(line => line.classList.remove('advantages--description-line--active'))

        clicked.classList.add('adv-buttons--active');

        document.querySelector(`.advantages--description-${clicked.dataset.tab}`).classList.add('advantages--description-active');

        document.querySelector(`.advantages--description-line-${clicked.dataset.tab}`).classList.add('advantages--description-line--active')
    
    }

})

//Mouseover and mouseout
const footer = document.querySelector('.footer')

const footerFocus = function(e, opacity) {
    if(e.target.classList.contains('options__link')) {
      const link = e.target;
      const siblings = link.closest('.options').querySelectorAll('.options__link');

      siblings.forEach(s => {
        if(s !== link) s.style.opacity = opacity;
      })
    }
}

footer.addEventListener('mouseover', function(e) {
    footerFocus(e, 0.5)
})
footer.addEventListener('mouseout', function(e) {
    footerFocus(e, 1)
})
// Mouseover burgerMenu
const sidebarItems = document.querySelector('.sidebar__open');

const burgerItemFocus = function(e, opacity) {
    if(e.target.classList.contains('sidebar__link')) {
        const link = e.target;
        const siblings = link.closest('.sidebar__open').querySelectorAll('.sidebar__link');

        siblings.forEach(s => {
            if (s !== link) s.style.opacity = opacity;
        })
    }
}

sidebarItems.addEventListener('mouseover', function(e) {
    burgerItemFocus(e, 0.5)
})
sidebarItems.addEventListener('mouseout', function(e) {
    burgerItemFocus(e, 1)
})
//Mouseover sidebar
const sidebarFocus = function(e, opacity) {
    if(e.target.classList.contains('sidebar__link')) {
        const link = e.target;
        const siblings = link.closest('.sidebar__wide').querySelectorAll('.sidebar__link');

        siblings.forEach(s => {
            if(s !== link) s.style.opacity = opacity;
        })
    }
}

sideBarWide.addEventListener('mouseover', function(e) {
    sidebarFocus(e, 0.5)
})
sideBarWide.addEventListener('mouseout', function(e) {
    sidebarFocus(e, 1)
})

//Revealing elements 
const sectionsAll = document.querySelectorAll('.section');

const revealSection = function(entries, observer) {
    const [entry] = entries;

    if(!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.10,
})

sectionsAll.forEach(section => {
 sectionObserver.observe(section)
 section.classList.add('section--hidden')   
})