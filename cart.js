function retrieve() {
    cart = JSON.parse(sessionStorage.getItem('cart'));
    alert(cart['add1'])
}