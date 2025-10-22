// Enhanced JavaScript for Rare Beauty Website with Animations

// DOM Elements
let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let account = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = document.getElementById('cartCount');
let cartItems = document.getElementById('cartItems');
let cartEmpty = document.getElementById('cartEmpty');
let cartFooter = document.getElementById('cartFooter');
let cartTotal = document.getElementById('cartTotal');

// Search Form Toggle
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    account.classList.remove('active');
    navbar.classList.remove('active');
    
    // Add animation effect
    if (searchForm.classList.contains('active')) {
        searchForm.style.animation = 'slideInRight 0.4s ease-out';
    }
}

// Shopping Cart Toggle
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    account.classList.remove('active');
    navbar.classList.remove('active');
    
    // Add animation effect
    if (shoppingCart.classList.contains('active')) {
        shoppingCart.style.animation = 'slideInRight 0.4s ease-out';
    }
}

// Login Form Toggle
document.querySelector('#login-btn').onclick = () => {
    account.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
    
    // Add animation effect
    if (account.classList.contains('active')) {
        account.style.animation = 'slideInRight 0.4s ease-out';
    }
}

// Mobile Menu Toggle
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    account.classList.remove('active');
    
    // Add animation effect
    if (navbar.classList.contains('active')) {
        navbar.style.animation = 'slideInRight 0.4s ease-out';
    }
}

// Close dropdowns on scroll
window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    account.classList.remove('active');
    navbar.classList.remove('active');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize Swiper for Product Sliders
var productSwiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 4
        },
    },
});

// Initialize Swiper for Review Slider
var reviewSwiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3
        },
    },
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    // Add animate-on-scroll class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });
    
    // Add floating animation to feature boxes
    const featureBoxes = document.querySelectorAll('.features .box');
    featureBoxes.forEach((box, index) => {
        box.style.animationDelay = `${index * 0.2}s`;
        box.classList.add('floating');
    });
    
    // Create particle effects
    createParticles();
    
    // Add hover effects to product cards
    addProductHoverEffects();
    
    // Add typing animation to hero text
    addTypingAnimation();
    
    // Add parallax effect to home section
    addParallaxEffect();
});

// Create floating particles
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 20; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position and size
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = Math.random() * 4 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    
    // Random color from gradient
    const colors = ['#ff6b9d', '#ff8fab', '#c8a2c8', '#dda0dd'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(particle);
    
    // Remove and recreate particle after animation
    setTimeout(() => {
        particle.remove();
        createParticle(container);
    }, 6000);
}

// Add hover effects to product cards
function addProductHoverEffects() {
    const productCards = document.querySelectorAll('.products .box');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
            card.style.boxShadow = '0 20px 40px rgba(255, 107, 157, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 10px 30px rgba(255, 107, 157, 0.1)';
        });
    });
}

// Typing animation for hero text
function addTypingAnimation() {
    const heroText = document.querySelector('.home .content h3');
    if (!heroText) return;
    
    const text = heroText.textContent;
    heroText.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing animation after a delay
    setTimeout(typeWriter, 1000);
}

// Parallax effect for home section
function addParallaxEffect() {
    const homeSection = document.querySelector('.home');
    if (!homeSection) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        homeSection.style.transform = `translateY(${parallax}px)`;
    });
}

// Add to cart animation
function addToCartAnimation(button) {
    button.style.transform = 'scale(0.95)';
    button.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
    button.textContent = 'Added!';
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.style.background = '';
        button.textContent = 'Add to Cart';
    }, 1500);
}

// Add click event listeners to all "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.products .btn');
    addToCartButtons.forEach(button => {
        if (button.textContent.includes('Add to cart')) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                addToCartAnimation(button);
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 10px 30px rgba(255, 107, 157, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 10px 30px rgba(255, 107, 157, 0.1)';
    }
});

// Form validation and enhancement
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Add success animation
            const submitBtn = form.querySelector('input[type="submit"], .btn');
            if (submitBtn) {
                submitBtn.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
                submitBtn.textContent = 'Success!';
                
                setTimeout(() => {
                    submitBtn.style.background = '';
                    submitBtn.textContent = submitBtn.getAttribute('value') || 'Submit';
                }, 2000);
            }
        });
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to all buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn, .header .icons div');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
});

// Add CSS for ripple effect
const rippleCSS = `
.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

// Inject ripple CSS
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Image loading enhancement
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Ensure images are visible
        img.style.opacity = '1';
        img.style.visibility = 'visible';
        
        // Add error handling
        img.onerror = function() {
            console.log('Image failed to load:', this.src);
            this.style.display = 'none';
        };
        
        // Add load event
        img.onload = function() {
            this.style.opacity = '1';
            this.style.visibility = 'visible';
        };
    });
});

// Add smooth reveal animation for elements
function revealElements() {
    const reveals = document.querySelectorAll('.animate-on-scroll');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', revealElements);

// Cart Functions
function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartItems.style.display = 'none';
        cartFooter.style.display = 'none';
    } else {
        cartEmpty.style.display = 'none';
        cartItems.style.display = 'block';
        cartFooter.style.display = 'block';
        
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <div class="price">$${item.price.toFixed(2)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toFixed(2);
    }
}

function addToCart(productName, price, image = './rare/6.jpeg') {
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1,
            image: image
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    
    // Show success animation
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = 'Added!';
    btn.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1500);
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function closeCart() {
    shoppingCart.classList.remove('active');
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    
    if (!isLoggedIn) {
        if (confirm('You need to be logged in to checkout. Would you like to sign in?')) {
            window.location.href = 'login.html';
        }
        return;
    }
    
    // Simulate checkout process
    alert('Redirecting to checkout...');
    // In a real app, this would redirect to a payment page
}

// Update all "Add to Cart" buttons
function updateAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.products .btn');
    addToCartButtons.forEach(button => {
        if (button.textContent.includes('Add to cart')) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Get product info from the card
                const card = button.closest('.box');
                const productName = card.querySelector('h3').textContent;
                const priceText = card.querySelector('.price').textContent;
                const price = parseFloat(priceText.replace('$', ''));
                const image = card.querySelector('img').src;
                
                addToCart(productName, price, image);
            });
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    revealElements();
    updateCartDisplay();
    updateAddToCartButtons();
    
    // Check login status
    const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    const loginBtn = document.querySelector('#login-btn');
    
    if (isLoggedIn) {
        const userEmail = localStorage.getItem('userEmail');
        loginBtn.innerHTML = '<i class="fas fa-user-check"></i>';
        loginBtn.title = `Logged in as ${userEmail}`;
        
        // Add logout functionality
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
                localStorage.removeItem('userLoggedIn');
                localStorage.removeItem('userEmail');
                localStorage.removeItem('userData');
                localStorage.removeItem('loginMethod');
                location.reload();
            }
        });
    }
    
    // Add loading animation to page
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #ff6b9d 0%, #ff8fab 50%, #c8a2c8 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease-out;
    `;
    
    loader.innerHTML = `
        <div style="
            width: 60px;
            height: 60px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        "></div>
    `;
    
    const spinCSS = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    
    const spinStyle = document.createElement('style');
    spinStyle.textContent = spinCSS;
    document.head.appendChild(spinStyle);
    
    document.body.appendChild(loader);
    
    // Remove loader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
});