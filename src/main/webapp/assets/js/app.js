const roles = ['Software Engineer','Travel Enthusiast']
let count = 0;
let index = 0;
let currentRole = '';
let currentLetter = '';

(function type(){
    if(count === roles.length){
        count = 0;
    }
    currentRole = roles[count];
    currentLetter = currentRole.slice(0,++index);
    document.querySelector('.role-header').textContent = currentLetter;
    if(currentLetter.length === currentRole.length){
        count++;
        index = 0;
    }
    setTimeout(type,100);
}());

const abooutMeAppear = ()=> {
    let resumeButtons = document.querySelectorAll('.skillsArea');
    resumeButtons.forEach(resumeButton=>{
        let resumeButtonPosition = resumeButton.getBoundingClientRect().top;
        let pagePosition = window.innerHeight/2;
        if(resumeButtonPosition <= pagePosition){
            resumeButton.classList.add('skillsArea-appear');
        }
    });
    
};

window.addEventListener('scroll',abooutMeAppear);