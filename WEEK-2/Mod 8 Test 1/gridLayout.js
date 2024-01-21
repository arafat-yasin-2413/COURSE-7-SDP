console.log('grid layout js running');




const loadData =() =>{
    const url = `https://openapi.programming-hero.com/api/videos/category/1000`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data));
}


const displayData = (data) =>{
    const dataArray = data.data; 

    const allContents = document.getElementById('all-contents');

    // console.log(dataArray);
    dataArray.forEach(element => {
        const thumb = (element.thumbnail);

        console.log(element);

        const img = document.createElement('img');

        img.src = thumb;
        img.classList.add('img-fluid');


        const textDiv = document.createElement('div');
        textDiv.innerHTML = `<h4>${element.title}</h4>
        ${element.authors[0].profile_name}
        <p style="font-size: 16px">${element.others.views}</p>`;

        const imageCard = document.createElement('div');
        imageCard.classList.add('col-md-3');

        imageCard.appendChild(img); 
        imageCard.appendChild(textDiv);


        allContents.appendChild(imageCard);
    });
}

loadData(); 