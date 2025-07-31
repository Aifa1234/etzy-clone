const filterButton=document.querySelectorAll("#js-filter")
const popUpButton=document.querySelector(".pop-up-wrapper")
filterButton.forEach(element => {
  element.addEventListener("click",()=>
    popUpButton.style.display="block"
)

const closeButton=document.querySelector("#js-close-button")
closeButton.addEventListener("click",()=>{
    popUpButton.style.display="none"
})  
});
