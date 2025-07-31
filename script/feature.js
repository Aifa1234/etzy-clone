const feature=[{
    image1:"../image/feature/one-one.jpg",
    image2:"../image/feature/one-two.jpg",
    image3:"../image/feature/one-three.jpg",
    image4:"../image/feature/one-four.jpg",
    icon:"../image/icon/alpha.jpg",
    name:"CoriBlackWolfCo",
    count:"1,470"
},{
     image1:"../image/feature/two-one.jpg",
    image2:"../image/feature/two-two.jpg",
    image3:"../image/feature/two-three.jpg",
    image4:"../image/feature/two-four.jpg",
    icon:"../image/icon/beta.jpg",
    name:"Flossandfable",
    count:"7,182"
},
{
     image1:"../image/feature/three-one.jpg",
    image2:"../image/feature/three-two.jpg",
    image3:"../image/feature/three-three.jpg",
    image4:"../image/feature/three-four.jpg",
    icon:"../image/icon/gamma.jpg",
    name:"ThatMomWithALaser",
    count:"908"
},
{
     image1:"../image/feature/four-one.jpg",
    image2:"../image/feature/four-two.jpg",
    image3:"../image/feature/four-three.jpg",
    image4:"../image/feature/four-four.jpg",
    icon:"../image/icon/delta.jpg",
    name:"BeenThereTaughtThat",
    count:"6,835"
}
]
let html1="";
feature.forEach((element)=>{
    html1+=`
    <div class="feature-shop-one">
                                <div class="feature-shop-one-wrapper">
                                <div class="feature-shop-wrapper-wrapper">

                                    <div class="feature-shop-upper">
                                        <a href="#" class="fearure-shop-one-link">
                                            <div class="feature-shop-one-inner">
                                                <div class="place-holder-content">
                                                    <div class="place-holder">
                                                        <div class="place-holder-inner ">
                                                            <img src="${element.image1}" alt="no-image">
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </a>
                                        <a href="#" class="fearure-shop-one-link">
                                            <div class="feature-shop-one-inner">
                                                <div class="place-holder-content">
                                                    <div class="place-holder">
                                                        <div class="place-holder-inner one-change">
                                                            <img src="${element.image2}" alt="no-image">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="feature-shop-lower">
                                        <a href="#" class="fearure-shop-one-link">
                                            <div class="feature-shop-one-inner">
                                                <div class="place-holder-content">
                                                    <div class="place-holder">
                                                        <div class="place-holder-inner">
                                                            <img src="${element.image3}" alt="no-image">
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </a>
                                        <a href="#" class="fearure-shop-one-link">
                                            <div class="feature-shop-one-inner">
                                                <div class="place-holder-content">
                                                    <div class="place-holder">
                                                        <div class="place-holder-inner one-change">
                                                            <img src="${element.image4}" alt="no-image">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="feature-shop-content">
                                        <a href="#" class="content-link">
                                            <div class="content-link-image">
                                                <img src="${element.icon}" alt="">
                                                <div class="name-container">
                                                    <p class="name-shop">${element.name}</p>
                                                    <div class="star-container">
                                                        <div class="star-inner">
                                                            <span><span class="star-content">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg>
                                                                </span>
                                                                <span class="star-content">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg>
                                                                </span>
                                                                <span class="star-content">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg>
                                                                </span>
                                                                <span class="star-content">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg>
                                                                </span>
                                                                <span class="star-content">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path></svg>
                                                                </span>
                                                

                                                            </span>
                                                        </div>
                                                    </div><span class="count-container">
                                                        (${element.count})
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="favorite-button">
                                            <a href="#" class="favorite-button-link">
                                                <span class="favorite-button-inner">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path></svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                 </div>
                                </div>
                            </div>`
})
const feature1=document.querySelector(".feature-shop-banner-inner-inner")
feature1.innerHTML=html1