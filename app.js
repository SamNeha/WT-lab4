const product = [
    {
        id:1,
        image: 'https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1639457737/staging/products/buying-options/Skin%20Glow%20Starter%20Pack/0_BLUE/CAROUSEL/0__1.png',
        title: 'Skin Health Gummies',
        price: 499,
    },
    {
        id:2,
        image: 'https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_800,c_limit/v1598891030/staging/products/skin-clarifying/1_Product_Image_9.png',
        title: 'Skin Clarifying Serum',
        price: 466,
    },
    {
        id:3,
        image: 'https://newassets.apollo247.com/pub/media/catalog/product/a/2/a2_.jpeg',
        title: 'Salicylic Acid Face Wash',
        price: 206,
    },
    {
        id:4,
        image: 'https://ik.bebodywise.com/media/misc/pdp_rcl/biotin-multivitamin-hair-gummies-2m/13_rqKAW1NT8.jpg?tr=w-800',
        title: 'Hair Health Gummies',
        price: 450,
    },
    {
        id:5,
        image: 'https://cdn01.pharmeasy.in/dam/products_otc/T06163/bodywise-pms-gummies-60n-2-1645263809.jpg',
        title: 'PMS Gummies',
        price: 539,
    },
    {
        id:6,
        image: 'https://ik.bebodywise.com/mosaic-wellness/image/upload/v1639450864/staging/products/buying-options/Anti-aging%20starter%20pack/0_BLUE/PRODUCT%20IMAGES/SIK_No_BG.png',
        title: 'Liposome Face Serum',
        price: 520,
    },
    {
        id:7,
        image: 'https://ik.bebodywise.com/media/misc/pdp_rcl/4-aha-bha-underarm-roll-on/5__26__9qXmLzlXI.png?tr=w-800',
        title: 'AHA-BHA Roll On',
        price: 349,
    },
    {
        id:8,
        image: 'https://d211gp6vyv6dh6.cloudfront.net/images/thumbnails/300/300/detailed/2237/31jBYQXUatL.jpg.webp?t=1663303527',
        title: 'Keratin Shampoo',
        price: 399,
    },
    {
        id:9,
        image: 'https://ik.bebodywise.com/mosaic-wellness/image/upload/v1650629440/staging/products/buying-options/Active%20Acne%20and%20Scar%20Removal%20Pack/0_BLUE/PRODUCT%20IMAGES/ATK_NoBG.png',
        title: 'Salicylic Acid Gel',
        price: 520,
    },
    {
        id:10,
        image: 'https://m.media-amazon.com/images/I/81FcWWZHZLL.jpg',
        title: 'Body Care Kit',
        price: 1199,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
        <div class='img-box'>
           <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add To Cart</button>"+
        `</div>
        </div>`
    )
}).join('')
var cart =[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function displaycart(a){
    let j = 0,total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

}