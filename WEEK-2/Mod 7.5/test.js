// console.log("test js file ");


const loadData =()=>{
    const url = `https://jsonplaceholder.typicode.com/comments?postId=1`;

    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data)); 
}

loadData(); 