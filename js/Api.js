// -------------------------------------------------
// --------- buy your product section start ---------
// -------------------------------------------------
const section1Data = [
    {
        img : "img/shoe.jpg",
        h5 : "Sneakers & Keds",
        p : "$365.00"
    },
    {
        img : "img/pant.jpg",
        h5 : "Jens Pent",
        p : "$280.00"
    },
    {
        img : "img/watch.jpg",
        h5 : "Man's watch",
        p : "$130.00"
    },
    {
        img : "img/t-shirt.jpg",
        h5 : "T-Shirt of Man's",
        p : "$260.00"
    },
    {
        img : "img/half-pent.png",
        h5 : "Half Pent",
        p : "$195.00"
    },
    {
        img : "img/cap.jpg",
        h5 : "Cap of Man's",
        p : "$80.00"
    }
];

let html = '';
section1Data.map((element)=>{
   html += section1DataGet(element);
});

const section1 = document.getElementById('section1');
section1.innerHTML = html;

function section1DataGet (info){
    const {img, h5, p} = info;
    const htmlcode = `
    <div class="col-md-4 mt-1 display1">
        <div class="card rounded-2 mt-4 border-0">
            <div>
                <img src=${img} class="card-img-top" alt=${h5}>
            </div>
            <div class="card-body">
                <h5 class="fw-bold text-center">${h5}</h5>
                <div class="feedback-Area d-flex mt-1 justify-content-between">
                    <p class="fw-normal">${p}</p>
                    <div class="d-flex">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
        </div>

    `;
    return htmlcode;
};
// -------------------------------------------------
// --------- buy your product section end ---------
// -------------------------------------------------


// -------------------------------------------------
// --------- tranding product section start ---------
// -------------------------------------------------
const TrandingAllProduct =[
    {
        img : "img/laptop.jpg",
        technology : "Computers",
        cardTitle : "Convertible 2-in-1 HD Laptop",
        price : "$118.00",
        fbURL : "https://www.linkedin.com/in/nobenur-islam-rimon-programmer//"
    },
    {
        img : "img/lgtv.jpg",
        technology : "TV Video & Audio",
        cardTitle : "Smart TV LED 49 Ultra HD",
        price : "$380.000",
        fbURL : "https://www.linkedin.com/in/nobenur-islam-rimon-programmer/"
    },
    {
        img : "img/freeze.jpg",
        technology : "Computers",
        cardTitle : "Airport Extreme Base Station",
        price : "$180.00",
        fbURL : "https://www.linkedin.com/in/nobenur-islam-rimon-programmer/"
    },
    {
        img : "img/trandwatch.jpg",
        technology : "Wearable Electronics",
        cardTitle : "Fitness GPS Smart Watch",
        price : "$550.00",
        fbURL : "https://www.linkedin.com/in/nobenur-islam-rimon-programmer/"
    },
    {
        img : "img/smartphone.jpg",
        technology : "Smartphones",
        cardTitle : "Popular Smartphone 256GB",
        price : "$1000.00",
        fbURL : "https://www.linkedin.com/in/nobenur-islam-rimon-programmer/"
    },
    {
        img : "img/trandwatch-2.jpg",
        technology : "Trending Smart Gadget",
        cardTitle : "Wireless Smart Watch",
        price : "$1180.00",
        fbURL : "https://www.linkedin.com/in/nobenur-islam-rimon-programmer/"
    },
    {
        img : "img/mp3box.jpg",
        technology : "Smart Home",
        cardTitle : "Speaker with Voice Control",
        price : "$300.0000",
        fbURL : "https://www.linkedin.com/in/nobenur-islam-rimon-programmer/"
    },
    {
        img : "img/headphone.jpg",
        technology : "Headphones",
        cardTitle : "Wireless Bluetooth Headphones",
        price : "$120.00",
        fbURL : "https://www.linkedin.com/in/nobenur-islam-rimon-programmer/"
    }
]
let trandingProductHtml = '';
TrandingAllProduct.map((element)=>{
    trandingProductHtml += trandingProduct(element);
});

const trandingProductID = document.getElementById('trandingProductID');
trandingProductID.innerHTML = trandingProductHtml;

function trandingProduct (info){
    const {img, technology, cardTitle, price, fbURL} = info;
    const htmlcode = `
    <div class="col-md-3 column-section">
        <div class="card mt-4 rounded-2 border-0">
            <div>
                <div class="d-flex justify-content-between ps-2 pt-2 pe-2">
                    <a class="text-decoration-none" href=${fbURL} target="_blank"><p class="btn btn-danger d-flex align-items-center h-75">Sale</p></a>
                    <a class="text-decoration-none" href=${fbURL} target="_blank"><p class="fw-normal compare"><i class="fa-solid fa-arrows-left-right pe-1"></i>Compare</p></a>
                </div>
                <div class="product_img">
                    <img src=${img} class="card-img-top " alt=${cardTitle}>
                </div>
                <div class="card-body">
                    <p class="fw-normal technology">${technology}</p>
                    <h5 class="card-title fw-bold">${cardTitle}</h5>
                    <div class="d-flex justify-content-between">
                        <p class="fs-6 fw-normal text-primary">${price}</p>
                        <div class="d-flex">
                            <i class="fs-6 mt-2 text-primary fa-solid fa-star"></i>
                            <i class="fs-6 mt-2 text-primary fa-solid fa-star"></i>
                            <i class="fs-6 mt-2 text-primary fa-solid fa-star"></i>
                            <i class="fs-6 mt-2 text-primary fa-regular fa-star-half-stroke"></i>
                            <i class="fs-6 mt-2 text-primary fa-regular fa-star"></i>
                        </div>
                    </div>
                    <a class="text-decoration-none" href=${fbURL} target="_blank"><button class="d-flex justify-content-center align-items-center btn btn-danger tex-light col-12">Add to cart</button></a>
                    <a class="text-decoration-none" href=${fbURL} target="_blank"><button class="d-flex justify-content-center align-items-center btn btn-outline-success tex-light col-12 mt-2">Quick View</button></a>
                </div>
            </div>
        </div>
    </div>
    `;
    return htmlcode;
};
// -------------------------------------------------
// --------- tranding product section end ---------
// -------------------------------------------------



