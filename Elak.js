 const product = [
    {
        id: 1,
        image: 'image/baby walker.jpg',
        title: 'Handbag',
        price: '#5000',
    },
    {
        id: 2,
        image: 'image/black bag 2.jpg',
        title: 'Handbag',
        price: '#5000',
    },
    {
        id: 3,
        image: 'image/black bag 2.jpg',
        title: 'Handbag',
        price: '#5000',
    },
    {
        id: 4,
        image: 'image/black bag 2.jpg',
        title: 'Handbag',
        price: '#5000',
    },
    {
        id: 5,
        image: 'image/black bag 2.jpg',
        title: 'Handbag',
        price: '#5000',
    },
    {
        id: 6,
        image: 'image/black bag 2.jpg',
        title: 'Handbag',
        price: '#5000',
    },
    {
        id: 7,
        image: 'image/black bag 2.jpg',
        title: 'Handbag',
        price: '#5000',
    },
]

const categories = [...new set(product.map((item)=>{return item}))]

let cart = document.getElementById('root')
cart.innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return`
        <div class="box">
            <div class="img-box">
                <img src=${item.image}></img>
            </div>
            <div class="left">
                <p>${title}</p>
                <h2>${price}</h2>
                <button>Add to cart</button>
            </div>
        </div>`;
}).join('');