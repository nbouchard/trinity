// Shopping Cart JavaScript.
//
// shoppingCart()
// ---------------------------------------------
// Show the "Your Cart" menu item if there are plans in local storage

function maybeShowCart(){
    var shopLink = document.getElementById("shopping-cart-link");
    if(null != shopLink && 'undefined' !== typeof Storage) {
        if ('undefined' !== typeof localStorage['ls.plans'])
            shopLink.style.display = 'inline-block';
        else
            shopLink.style.display = 'none';
    } 
}
maybeShowCart();
