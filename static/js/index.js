const clickToSlideCoverField = document.getElementById('click-to-scroll-cover');
const coverPage = document.getElementById('cover-page');
const servicesPage = document.getElementById('services-page');
const contactPage = document.getElementById('contacts-page');
const footerContainer = document.getElementById('footer');





clickToSlideCoverField.addEventListener('click', () => {
    servicesPage.classList.toggle('hidden-item');
    contactPage.classList.toggle('hidden-item');
    footerContainer.classList.toggle('hidden-item');
    coverPage.classList.toggle('hidden-item');
}, false);




const underline =(target)=>{
    
    const windowWidth = window.innerWidth;
    let width = 20 * windowWidth

    for (let i=0; i<=21/3; i++){
        let line;
        for (let c=1; c <= 3; c++){
            line = document.createElement('div');
            line.classList.add("header-underline-item");
            line.classList.add("header-underline-item-color" + c);
            line.style.width = width;
            target.appendChild(line);
            
        }
    }
};

const underlineHeaderField = document.getElementById('underline-header');
const underlineFooterField1 = document.getElementById('underline-footer1')
const underlineFooterField2 = document.getElementById('underline-footer2')

underline(underlineHeaderField);
underline(underlineFooterField1);
underline(underlineFooterField2);


window.onscroll =()=>{
    scrollUp();
};

const scrollUp =()=>{
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        servicesPage.classList.remove('hidden-item');
        contactPage.classList.remove('hidden-item');
        footerContainer.classList.remove('hidden-item');
        coverPage.classList.add('hidden-item');
    }
}



