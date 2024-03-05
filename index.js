const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('image-animation');
        }
    });
});

const viewbox = document.querySelectorAll('.menu-item-card');
viewbox.forEach(image => {
    observer.observe(image);
});

const forWcu = document.querySelectorAll('.wcu-card');
forWcu.forEach(item => {
    observer.observe(item);
});

let healthyFood = document.querySelector('.healthy-food-section');
observer.observe(healthyFood);

let dps = document.querySelector('.delivery-and-payment-section');
observer.observe(dps);

let thankingCustomersSection = document.querySelector('.thanking-customers-section');
observer.observe(thankingCustomersSection);

let followsSection = document.querySelector('.follow-us-section');
observer.observe(followsSection);