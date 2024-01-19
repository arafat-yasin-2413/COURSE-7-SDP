// console.log('comments js working');

const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayData(data));
}

const displayData = (data) => {
    // console.log(data[4].id);
    // console.log(data[4].name);
    // console.log(data[4].email);

    const commentsContainer = document.getElementById('comments-container');

    data.forEach(singleData => {

        const id = singleData.id;
        // console.log(id);

        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment-div');
        commentDiv.innerHTML =
            `<h3>Id: ${singleData.id}</h3>
            <h3>Name: ${singleData.name}</h3>
            <h4>Email: ${singleData.email}</h4>
            
            <button onclick="takeIdLoadData(${id})" id="btn-takeId" class="btn bg-primary text-white fs-5 text-center mx-3 my-3">Take Id and Load Comment</button>`
            
        commentsContainer.appendChild(commentDiv);
    })




}

loadData();


const takeIdLoadData = (id) =>{

    const gotId = id;
    console.log(gotId);

    const url = `https://jsonplaceholder.typicode.com/comments?postId=${gotId}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayComment(data));
}


const displayComment =(data)=>{
    console.log(data[0]);
}