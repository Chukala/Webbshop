
exports.showTotalPrice = function () {

    let myRequest = new Request('./private/products.json');
    fetch(myRequest)
        .then((res) => res.json())
        .then(function (products) {
            let PRODUCTS = products;
            console.log(PRODUCTS);
        });
    let send;
    let kopycart = CART.contents;
    let sum = kopycart.reduce(function (acu, cur) { //here we use buit in reduce method old value + current value
        return acu + cur.qty * cur.itemPrice;
    }, 0);
    sum = Math.round(sum * 100) / 100;
    send = sum.toString();
    return send;
}