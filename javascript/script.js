








// About Button Animation -----------------------------------------------------------

let aboutButtonOriginalText = document.getElementById('aboutLink').innerHTML
let aboutLinkText = document.getElementById('aboutLink');
let aboutEventTarget = document.getElementById('aboutEvent');

let aboutButtonStatus = 0;
let isAboutButtonRunning = 0;



function aboutButtonStart() {
    if(aboutButtonStatus === 0 && isAboutButtonRunning === 0) {
        aboutButtonArm();
    };
    aboutButtonStatus = 1;
};

function aboutButtonArm() {
    isAboutButtonRunning = 1;
    setTimeout(aboutButtonStep1, 1000);
};

function aboutButtonDisarm() {
    aboutButtonStatus = 0;
};

function aboutButtonStep1() {
    let text = aboutLinkText.innerHTML;
    let result = text + '  >';
    aboutLinkText.innerHTML = result;
    setTimeout(aboutButtonStep2, 1000);
};

function aboutButtonStep2() {
    let text = aboutLinkText.innerHTML;
    let result = text + '>';
    aboutLinkText.innerHTML = result;
    setTimeout(aboutButtonStep3, 1000);
};

function aboutButtonStep3() {
    let text = aboutLinkText.innerHTML;
    let result = text + '>';
    aboutLinkText.innerHTML = result;
    setTimeout(aboutButtonRepeatCheck, 1000);
};

function aboutButtonRepeatCheck() {
    aboutLinkText.innerHTML= aboutButtonOriginalText;
    isAboutButtonRunning = 0;
    if(aboutButtonStatus === 1) {
        aboutButtonArm();
    };
};



aboutEventTarget.addEventListener('mouseover', aboutButtonStart);
aboutEventTarget.addEventListener('mouseout', aboutButtonDisarm);





// Projects Button Animation -----------------------------------------------------------

let projectsButtonOriginalText = document.getElementById('projectsLink').innerHTML
let projectsLinkText = document.getElementById('projectsLink');
let projectsEventTarget = document.getElementById('projectsEvent');

let projectsButtonStatus = 0;
let isProjectsButtonRunning = 0;



function projectsButtonStart() {
    if(projectsButtonStatus === 0 && isProjectsButtonRunning === 0) {
        projectsButtonArm();
    };
    projectsButtonStatus = 1;
};

function projectsButtonArm() {
    isProjectsButtonRunning = 1;
    setTimeout(projectsButtonStep1, 1000);
};

function projectsButtonDisarm() {
    projectsButtonStatus = 0;
};

function projectsButtonStep1() {
    let text = projectsLinkText.innerHTML;
    let result = text + '  >';
    projectsLinkText.innerHTML = result;
    setTimeout(projectsButtonStep2, 1000);
};

function projectsButtonStep2() {
    let text = projectsLinkText.innerHTML;
    let result = text + '>';
    projectsLinkText.innerHTML = result;
    setTimeout(projectsButtonStep3, 1000);
};

function projectsButtonStep3() {
    let text = projectsLinkText.innerHTML;
    let result = text + '>';
    projectsLinkText.innerHTML = result;
    setTimeout(projectsButtonRepeatCheck, 1000);
};

function projectsButtonRepeatCheck() {
    projectsLinkText.innerHTML= projectsButtonOriginalText;
    isProjectsButtonRunning = 0;
    if(projectsButtonStatus === 1) {
        projectsButtonArm();
    };
};



projectsEventTarget.addEventListener('mouseover', projectsButtonStart);
projectsEventTarget.addEventListener('mouseout', projectsButtonDisarm);





// Contact Button Animation -----------------------------------------------------------

let contactButtonOriginalText = document.getElementById('contactLink').innerHTML
let contactLinkText = document.getElementById('contactLink');
let contactEventTarget = document.getElementById('contactEvent');

let contactButtonStatus = 0;
let isContactButtonRunning = 0;



function contactButtonStart() {
    if(contactButtonStatus === 0 && isContactButtonRunning === 0) {
        contactButtonArm();
    };
    contactButtonStatus = 1;
};

function contactButtonArm() {
    isContactButtonRunning = 1;
    setTimeout(contactButtonStep1, 1000);
};

function contactButtonDisarm() {
    contactButtonStatus = 0;
};

function contactButtonStep1() {
    let text = contactLinkText.innerHTML;
    let result = text + '  >';
    contactLinkText.innerHTML = result;
    setTimeout(contactButtonStep2, 1000);
};

function contactButtonStep2() {
    let text = contactLinkText.innerHTML;
    let result = text + '>';
    contactLinkText.innerHTML = result;
    setTimeout(contactButtonStep3, 1000);
};

function contactButtonStep3() {
    let text = contactLinkText.innerHTML;
    let result = text + '>';
    contactLinkText.innerHTML = result;
    setTimeout(contactButtonRepeatCheck, 1000);
};

function contactButtonRepeatCheck() {
    contactLinkText.innerHTML= contactButtonOriginalText;
    isContactButtonRunning = 0;
    if(contactButtonStatus === 1) {
        contactButtonArm();
    };
};



contactEventTarget.addEventListener('mouseover', contactButtonStart);
contactEventTarget.addEventListener('mouseout', contactButtonDisarm);






// Hamburger Drop-Down menu ---------------------------------------------------

let burgerMenuLocation = document.getElementById('burgerMenuIcon');
let burgerDivLocation = document.getElementById('burgerDropDownMenu')

let burgerOnOrOff = 0;

function burgerMenuToggle () {
    if(burgerOnOrOff === 0) {
        burgerOnOrOff = 1;
        burgerMenuLocation.style.color = 'rgba(255, 255, 255, 0.3)';  
        burgerDivLocation.style.display = 'block';
    } else if(burgerOnOrOff === 1) {
        burgerOnOrOff = 0;
        burgerMenuLocation.style.color = 'white';  
        burgerDivLocation.style.display = 'none';
    };
    

};












burgerMenuLocation.addEventListener('click', burgerMenuToggle);







