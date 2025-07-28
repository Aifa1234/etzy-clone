html3=""
fetch('../data/personal.json')
.then((response)=>response.json())
.then((element)=>{
   const card=document.querySelector(".personalized-card-wrapper");
   element.forEach((item)=>{
    html3+=`<li>
                               <a href="#" class="personalized-card-link">
                                  <div class="card-image-outer">
                                    <div class="image-wrapper">
                                        <img src="${item.image}" alt="">
                                    </div>
                                  </div>
                                  <span class="pick-wrapper">
                                    <span class="pick-inner-word">Etsy’s Pick</span>
                                  </span>
                                   <div class="card-content">
                                     <h3>${item.name}</h3>
                                     <div class="rating-container">
                                        <span class="rate-count-container">
                                            <span class="star-count">${item.rating.star}</span>
                                            <div class="card-star-container">
                                                <span class="star-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24" aria-hidden="true" focusable="false">
                                                             <path d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z"></path>
                                                    </svg>
                                                </span><p class="star-count-number">(${item.rating.count})</p>
                                            </div>
                                        </span>
                                        <span class="dot">
                                            .
                                        </span>
                                        <div class="notification-wrapper">
                                            <span class="notification-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m20.902 7.09-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.342-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09zm-6.097 6.062.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484z"></path></svg>
                                            </span>
                                            <p class="notification-word">
                                                <span class="word-word">${item.letter}</span>
                                            </p>
                                        </div>
                                     </div>
                                     <div class="price-container">
                                        <p class="sale-price">
                                            <span class="currency-symbol">₹</span>
                                            <span class="currency-value">${item.price}</span>
                                        </p>
                                        <p class="cut-price-container">
                                            <span class="off-price">
                                                <span class="currency-symbol">₹</span>
                                                <span class="currency-value">${item.realPrice}</span>
                                            </span>
                                            <span class="percent-off">
                                                    (${item.offer}% off)
                                             </span>
                                        </p>
                                     </div>
                                     <div class="three-pixel"></div>
                                   </div>
                                    <a href="#" class="more-link">
                                   More like this
                               </a>
                               </a> 
                              
                            </li>`
        
   })
   card.innerHTML=html3
})
