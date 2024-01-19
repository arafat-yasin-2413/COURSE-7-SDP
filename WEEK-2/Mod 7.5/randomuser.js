// console.log('random user js working');


const url = 'https://randomuser.me/api/';

const loadData = () =>{
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data)); 
}

const displayData =(data)=>{

    const parentDiv = document.getElementById('randomUser-container');


    console.log(data.results[0].location);

    
    


    const fullName = data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last;
    // console.log(fullName);
    const gender = data.results[0].gender;
    const largePic = data.results[0].picture.large;
    const city = (data.results[0].location.city);
    const country = (data.results[0].location.country);
    const lat = (data.results[0].location.coordinates.latitude);
    const longi = (data.results[0].location.coordinates.longitude);
    const coordinates = `Lat: ${lat}, Longi: ${longi}`;
    const streetName = (data.results[0].location.street.name);
    const streetNumber = (data.results[0].location.street.number);
    
    const Street = `st. name: ${streetName}, st. num: ${streetNumber}`;


    
    const newDiv = document.createElement('div'); 
    newDiv.innerHTML = `<img src="${largePic}" alt="">
    <h4>Name : ${fullName}</h4>
    <h4>Gender : ${gender}</h4>
    <h4>City : ${city}</h4>
    <h4>Country : ${country}</h4>
    <h4>Coordinates : ${coordinates}</h4>
    <h4>Street : ${Street}</h4>`

    parentDiv.appendChild(newDiv);

}
loadData(); 