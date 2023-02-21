/*Variables*/
// Get All Images
let allImagesArray = Array.from(
  document.querySelectorAll(".slider-content img")
);
//Get Number of Slides
let slidesNumber = allImagesArray.length;

//Element Number of Slides
let slidesNumberElement = document.getElementById("slides-number");

//Elements Previous and Next Text
let prevText = document.getElementById("go-back-prev-text");
let nextText = document.getElementById("go-back-next-text");

//Elements Previous and Next Icon
let prevIcon = document.getElementById("left");
let nextIcon = document.getElementById("right");

//Element Pagination Div
let paginationDiv = document.getElementById("pagination-div");
//Creat ul
let paginationUl = document.createElement("ul");
//Add Id to ul
paginationUl.setAttribute("id", "pagination-ul");

for (let i = 1; i <= slidesNumber; i++) {
  //Create li
  let paginationLi = document.createElement("li");
  //Add Custom Attribute
  paginationLi.setAttribute("data", i);
  //Crate Node Text
  let liText = document.createTextNode(i);
  //Append Node Text to li
  paginationLi.appendChild(liText);
  //Append li to ul
  paginationUl.appendChild(paginationLi);
  //Append ul to Element Pagination Div
  paginationDiv.appendChild(paginationUl);
}

//Current Slide Number
let currentSlideNumber = 1;

function theUpdate() {
  //Set Slide Number / All Slides
  slidesNumberElement.textContent = `Slide ${currentSlideNumber} of ${slidesNumber}`;

  removeActiveImages();
  //Set class active to The Current Image
  allImagesArray[currentSlideNumber - 1].classList.add("active");

  //Remove All class active from All li
  removeActiveLi();
  //Set class active to The Current li
  paginationUl.children[currentSlideNumber - 1].classList.add("active");

  prevDis();
  nextDis();
}
theUpdate();

//Remove All class active from All Images
function removeActiveImages() {
  for (let i = 0; i < allImagesArray.length; i++) {
    allImagesArray[i].classList.remove("active");
  }
}

//Remove All class active from All li
function removeActiveLi() {
  for (let i = 0; i < paginationUl.children.length; i++) {
    paginationUl.children[i].classList.remove("active");
  }
}

//Set class disabled to Previous
function prevDis() {
  if (currentSlideNumber == 1) {
    prevText.classList.add("disabled");
    prevIcon.classList.add("disabled");
  } else {
    prevText.classList.remove("disabled");
    prevIcon.classList.remove("disabled");
    return false;
  }
}

//Set class disabled to Next
function nextDis() {
  if (currentSlideNumber == slidesNumber) {
    nextText.classList.add("disabled");
    nextIcon.classList.add("disabled");
  } else {
    nextText.classList.remove("disabled");
    nextIcon.classList.remove("disabled");
    return false;
  }
}
//Previous and Next (Text and Icon)
function previousSlide() {
  if (currentSlideNumber > 1) {
    currentSlideNumber--;
    theUpdate();
  }
}
function nextSlide() {
  if (currentSlideNumber < slidesNumber) {
    currentSlideNumber++;
    theUpdate();
  }
}

//OnClick - Previous and Next (Items li)
// Get All li from ul
let itemsLiArray = Array.from(
  document.querySelectorAll(".pagination-div #pagination-ul li")
);
console.log(itemsLiArray);
function itemTo() {
  for (let i = 0; i < itemsLiArray.length; i++) {
    itemsLiArray[i].onclick = () => {
      let dataIndex = parseInt(itemsLiArray[i].getAttribute("data"));
      currentSlideNumber = dataIndex;
      theUpdate();
    };
  }
}
itemTo();

//OnClick Previous or Next (Text and Icon)
prevText.onclick = previousSlide;
nextText.onclick = nextSlide;
prevIcon.onclick = previousSlide;
nextIcon.onclick = nextSlide;
