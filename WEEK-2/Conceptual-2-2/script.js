// const allData = JSON.parse(jsonData).data;


const allData = JSON.parse(jsonData).data;

function loadMilestones () {
    const milestones = document.querySelector('.milestones');
    
    milestones.innerHTML = allData.map(function(milestone){
        return `<div class="milestone border-b">
        <div class="flex">
            
            <div class="checkbox"><input type="checkbox" /></div>
            <div onclick="openMilestone(this,${milestone._id})">
                <p>
                    ${milestone.name}
                    <span><i class="fas fa-chevron-down"></i></span>
                </p>
            </div>
        
        </div>
        
        
        <div class="hidden_panel">
            ${milestone.modules.map(function(module){
                return `<div class="module border-b">
                <p>${module.name}</p>
            </div>`
            }).join('')}
            
        </div>
    </div>`
    }).join('');
     
}


function openMilestone(milestoneContainer,id){
    // console.log('Milestone Container clicked');
    const currentSection = milestoneContainer.parentNode.nextElementSibling;
    
    const showSection = document.querySelector('.show');

    if(!currentSection.classList.contains('show') && showSection){
        showSection.classList.remove('show');
    }

    currentSection.classList.toggle('show');


    modifyMilestones(id);
    

}


function modifyMilestones(id){
    const mImg = document.querySelector('.milestoneImage');
    const mTitle = document.querySelector('.title');
    const mDetails = document.querySelector('.details');

    mImg.src = allData[id].image;
    mTitle.innerText = allData[id].name;
    mDetails.innerText = allData[id].description;
}

loadMilestones();

 
