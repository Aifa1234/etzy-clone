const banner=[{
    image:"../image/one.jpg",
    title:"Personalised Kids' Tees"
},
{
    image:"../image/two.jpg",
    title:"Personalised Kids' Sweatshirts" 
},
{
    image:"../image/three.jpg",
    title:"Personalised Backpacks"
},
{
    image:"../image/four.jpg",
    title:"Learning & Toys "
},{
    image:"../image/five.jpg",
    title:"First Day of School Signs"
},{
    image:"../image/six.jpg",
    title:"Personalised Stickers & Labels"
},{
    image:"../image/seven.jpg",
    title:"School Supplies"
},{
    image:"../image/eight.jpg",
    title:"Teacher Appreciation Gifts"
},{
    image:"../image/nine.jpg",
    title:"Printables"
},{
    image:"../image/ten.jpg",
    title:"Backpack Accessories"
},{
    image:"../image/eleven.jpg",
    title:"Back to School Essentials On Sale"
},{
    image:"../image/twelvw.jpg",
    title:"Finds with Free Delivery"
}]

let html=""
banner.forEach((element)=>{
    html+=`
            
                        <div class="product-item">
                            <a href="#" class="product-item-link">
                                <img src="${element.image}" alt="">
                                   <p>${element.title}</p>
                            </a>

                        </div>
                    
                
            
        
        `
})
const banner1=document.querySelector(".product-banner-inner")
banner1.innerHTML=html