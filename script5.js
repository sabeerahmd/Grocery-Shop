let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartList = document.getElementById('cart-list');
const totalAmount = document.getElementById('total-amount');
const printBillButton = document.getElementById('print-bill');
const clearCartButton = document.getElementById('clear-cart');

function displayCart() {
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
        total += item.price;
    });

    totalAmount.textContent = `Total: $${total.toFixed(2)}`;
}

function printBill() {
    const printContent = document.createElement('div');
    
    printContent.innerHTML = `
        <h1>Grocery Depot</h1>
        <h2>Your Cart Bill</h2>
        <ul>${Array.from(cartList.children).map(item => `<li>${item.textContent}</li>`).join('')}</ul>
        <p>${totalAmount.textContent}</p>
        <footer>
            <p>123 Grocery Lane, Food City, Country</p>
        </footer>
    `;
    
    const win = window.open('', '', 'height=500,width=800');
    win.document.write('<html><head><title>Your Cart Bill</title>');
    win.document.write('<link rel="stylesheet" href="style5.css">');
    win.document.write('</head><body>');
    win.document.write(printContent.innerHTML);
    win.document.write('</body></html>');
    win.document.close();
    win.print();
}


function clearCart() {
    localStorage.removeItem('cart');
    cart = [];
    cartList.innerHTML = '';
    totalAmount.textContent = 'Total: $0.00';
}

printBillButton.addEventListener('click', printBill);
clearCartButton.addEventListener('click', clearCart);

displayCart();
