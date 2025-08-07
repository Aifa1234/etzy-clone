(function(){
let startIndex=24;
const firstLoad=12;
let nextLoad=12
let data=[];
let filterData=[]

const seeMore=document.querySelector("#js-button-three")
const container3=document.querySelector(".card13-inner");

fetch(`../data/data.json`)
.then((resolve)=>resolve.json())
.then((element)=>{
    data=element
    filterData=data
    renderList(firstLoad)
    
});
function renderList(count){

    let endIndex=startIndex+count
    const itemShow=filterData.slice(startIndex,endIndex)
    let html6="";

    itemShow.forEach((item,index) => {
        const hidePrice=item.realPrice==item.price?`style="display:none"`:"";
        
        html6+=`
        <li class="card1-item">
                                    <div class="card1-item-container">
                                        <a href="#" class="card1-item-link">
                                            <div class="image1-container">
                                                <div class="image1-outer">
                                                    <div class="image1-inner">
                                                        <div class="image1">
                                                          <img src="${item.image}" alt=""> 
                                                        </div>
                                                    </div>
                                                    <span class="etsy-pick-container">
                                                        <span class="etsy-pick-word">
                                                             Etsy’s Pick
                                                        </span>
                                                     </span>
                                                </div>
                                            </div>
                                            <div class="card1-content">
                                                <h3>${item.name}</h3>
                                                <div class="rate1-container">
                                                    <div class="rate1-wrapper">
                                                        <span class="star1-container">
                                                            <span class="star1-count">${item.rating.star}</span>
                                                            <div class="star1-detail">
                                                                <span class="star1-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
                                                                         <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
                                                                    </svg>
                                                                </span>
                                                                <p class="star1-text">(${item.rating.count})</p>
                                                            </div>
                                                        </span>
                                                        <span class="dot1">·</span>
                                                         <div class="letter-container">
                                                            <div class="letter-wrapper">
                                                                <span class="letter-icon" ${(index===1||index===6||index===7||index===8||index===11)?`style="display:none"`:""}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m20.902 7.09-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.342-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09zm-6.097 6.062.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484z"></path></svg>
                                                                </span>
                                                                <p class="letter-word">
                                                                    <span class="letter-word-inner">${item.letter}</span>
                                                                </p>
                                                            </div>
                                                         </div>
                                                    </div>
                                                </div>
                                                <div class="price1-container">
                                                    <p class="price-one">
                                                        <span class="price-one-inner">
                                                            <span class="currency-symbol">₹</span>
                                                            <span class="currency-value">${item.price}</span>
                                                        </span>
                                                    </p>
                                                    <p class="price-two" ${hidePrice}>
                                                        <span class="price-two-left">
                                                            <span class="currency-symbol">₹</span>
                                                            <span class="currency-value">${item.realPrice}</span>
                                                        </span>
                                                        <span class="offer-per-cent">
                                                            <span class="offer-per-cent-inner">(${item.offer}% off)</span>
                                                        </span>
                                                    </p>
                                                </div>
                                                <div class="blank"></div>
                                            </div>
                                        </a>
                                        <a href="#" class="more-like-this-link">
                                            More like this
                                        </a>
                                    </div>

                                </li>
        `
        
    });
  container3.innerHTML+=html6
  startIndex+=count
}
seeMore.addEventListener("click",()=>{
    renderList(nextLoad)
});
 







const radioButton=document.querySelectorAll(`input[name="price-filter"]`)
radioButton.forEach((radio)=>{
    radio.addEventListener("change",priceFilter)
})
document.getElementById("lowPrice").addEventListener("input",()=>{
    document.querySelector(`input[value="custom"]`).checked=true
    priceFilter();
})
document.getElementById("highPrice").addEventListener("input",()=>{
    document.querySelector(`input[value="custom"]`).checked=true
    priceFilter();
})

// const container=document.querySelector(".card12-inner")
// const container1=document.querySelector(".")


function priceFilter(){
   const selectedRadio=document.querySelector(`input[name="price-filter"]:checked`)
   const selected= selectedRadio ? selectedRadio.value:"";
   const low=parseInt(document.getElementById("lowPrice").value) ||0
   const high=parseInt(document.getElementById("highPrice").value)||Infinity
    
    let min=0,max=Infinity;

    switch(selected){
        case "under-500":
            min=0;
            max=499
            break;
        case "500-1000":
            min=500
            max=1000
            break
        case "1000-1500":
            min=1000
            max=1500
            break
        case "over-1500":
            min=1501
            break
        case "custom":
            min=low
            max=high
            break
    }
    filterData=data.filter((item)=>{
         const price=parseInt(item.price.replace(/,/g,""))
        return price>=min && price<=max
    })
  container3.innerHTML=""
  startIndex=0
  renderList(firstLoad)
};



const typeItem=document.querySelectorAll(`input[name="type-item"]`)
typeItem.forEach((type)=>{
    type.addEventListener("change",(event)=>{
        const selectType=event.target.value
        typeFilter(selectType)
    })
})

function typeFilter(selectType){
    startIndex=0
    nextLoad=12

    if(selectType==="all-type"){
        filterData=data
    }
    else{
        filterData=data.filter(item=>item.type===selectType)
    }
    container3.innerHTML=''
    renderList(firstLoad)
}
})()