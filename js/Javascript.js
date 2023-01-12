//code for changing contact number and flag according to country


function btn() { // aldready declared this function 'btn()' in country dropdown option in onclick 
    let pr = document.getElementById('pr'); //declearing a variable for countries
    let contactno = document.getElementById('contactno'); //declearing a variable for countries


    let images = ['img/uae.png', 'img/usa.png', 'img/india.png',
        'img/canada.png'
    ]; //array for images of all countries
    pr.src = images[2]; //for displaying indian flag for india

    contactno.innerHTML = "+911234567890"; //contact no for india

}


function btn1() { // aldready declared this function 'btn1()' in country dropdown option in onclick 
    let pr = document.getElementById('pr'); //declearing a variable for countries
    let contactno = document.getElementById('contactno'); //declearing a variable for countries

    let images = ['img/uae.png', 'img/usa.png', 'img/india.png',
        'img/canada.png'
    ]; //array for images of all countries

    pr.src = images[1];
    contactno.innerHTML = "+19876543210"; //contact no for USA

}

function btn2() { // aldready declared this function 'btn2()' in country dropdown option in onclick 
    let pr = document.getElementById('pr'); //declearing a variable for countries
    let contactno = document.getElementById('contactno'); //declearing a variable for countries

    let images = ['img/uae.png', 'img/usa.png', 'img/india.png',
        'img/canada.png'
    ]; //array for images of all countries

    pr.src = images[0];
    contactno.innerHTML = " +9715555555555"; //contact no for UAE

}

function btn3() { // aldready declared this function 'btn3()' in country dropdown option in onclick 
    let pr = document.getElementById('pr'); //declearing a variable for countries
    let contactno = document.getElementById('contactno'); //declearing a variable for countries

    let images = ['img/uae.png', 'img/usa.png', 'img/india.png',
        'img/canada.png'
    ]; //array for images of all countries

    pr.src = images[3];
    contactno.innerHTML = " +15555555555"; //contact no for CANADA

}



