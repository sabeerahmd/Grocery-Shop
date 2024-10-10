let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = cart.length;

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    cartCount++;

    localStorage.setItem('cart', JSON.stringify(cart));

    document.getElementById('cart-count').innerText = cartCount;

    alert(`${productName} has been added to your cart!`);
}
function filterProducts() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    const sections = document.querySelectorAll('section');

    let hasVisibleProducts = false;

    if (searchInput === "") {
        products.forEach(product => {
            product.style.display = 'block';
        });

        sections.forEach(section => {
            section.style.display = 'block';
        });

        return;
    }

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        
        if (productName.includes(searchInput)) {
            product.style.display = 'block';
            hasVisibleProducts = true;
        } else {
            product.style.display = 'none';
        }
    });

    sections.forEach(section => {
        const sectionProducts = section.querySelectorAll('.product');
        const sectionHasProducts = Array.from(sectionProducts).some(product => product.style.display === 'block');
        
        section.style.display = sectionHasProducts ? 'block' : 'none';
    });
}


