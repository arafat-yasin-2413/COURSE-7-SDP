// alert('Hello')

// console.log('Hello Bangladesh');


// console.log(document.getElementsByTagName('h1'));

// var h1_tags = document.getElementsByTagName('h1');
// console.log(h1_tags);

// var title_tag = document.getElementById('title').style.color='blue';
// console.log(title_tag);
// document.getElementById('title').style.removeProperty('color')


// var childs = document.getElementsByClassName('child');
// console.log(childs);


// *********************************************************************************


// image_item = document.getElementById('image');
// console.log(image_item.getAttribute('src'));


// image_item.setAttribute("alt", "This is a picture");


// image_item.classList.add('testClass');
// console.log(image_item);

// var title2 = document.getElementById('title2');
// console.log(title2.innerText);

// var input = document.getElementById("input");
// console.log(typeof input.value);


// var parent = document.getElementById('parent').innerHTML;
// console.log(parent);

// *********************************************************************************




// var testDiv = document.getElementsByClassName('test');
// console.log(testDiv[0].childNodes[3].innerText);




var newDiv = document.getElementById('new-div');
// console.log(newDiv);

function createEl() {
    var newP = document.createElement("p");
    newP.innerText = "Notun Paragraph";
    newDiv.appendChild(newP);
}

// createEl();
// createEl();


// *********************************************************************************


document.getElementById('submit-btn').addEventListener('click',function(e){
    console.log("Clicked Successfully");
    var inputValue= document.getElementById('input').value;
    console.log(inputValue);
})