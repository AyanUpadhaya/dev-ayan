//loader
window.addEventListener('load', () => {
    document.querySelector('.loader').classList.add("loader__hidden");
})



// const navLinks = document.qyerySelectorAll('.nav-link');
const navLinks = document.querySelectorAll('.nav-link')

for (const element of navLinks) {
    element.addEventListener('click', () => {
        navLinks.forEach(navLink => {
            navLink.classList.remove('cs-active');
        });
        element.classList.add('cs-active');
    })
}

//projects
const allProjects = []
const fetchProjects = async () => {
    const res = await fetch('./data/projects.json')
    return await res.json()

}
fetchProjects().then(myProjects => {
    myProjects.forEach(project => allProjects.push(project))
});
// console.log(allProjects)

function showModal(project_id) {
    const project = allProjects.find(pr => pr.id == project_id);
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = '';
    modalContent.innerHTML += `
    <div class="modal-header">
        <h5 class="modal-title" id="projectModalLabel">${project.project_title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <h5>Screen Shots</h5>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="${project.images[0].imageOne}" class="d-block img-fluid modal-img-height" alt="...">
            </div>
            <div class="carousel-item">
            <img src="${project.images[1].imageTwo}" class="d-block img-fluid modal-img-height" alt="...">
            </div>
            <div class="carousel-item">
            <img src="${project.images[2].imageThree}" class="d-block img-fluid modal-img-height" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>


        <h5>Description</h5>
        <ul>
            ${project.project_description.map(pd => `<li>${pd}</li>`).join('')}
        </ul>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <a href='${project.sourceCode}' class="btn btn-primary" target="_blank"><i class="bi bi-github"></i> View Source</a>
    </div>
    `
}

// *** JS Typewriter Effect ***
const sentences =[
    'Ayan',
    'Ambitious',
    'Programmer',
    'Web Developer'
]

const textElement = document.getElementById('typewriter-text');
let sentenceIndex = 0;
let letterIndex = 0;

function typewriter(){
    if(sentenceIndex == sentences.length){
        sentenceIndex=0;
    }
    if(letterIndex<sentences[sentenceIndex].length){
        textElement.textContent +=sentences[sentenceIndex][letterIndex]
        letterIndex++
    }else{
        sentenceIndex++;
        letterIndex =0;
        textElement.textContent = '';
        
    }
    setTimeout(typewriter,250)
}
typewriter()

// background effect

