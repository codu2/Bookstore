const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const searchBtn = document.getElementById('search-btn');
const search = document.getElementById('search');

searchBtn.addEventListener('click', () => {
    search.classList.toggle('show');
});

const currentBtn = document.getElementById('current__btn');
const current = document.getElementById('current');

currentBtn.addEventListener('click', () => {
    current.classList.toggle('show');
});

const userBtn = document.getElementById('user__btn');
const user = document.getElementById('user');

userBtn.addEventListener('click', () => {
    user.classList.toggle('show');
});

const signInBtn = document.querySelector('.sign-in-btn');
const signUpBtn = document.querySelector('.sign-up-btn');
const signIn = document.querySelector('.sign-in-container');
const signUp = document.querySelector('.sign-up-container');

signInBtn.addEventListener('click', () => {
    signIn.classList.add('active');
    signUp.classList.remove('active');
});

signUpBtn.addEventListener('click', () => {
    signUp.classList.add('active');
    signIn.classList.remove('active');
});

const searchClose = document.querySelector('.search-close');
const signInClose = document.querySelector('.sign-in-close');
const signUpClose = document.querySelector('.sign-up-close');
const currentClose = document.querySelector('.current-close');

searchClose.addEventListener('click', () => {
    search.classList.remove('show');
});

signInClose.addEventListener('click', () => {
    user.classList.remove('show');
});

signUpClose.addEventListener('click', () => {
    user.classList.remove('show');
});

currentClose.addEventListener('click', () => {
    current.classList.remove('show');
});

searchBtn.onclick = () => {
    if(current.classList.contains('show')) {
        current.classList.remove('show');
    }

    if(user.classList.contains('show')) {
        user.classList.remove('show');
    }
}

currentBtn.onclick = () => {
    if(search.classList.contains('show')) {
        search.classList.remove('show');
    }

    if(user.classList.contains('show')) {
        user.classList.remove('show');
    }
}

userBtn.onclick = () => {
    if(current.classList.contains('show')) {
        current.classList.remove('show');
    }

    if(search.classList.contains('show')) {
        search.classList.remove('show');
    }
}

if(document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready () {
    const removeCartItemButtons = document.getElementsByClassName('btn-danger');

    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    const quantityInputs = document.getElementsByClassName('cart-quantity-input');
    
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    const addToButtons = document.getElementsByClassName('shop-item-button');

    for(var i = 0; i < addToButtons.length; i++) {
        var button = addToButtons[i]; 
        button.addEventListener('click', addToCartClicked);
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}

function purchaseClicked() {
    alert('Thank you for your purchase');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while(cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1;
        /*input의 값이 숫자가 아니거나 0보다 작거나 같다면 1이다
        1 아래로 갯수가 떨어지지 않도록 하기 위함*/
    }
    updateCartTotal();
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    
    for(var i = 0; i < cartItemNames.length; i++) {
        if(cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart');
            return
        }
    }

    var cartRowContents = `
        <div class="cart-item cart-column">
            <img src="${imageSrc}" alt="" class="cart-item-image">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input type="number" class="cart-quantity-input" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;

    for(var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}