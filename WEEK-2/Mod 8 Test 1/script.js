console.log('script is running');


const loadData = (id) => {
    const btnId = id;
    const url = `https://openapi.programming-hero.com/api/videos/category/${btnId}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}



const displayData = (data) => {
    // console.log(data.data);
    // console.log(data.data.length);

    const parentContainer = document.getElementById('parent-container');

    parentContainer.innerHTML = '';
    data.data.forEach(element => {
        // console.log(element);
        const image = (element.thumbnail);
        // console.log(image);
        const authImg = element.authors[0].profile_picture;

        const newDiv = document.createElement('div');
        newDiv.classList.add('col');



        newDiv.innerHTML = `<div class="card h-100">
                <img src="${element.thumbnail}" class="card-img-top" alt="...">
                
                <div class="card-body">
                    
                    <div class="d-flex align-items-center gap-3">
                    <img class="rounded-circle author-img" src="${authImg}" alt="">
                
                    <h5 class="card-title">${element.title}</h5>

                </div>
                
                <div class="mx-5 my-2">
                    <h5>${element.authors[0].profile_name}</h5>
                    <h5>${element.others.views} views</h5>
                </div>

                </div>


                    
                </div>
            </div>`

        parentContainer.appendChild(newDiv);

    });

}

loadData(1000);



const allButtonFunction = () => {
    console.log('clicked All Button');

    const btnAll = document.getElementById('btn-all');
    btnAll.style.backgroundColor = "#F40046";

    const btnAllId = "1000";
    loadData(btnAllId);
}


const musicButtonFunction = () => {
    console.log('clicked Music Button');

    const btnMusic = document.getElementById('btn-music');
    btnMusic.style.backgroundColor = "#F40046";

    const btnMusicId = "1001";
    loadData(btnMusicId);
}



const comedyButtonFunction = () => {
    console.log('clicked Comedy Button');

    const btnComedy = document.getElementById('btn-comedy');
    btnComedy.style.backgroundColor = "#F40046";

    const btnComedyId = "1003";
    loadData(btnComedyId);
}



const drawingButtonFunction = () => {
    console.log('clicked Drawing Button');

    const btnDrawing = document.getElementById('btn-drawing');
    btnDrawing.style.backgroundColor = "#F40046";

    const btnDrawingId = "1005";
    loadData(btnDrawingId);
}


















/*
const showCategories =()=>{
    const url2 = `https://openapi.programming-hero.com/api/videos/categories`
    fetch(url2)
    .then(res => res.json())
    .then(data => displayCategories(data));
}

const displayCategories = (data) => {
    
    const x =data.data[1].category_id;
    console.log(typeof x);
    
}

// showCategories();
*/