// below is for making navbbar sticy and button which take to top
window.addEventListener("scroll", function () {

    let navbar = document.getElementById("pages"); //declearing variable for navbbar
    let top = window.pageYOffset || document.documentElement.scrollTop;
    let attop = document.getElementById(
        "scrollUp"); //declearing variable for scrolltotop button


    scrolled = () => { //function for scrolling at top
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    // stars.addEventListener('click', scrolled1)

    if (window.pageYOffset >= 180) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    if (window.pageYOffset >= 500) {

        attop.addEventListener('click', scrolled);
    } else {

        attop.removeEventListener("click", scrolled);
    }


})


// This is for addtocart buttons
function addtocart() {
    alert("Product is added to cart!")
}


// for going to review div in 0.3sec

function goToReview() {

    var scroll = setTimeout(function () {
        window.location = '#reviews';
        window.clearTimeout(scroll);
    }, 300);
}


// this is for clicable stars 
// star1, star2, star3, star4, star5

function star1() {

    var star1 = document.getElementById("outofrating");
    var coloring1 = document.getElementById("star1");
    var coloring2 = document.getElementById("star2");
    var coloring3 = document.getElementById("star3");
    var coloring4 = document.getElementById("star4");
    var coloring5 = document.getElementById("star5");


    star1.innerHTML = "1 Out Of 5 Stars";

    coloring1.classList.remove("far");
    coloring1.classList.add("fa");

    coloring2.classList.remove("fa");
    coloring2.classList.add("far");

    coloring3.classList.remove("fa");
    coloring3.classList.add("far");

    coloring4.classList.remove("fa");
    coloring4.classList.add("far");

    coloring5.classList.remove("fa");
    coloring5.classList.add("far");


}

function star2() {

    var star1 = document.getElementById("outofrating");
    var coloring1 = document.getElementById("star1");
    var coloring2 = document.getElementById("star2");
    var coloring3 = document.getElementById("star3");
    var coloring4 = document.getElementById("star4");
    var coloring5 = document.getElementById("star5");


    star1.innerHTML = "2 Out Of 5 Stars";

    coloring1.classList.remove("far");
    coloring1.classList.add("fa");

    coloring2.classList.remove("far");
    coloring2.classList.add("fa");

    coloring3.classList.remove("fa");
    coloring3.classList.add("far");

    coloring4.classList.remove("fa");
    coloring4.classList.add("far");

    coloring5.classList.remove("fa");
    coloring5.classList.add("far");


}

function star3() {

    var star1 = document.getElementById("outofrating");
    var coloring1 = document.getElementById("star1");
    var coloring2 = document.getElementById("star2");
    var coloring3 = document.getElementById("star3");
    var coloring4 = document.getElementById("star4");
    var coloring5 = document.getElementById("star5");


    star1.innerHTML = "3 Out Of 5 Stars";

    coloring1.classList.remove("far");
    coloring1.classList.add("fa");

    coloring2.classList.remove("far");
    coloring2.classList.add("fa");

    coloring3.classList.remove("far");
    coloring3.classList.add("fa");

    coloring4.classList.remove("fa");
    coloring4.classList.add("far");

    coloring5.classList.remove("fa");
    coloring5.classList.add("far");


}

function star4() {

    var star1 = document.getElementById("outofrating");
    var coloring1 = document.getElementById("star1");
    var coloring2 = document.getElementById("star2");
    var coloring3 = document.getElementById("star3");
    var coloring4 = document.getElementById("star4");
    var coloring5 = document.getElementById("star5");


    star1.innerHTML = "4 Out Of 5 Stars";

    coloring1.classList.remove("far");
    coloring1.classList.add("fa");

    coloring2.classList.remove("far");
    coloring2.classList.add("fa");

    coloring3.classList.remove("far");
    coloring3.classList.add("fa");

    coloring4.classList.remove("far");
    coloring4.classList.add("fa");

    coloring5.classList.remove("fa");
    coloring5.classList.add("far");


}

function star5() {

    var star1 = document.getElementById("outofrating");
    var coloring1 = document.getElementById("star1");
    var coloring2 = document.getElementById("star2");
    var coloring3 = document.getElementById("star3");
    var coloring4 = document.getElementById("star4");
    var coloring5 = document.getElementById("star5");


    star1.innerHTML = "5 Out Of 5 Stars";

    coloring1.classList.remove("far");
    coloring1.classList.add("fa");

    coloring2.classList.remove("far");
    coloring2.classList.add("fa");

    coloring3.classList.remove("far");
    coloring3.classList.add("fa");

    coloring4.classList.remove("far");
    coloring4.classList.add("fa");

    coloring5.classList.remove("far");
    coloring5.classList.add("fa");


}


// This is for changing sample img in product viewing page
// sampleimg1,2,3,4,5

function sampleimg1() {
    var img = document.getElementById('sampleimg');
    var samples = ['img/product1.png', 'img/product2.png', 'img/product3.png', 'img/product4.png'];


    img.src = samples[0];
}

function sampleimg2() {
    var img = document.getElementById('sampleimg');
    var samples = ['img/product1.png', 'img/product2.png', 'img/product3.png', 'img/product4.png'];

    img.src = samples[1];
}

function sampleimg3() {
    var img = document.getElementById('sampleimg');
    var samples = ['img/product1.png', 'img/product2.png', 'img/product3.png', 'img/product4.png'];

    img.src = samples[2];
}

function sampleimg4() {
    var img = document.getElementById('sampleimg');
    var samples = ['img/product1.png', 'img/product2.png', 'img/product3.png', 'img/product4.png'];


    img.src = samples[3];

    return false;

}




function hovering(x) {

    let cart = document.getElementById("product-hover" + x);
    let fav = document.getElementById("buttons"+x);
    fav.classList.remove("hide");
    
}

function nonhovering(x) {

    let cart = document.getElementById("product-hover" + x);
    let fav = document.getElementById("buttons"+x);
    fav.classList.add("hide");
}




//Sending async request for JSON file and fetch data
async function loadProduct() {
    const response = await fetch('jS/productData.json');
    const listOfProducts = await response.json();
    return listOfProducts;
}

//after DOM loading checking for error  and then printing data
let listOfProducts = [];
document.addEventListener("DOMContentLoaded", async () => {
    try {
        listOfProducts = await loadProduct();
    } catch (e) {
        console.log("error");
        console.log(e);
    }
    document.querySelectorAll(".totalProduct").forEach(total => total.innerHTML = `(${listOfProducts.length} items)`);
    //to print products in div with class name .listOfProducts
    //then using .map() method for getting all the product details one by one in loop
    document.querySelectorAll(".listOfProducts").forEach(P => P.innerHTML = `
         <div class="row">
         ${listOfProducts.map(productDisplay).join("")}
         </div>
     `);

      //after all data get fetched, executing hover effect and display rating stars
    $(document).ready(function () {
        //changing image source of favourite hover button oh hover
        $('.favBtn').hover(function () {
            $(this).attr("src", "img/Group 2582.png");
        }, function () {
            $(this).attr("src", "img/Group 2579.png");
        });
        //changing image source of watchlist hover button oh hover
        $('.watchBtn').hover(function () {
            $(this).attr("src", "img/Group 2583.png");
        }, function () {
            $(this).attr("src", "img/Group 2580.png");
        });

        //changing image source of cart hover button oh hover
        $('.cartBtn').hover(function () {
            $(this).attr("src", "img/Group 2584.png");
        }, function () {
            $(this).attr("src", "img/Group 2581.png");
        });

        //prepend image to show star icons in displaystar span according to the last no. in class name
        $('[class^="displayStar"]').prepend(function () {
            //taking the last no. of displayStar class & convert to num
            var c = $(this).attr("class");
            var num = parseInt(c.charAt(11));
            var x = '';
            //getting dark stars
            for (let i = 0; i < num; i++) {
                x = x + '<img src="img/Path 9645.png" height="22px">';
            }
            //getting ligt stars at the end 
            for (let i = 0; i < 5 - num; i++) {
                x = x + '<img src="img/Path -5.png" height="22px">';
            }
            return x;
        });
        CartCalculation();
    });
    //declaring item array
    cart = [];
    $('.cartBtn').click(function () {
        //cheaking for local storage
        if (typeof (Storage) != 'undefined') {
            //getting all of the product information to be saved in local storage
            let item = {
                ID: $(this).closest('.product').attr('id'),
                quantity: 1
            };
            //saving cart when Local storage is empty
            if (JSON.parse(localStorage.getItem('cart')) === null) {
                cart.push(item);
                localStorage.setItem("cart", JSON.stringify(cart));
                window.location.reload();
            } else {
                //getting previous data of local storage
                const localItems = JSON.parse(localStorage.getItem("cart"));
                localItems.map(data => {
                    if (item.ID == data.ID) {
                        //if same item is clicked twice it increases quantity
                        item.quantity = data.quantity + 1;
                    } else {
                        //else push in cart
                        cart.push(data);
                    }
                });
                //pushing all item in items array and saving in local storage
                cart.push(item);
                localStorage.setItem('cart', JSON.stringify(cart));
                window.location.reload();
            }
            alert("!!! Product Added Successfully to Cart !!!");
        } else {
            //in case of no storage
            alert("No storage");
        }
    });

    //getting cart from local storage
    let cartItems = JSON.parse(localStorage.getItem('cart'));
    //checking for not null
    if (cartItems != null) {
        //try & catch is used so that it do not cause errors in other pages which dont have the ID of which css has been changed
        try {
            //getting the div with id cartProduct & making it empty
            document.getElementById("cartProduct").innerHTML = ``;
            //mapping all cart items
            cartItems.map(item => {
                listOfProducts.map(product => {
                    //matching cart product id with list of product id
                    if (item.ID == product.ID) {
                        //appending the div with id cartProduct with cart product cards from cartDisplay function
                        document.getElementById("cartProduct").innerHTML += cartDisplay(product, item);
                    }
                });
            });
        } catch (error) {
            //blank
        }
    }
   
});


function productDisplay(product) {
    return `
            <div onmouseover="hovering(${product.hover})" onmouseout="nonhovering(${product.hover})" class="col-12 col-md-6 col-lg-6 col-xl-4 product "  id="${product.ID}" style="margin:10px 0" >
            <!-- card containing product -->
            <div class=" card text-center" align="center" style="width: 18rem;" id="${product.ID}">
                <div class="fade card" id="product-hover${product.hover}">
                    <img class="card-img-top product-img" src="${product.image}" alt="product" class="img-fluid">
                    <div class="mt-2" style="margin:10px 0">
                        <strong>${product.name}</strong><br>
                        <strong>Rs. <p class="d-inline">${product.discountPrice}</p> </strong>
                        <span class="text-decoration-line-through "> Rs. <p class="d-inline">${product.price}</p></span>
                        <strong class="type2"> (${Math.floor((product.price - product.discountPrice) / product.price * 100)}% Off)</strong><br>
                        <!-- displaystar span generates star icon through jQuery based on number -->
                        <span class="displayStar${product.rating}"></span>
                    </div>
                </div>
                <!-- checking if newTag image is required or not -->
               
                <!-- hover btn on hovering changes image src -->
               
            </div>
            <span class="hoverBtn product-hover hide" id="buttons${product.hover}" >
            <div class="row" style="display: flex" align="center">
            <button style=" background: none" class="btn"><img width="60px" class="favBtn" src="img/Group 2579.png" alt="favorite"></button>
            <button style=" background: none" class="btn"><img width="60px" class="watchBtn" src="img/Group 2580.png" alt="watchlist"></button>
            <button style=" background: none" class="btn"><img width="60px" class="cartBtn" src="img/Group 2581.png" alt="cart"></button>
            </div>
            </span>
            </div>
            `;
}


function cartDisplay(product, item) {
    //card containing table of row and col class 
    //column 1 containing product image
    //column 2 containing product discription and quantity selector
    //column 3 containing price detail
    //bottom of card containing remove button & add to wishlist button
    return `
        <div class="cartProduct card" id="${product.ID}">
                    <div class="row container-fluid my-3">
                        <div class="col-12 col-md-2 text-center">
                            <img src="${product.image}" class="img-fluid border" alt="product image">
                        </div>
                        <div class="col-12 col-md-7 mb-3">
                            <strong>${product.name}</strong><br>
                            <p class="type1">Colour : White</p><br>
                            <p class="type1">Sold By : Macmerise Celfie Design Private Limited</p>
                            <div class="row selector">
                                <div class="col-10 col-sm-8 col-xl-6 col-xxl-4 mt-2">
                                    <select class="form-select" aria-label="Size">
                                        <option selected disabled>Size : Onesize</option>
                                        <option value="Twosize">Size : Twosize</option>
                                        <option value="Threesize">Size : Threesize</option>
                                    </select>
                                </div>
                                <div class="col-6 col-sm-4 col-xl-4 col-xxl-3 mt-2">
                                    <select class="form-select QTY" aria-label="Quantity" onchange="QTYchange(this.selectedIndex,${product.ID})">
                                        <option selected disabled value="">QTY : ${item.quantity}</option>
                                        <option value ="1" >QTY : 1</option>
                                        <option value="2">QTY : 2</option>
                                        <option value="3">QTY : 3</option>
                                        <option value="4">QTY : 4</option>
                                        <option value="5">QTY : 5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-3">
                            <strong>Rs. <p class="d-inline">${product.discountPrice}</p> </strong><br>
                        <span class="text-decoration-line-through "> Rs. <p class="d-inline">${product.price}</p></span>
                        <strong class="type2 d-inline fs-6"> (${Math.floor((product.price - product.discountPrice) / product.price * 100)}% Off)</strong>
                        <p>Delivery in 4-6 days</p>
                        </div>
                    </div>
                    <hr>
                    <span class="mb-3">
                        <button class="remove" onclick=removeFromCart(${product.ID})>Remove</button><p class="type1">|</p>
                    <button onclick=cartToWishlist(${product.ID})>Move to Wishlist</button>
                    </span> 
                </div>
        `;
}

//QTYchange function called on selecting quantity in cart product card
//it takes parameter of clicked product & quantity
function QTYchange(QTY, e) {
    //declaring items array
    let items = [];
    //finding the required product to change quantity by maping local storage data
    JSON.parse(localStorage.getItem('cart')).map(data => {
        if (data.ID == e.id) {
            //changing and pushing data in items array
            data.quantity = parseInt(QTY);
            items.push(data);
        } else {
            //pushing data in items array
            items.push(data);
        }
    });
    //saving changed value in local storage
    localStorage.setItem("cart", JSON.stringify(items));
    //calling calculation function to change bill values
    CartCalculation();

}


//calculation function changes all billing values 
function CartCalculation() {
    //declaring integer for total cost & gross cost
    var grossPrice = 0,
        totalCost = 0;
    if (JSON.parse(localStorage.getItem('cart')) != null) {
        JSON.parse(localStorage.getItem('cart')).map(item => {
            listOfProducts.map(product => {
                if (item.ID == product.ID) {
                    totalCost += parseInt(product.discountPrice) * item.quantity;
                    grossPrice += parseInt(product.price) * item.quantity;
                }
            });
        });
        //changing total cost element innerHTML
        document.querySelectorAll(".totalCost").forEach(total => total.innerHTML = totalCost);
        //changing gross cost element innerHTML
        document.querySelectorAll(".grossPrice").forEach(total => total.innerHTML = grossPrice);
        //changing discounted cost element innerHTML
        document.querySelectorAll(".totalDiscount").forEach(total => total.innerHTML = (grossPrice - totalCost));
    }
    //change value in div with class cartLength to get total items
    document.querySelectorAll(".cartLength").forEach(total => total.innerHTML = `${JSON.parse(localStorage.getItem('cart')).length} `);
}


//removeFromCart function called on clicking remove button
//it takes parameter of clicked product 
function removeFromCart(e) {
    //declaring items array
    let items = [];
    //finding the required product to be removed by maping local storage data
    JSON.parse(localStorage.getItem('cart')).map(data => {
        if (data.ID != e.id) {
            //pushing all unmatched data
            items.push(data);
        }
    });
    //saving in local storage
    localStorage.setItem("cart", JSON.stringify(items));
    //fade the card div of product in 0.3s
    $("#" + e.id).fadeOut(300);
    //calling calculation function to change bill values
    CartCalculation();
}