// -------------------------------------------------
// --------- shop buy brand section end ---------
// ------------------------------------------------
const shopBuyBrandData = [
    {
        img : "img/shopbybrand-1.png",
    },
    {
        img : "img/shopbybrand-2.png",
    },
    {
        img : "img/shopbybrand-3.png",
    },
    {
        img : "img/shopbybrand-4.png",
    },
    {
        img : "img/shopbybrand-5.png",
    },
    {
        img : "img/shopbybrand-6.png",
    },
    {
        img : "img/shopbybrand-7.png",
    },
    {
        img : "img/shopbybrand-8.png",
    },
    {
        img : "img/shopbybrand-9.png",
    },
    {
        img : "img/shopbybrand-10.png",
    },
    {
        img : "img/shopbybrand-11.png",
    },
    {
        img : "img/shopbybrand-12.png",
    }
];

let ShopByBrandHTML = '';
shopBuyBrandData.map((element)=>{
   ShopByBrandHTML += ShopByBrandData(element);
});

const ShopByBrandID = document.getElementById('ShopByBrandID');
ShopByBrandID.innerHTML = ShopByBrandHTML;

function ShopByBrandData (info){
    const {img} = info;
    const htmlcode = `
        <div class="col-md-2">
            <div class="h-100 card rounded-0 d-flex justify-content-center align-items-center">
                <img src=${img} class="card-img-top p-4 pt-5 pb-5" alt="shopping brand">
            </div>
        </div>
    `;
    return htmlcode;
};
// -------------------------------------------------
// --------- shop buy brand section end ---------
// -------------------------------------------------



// -------------------------------------------------
// --------- shop buy brand section end ---------
// ------------------------------------------------
const TopSellingAllProductData = [
    {
        price : "$1200.00",
        extPrice : "$800.00",
        img : "img/topSelling-1.jpg",
        title : "Convertible 2-in-1 HD Laptop"
    },
    {
        price : "$500.00",
        extPrice : "$480.00",
        img : "img/topSelling-2.jpg",
        title : "Popular Smartphone 256GB"
    },
    {
        price : "$380.00",
        extPrice : "$350.00",
        img : "img/topSelling-3.jpg",
        title : "Digital charger fan"
    },
    {
        price : "$130.00",
        extPrice : "$100.00",
        img : "img/topSelling-4.jpg",
        title : "Digital water cleaner"
    },
    {
        price : "$100.00",
        extPrice : "$80.00",
        img : "img/topSelling-5.jpg",
        title : "Smart Speaker with Voice Control"
    },
    {
        price : "$350.00",
        extPrice : "$320.00",
        img : "img/topSelling-6.jpg",
        title : "Fitness GPS Smart Watch"
    },
];

let TopSellingProductHTML = '';
TopSellingAllProductData.map((element)=>{
    TopSellingProductHTML += TopSellingProductData(element);
});

const TopSellingProduct = document.getElementById('TopSellingProduct');
TopSellingProduct.innerHTML = TopSellingProductHTML;

function TopSellingProductData (info){
    const {img, title, price, extPrice,} = info;
    const htmlcode = `
    <div class="col-md-4">
        <div class="card bg-light p-4 border-0 mt-4">
            <div class="row">
                <div class="col-lg-6">
                    <img src=${img} class="card-img-top mt-3" alt="top selling product">
                </div>
                <div class="col-lg-6">     
                    <div>
                        <div class="d-flex mt-1">
                            <i class="text-warning fa-solid fa-star"></i>
                            <i class="text-warning fa-solid fa-star"></i>
                            <i class="text-warning fa-solid fa-star"></i>
                            <i class="text-warning fa-regular fa-star-half-stroke"></i>
                            <i class="text-warning fa-regular fa-star"></i>
                        </div>
                        <h6 class="mt-3">${title}</h6>
                        <div class="d-flex justify-content-between">
                            <p class="mt-2 fw-bold text-danger"><s>${price}</s></p>
                            <p class="mt-2 fw-bold text-success">${extPrice}</p>
                        </div>
                        <a href="https://www.linkedin.com/in/nobenur-islam-rimon-programmer/" target="_blank"> <button class="btn btn-danger">Add to Cart</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    return htmlcode;
};
// -------------------------------------------------
// --------- shop buy brand section end ---------
// -------------------------------------------------

