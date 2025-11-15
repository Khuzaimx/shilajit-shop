// Image pool from static folder
const imagePool = {
    hero: [
        'static/sl1.jpeg',
        'static/sl2.jpeg',
        'static/Gemini_Generated_Image_36npdz36npdz36np.png',
        'static/Gemini_Generated_Image_4t4rjy4t4rjy4t4r.png',
        'static/Gemini_Generated_Image_4xcb6z4xcb6z4xcb.png'
    ],
    products: [
        'static/product.png',
        'static/p2.png',
        'static/p3.png',
        'static/p4.png',
        'static/p5.png',
        'static/Gemini_Generated_Image_7a0jod7a0jod7a0j.png',
        'static/Gemini_Generated_Image_besshwbesshwbess.png',
        'static/Gemini_Generated_Image_cfcsjucfcsjucfcs.png',
        'static/Gemini_Generated_Image_36npdz36npdz36np.png',
        'static/Gemini_Generated_Image_4t4rjy4t4rjy4t4r.png',
        'static/Gemini_Generated_Image_4xcb6z4xcb6z4xcb.png'
    ]
};

// Function to get random images from pool
function getRandomImages(pool, count = 3) {
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to get random single image
function getRandomImage(pool) {
    return pool[Math.floor(Math.random() * pool.length)];
}

// Generate fake reviews
function generateReviews(productName) {
    const reviewTemplates = [
        { name: "Ahmed Ali", location: "Lahore", rating: 5, text: `Amazing quality! I've been using ${productName} for 2 months and feel a significant boost in my energy levels. Highly recommended!`, date: "2 weeks ago" },
        { name: "Sarah Khan", location: "Karachi", rating: 5, text: `The purest shilajit I've ever tried. You can really feel the difference in quality. Worth every penny!`, date: "1 month ago" },
        { name: "Mohammad Hassan", location: "Islamabad", rating: 5, text: `Fast shipping and excellent customer service. The product is authentic and exactly as described. Will order again!`, date: "3 weeks ago" },
        { name: "Ayesha Malik", location: "Lahore", rating: 5, text: `Best quality shilajit available in Pakistan. Noticeable improvement in energy and overall well-being.`, date: "1 week ago" },
        { name: "Usman Ahmed", location: "Rawalpindi", rating: 5, text: `Premium product with great results. My family loves it and we've already placed a second order.`, date: "2 weeks ago" },
        { name: "Fatima Sheikh", location: "Karachi", rating: 4, text: `Good quality product. Delivery was quick and packaging was excellent. Very satisfied with the purchase.`, date: "1 month ago" },
        { name: "Bilal Ahmad", location: "Faisalabad", rating: 5, text: `Excellent product! Authentic Himalayan shilajit as promised. Highly recommend to everyone.`, date: "3 weeks ago" },
        { name: "Zainab Ali", location: "Lahore", rating: 5, text: `Outstanding quality and purity. Can feel the natural benefits within weeks of use. Great value for money!`, date: "2 weeks ago" }
    ];
    // Return 5-8 random reviews
    const count = 5 + Math.floor(Math.random() * 4);
    return reviewTemplates.sort(() => 0.5 - Math.random()).slice(0, count);
}

// Product data
const products = [
    {
        id: 1,
        name: "Premium Shilajit Resin",
        description: "Pure Himalayan shilajit resin, 100% authentic and tested for quality. Sourced from Pakistan's border region.",
        fullDescription: "Our Premium Shilajit Resin is harvested from the pristine Himalayan mountains near Pakistan's border at elevations above 10,000 feet. This raw, unprocessed resin contains over 85 minerals and trace elements in their natural form. Each batch is carefully tested for purity and authenticity in Pakistan.",
        price: 13999,
        image: getRandomImage(imagePool.products),
        images: getRandomImages(imagePool.products, 4),
        benefits: [
            "85+ minerals and trace elements",
            "100% pure and unprocessed",
            "Lab tested in Pakistan",
            "Direct from Himalayan source",
            "Natural energy boost"
        ],
        size: "50 grams",
        origin: "Himalayan Mountains, Pakistan",
        rating: 4.8,
        reviewsCount: 247,
        salesCount: 1843,
        discount: 20
    },
    {
        id: 2,
        name: "Shilajit Powder",
        description: "Finely ground shilajit powder, easy to mix and consume. Perfect for daily supplementation.",
        fullDescription: "Our Shilajit Powder is made from premium resin that has been carefully ground into a fine powder for easy consumption. Perfect for mixing into tea, milk, or water. Maintains all the natural benefits of raw shilajit in a convenient form.",
        price: 10999,
        image: getRandomImage(imagePool.products),
        images: getRandomImages(imagePool.products, 4),
        benefits: [
            "Easy to mix and consume",
            "Same purity as resin form",
            "Convenient daily supplement",
            "Fast absorption",
            "No additives or fillers"
        ],
        size: "100 grams",
        origin: "Himalayan Mountains, Pakistan",
        rating: 4.7,
        reviewsCount: 189,
        salesCount: 1456,
        discount: 15
    },
    {
        id: 3,
        name: "Shilajit Capsules",
        description: "Convenient shilajit capsules for daily supplementation. No taste, easy to swallow.",
        fullDescription: "Our Shilajit Capsules offer the perfect solution for those who want the benefits of shilajit without the taste. Each capsule contains pure shilajit powder in a vegetarian capsule. Perfect for on-the-go supplementation.",
        price: 12499,
        image: getRandomImage(imagePool.products),
        images: getRandomImages(imagePool.products, 4),
        benefits: [
            "No taste, easy to swallow",
            "Pre-measured dosage",
            "Vegetarian capsules",
            "Travel-friendly",
            "Consistent potency"
        ],
        size: "60 capsules (500mg each)",
        origin: "Himalayan Mountains, Pakistan",
        rating: 4.9,
        reviewsCount: 312,
        salesCount: 2234,
        discount: 25
    },
    {
        id: 4,
        name: "Shilajit Extract",
        description: "Concentrated shilajit extract with enhanced bioavailability. Maximum potency in smaller doses.",
        fullDescription: "Our Shilajit Extract is a highly concentrated form that has been carefully processed to enhance bioavailability while maintaining all natural compounds. This premium extract delivers maximum benefits in smaller doses.",
        price: 16999,
        image: getRandomImage(imagePool.products),
        images: getRandomImages(imagePool.products, 4),
        benefits: [
            "Enhanced bioavailability",
            "Concentrated formula",
            "Maximum potency",
            "Smaller serving size",
            "Premium quality"
        ],
        size: "30ml",
        origin: "Himalayan Mountains, Pakistan",
        rating: 4.6,
        reviewsCount: 156,
        salesCount: 987,
        discount: 18
    },
    {
        id: 5,
        name: "Shilajit Combo Pack",
        description: "Complete shilajit collection - resin, powder, and capsules. Best value package for families.",
        fullDescription: "Our Combo Pack includes all three forms of our premium shilajit: resin, powder, and capsules. Perfect for trying different forms or for families. This value pack offers the best of all worlds.",
        price: 35999,
        image: getRandomImage(imagePool.products),
        images: getRandomImages(imagePool.products, 4),
        benefits: [
            "All three forms included",
            "Best value package",
            "Try different formats",
            "Perfect for families",
            "Save 15% vs buying separately"
        ],
        size: "Resin 25g + Powder 50g + 30 Capsules",
        origin: "Himalayan Mountains, Pakistan",
        rating: 4.9,
        reviewsCount: 278,
        salesCount: 1654,
        discount: 15
    },
    {
        id: 6,
        name: "Premium Shilajit Gift Set",
        description: "Luxury gift set perfect for gifting or personal use. Beautifully packaged with premium products.",
        fullDescription: "Our Premium Gift Set is beautifully packaged and includes our finest shilajit products. Perfect for gifting to loved ones or treating yourself. Includes premium resin, extract, and a beautiful wooden spoon.",
        price: 24999,
        image: getRandomImage(imagePool.products),
        images: getRandomImages(imagePool.products, 4),
        benefits: [
            "Beautiful gift packaging",
            "Premium quality products",
            "Includes wooden spoon",
            "Perfect for gifting",
            "Luxury presentation"
        ],
        size: "Resin 30g + Extract 20ml + Accessories",
        origin: "Himalayan Mountains, Pakistan",
        rating: 5.0,
        reviewsCount: 124,
        salesCount: 756,
        discount: 22
    }
];

// Cart state
let cart = [];

// Slider state
let currentSlideIndex = 0;
let currentTestimonialIndex = 0;
let slides = [];
let testimonials = [];

// Initialize the store
document.addEventListener('DOMContentLoaded', () => {
    loadProductDetail();
    
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Optimized image loading with lazy loading
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                
                img.addEventListener('load', function() {
                    this.style.opacity = '1';
                }, { once: true });
                
                img.style.transition = 'opacity 0.2s ease';
                img.style.willChange = 'opacity';
                
                if (img.complete) {
                    img.style.opacity = '1';
                } else {
                    img.style.opacity = '0';
                }
                
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            imageObserver.observe(img);
        }
    });
    
    // Optimized header scroll effect with debouncing
    let ticking = false;
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    function updateHeader() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });
    
    // Intersection Observer for scroll animations (optimized)
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '50px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);
    
    // Observe sections for fade-in animations (only if not already visible)
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (!isVisible) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            section.style.willChange = 'opacity, transform';
            observer.observe(section);
        }
    });
});

// Initialize sliders (optimized)
function initSliders() {
    slides = document.querySelectorAll('.slide');
    testimonials = document.querySelectorAll('.testimonial-card');
    
    // Auto-advance hero slider (only if page is visible)
    if (slides.length > 0) {
        let slideInterval;
        const startSlideShow = () => {
            slideInterval = setInterval(() => {
                if (!document.hidden) {
                    changeSlide(1);
                }
            }, 5000);
        };
        
        startSlideShow();
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                clearInterval(slideInterval);
            } else {
                startSlideShow();
            }
        });
    }
    
    // Auto-advance testimonials (only if page is visible) - Disabled for grid layout
    // Grid layout shows all cards at once, so auto-advance is not needed
}

// Hero slider functions
function changeSlide(direction) {
    if (slides.length === 0) return;
    
    slides[currentSlideIndex].classList.remove('active');
    const dots = document.querySelectorAll('.dot');
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.remove('active');
    }
    
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    slides[currentSlideIndex].classList.add('active');
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
    }
}

function currentSlide(index) {
    if (slides.length === 0) return;
    
    slides[currentSlideIndex].classList.remove('active');
    const dots = document.querySelectorAll('.dot');
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.remove('active');
    }
    
    currentSlideIndex = index - 1;
    slides[currentSlideIndex].classList.add('active');
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
    }
}

// Testimonial slider functions - Updated for grid layout
function changeTestimonial(direction) {
    const cards = document.querySelectorAll('.testimonial-card');
    if (cards.length === 0) return;
    
    // For grid layout, we'll scroll horizontally through the cards
    const grid = document.querySelector('.testimonials-grid');
    if (!grid) return;
    
    // Get current scroll position
    const scrollAmount = grid.offsetWidth;
    const currentScroll = grid.scrollLeft;
    
    // Calculate new scroll position
    const newScroll = direction > 0 
        ? currentScroll + scrollAmount 
        : currentScroll - scrollAmount;
    
    // Smooth scroll
    grid.scrollTo({
        left: newScroll,
        behavior: 'smooth'
    });
}

// Order product on WhatsApp
function orderOnWhatsApp(productId, event) {
    event.stopPropagation(); // Prevent card click event
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Build WhatsApp message for single product order
    let message = `Hello! I would like to order:\n\n`;
    message += `*${product.name}*\n`;
    message += `Price: Rs. ${product.price.toLocaleString()}\n`;
    message += `Description: ${product.description}\n\n`;
    message += `Please provide more details about availability and delivery.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923279571037?text=${encodedMessage}`, '_blank');
}

// Load products to the page
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.cursor = 'pointer';
        productCard.onclick = () => {
            window.location.href = `?product=${product.id}`;
        };
        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${product.image}');">
                <div class="product-discount-badge">${product.discount}% OFF</div>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price-wrapper">
                    <div class="product-price">Rs. ${product.price.toLocaleString()}</div>
                    <div class="product-sales-count">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                        </svg>
                        <span>${product.salesCount.toLocaleString()} sold</span>
                    </div>
                </div>
                <div class="product-actions">
                    <button class="order-whatsapp-btn" onclick="orderOnWhatsApp(${product.id}, event)">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Order on WhatsApp
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Load product detail page
function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('product'));
    
    if (!productId) {
        // Show main page
        document.querySelector('main').innerHTML = getMainPageContent();
        loadProducts();
        loadCart();
        updateCartUI();
        initSliders();
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    // Show product detail page
    document.querySelector('main').innerHTML = getProductDetailHTML(product);
    initProductDetail(product);
    loadCart();
    updateCartUI();
}

// Get main page content
function getMainPageContent() {
    return `
        <section id="home" class="hero">
            <div class="hero-slider">
                <div class="slide active" style="background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('static/h1.png');">
                    <div class="slide-content">
                        <h1 class="hero-title">Premium Himalayan Shilajit</h1>
                        <p class="hero-description">Pure, authentic shilajit sourced from the pristine mountains of the Himalayas.</p>
                        <a href="#products" class="hero-cta">Shop Now</a>
                    </div>
                </div>
                <div class="slide" style="background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('static/h2.png');">
                    <div class="slide-content">
                        <h1 class="hero-title">100% Natural & Lab Tested</h1>
                        <p class="hero-description">Harvested from the highest peaks, containing over 85 minerals and trace elements.</p>
                        <a href="#products" class="hero-cta">Explore Products</a>
                    </div>
                </div>
                <div class="slide" style="background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('static/h3.png');">
                    <div class="slide-content">
                        <h1 class="hero-title">Certified Pure Excellence</h1>
                        <p class="hero-description">Every batch is rigorously tested for purity and potency.</p>
                        <a href="#products" class="hero-cta">Shop Now</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="products" class="products">
            <div class="container">
                <div class="section-header">
                    <span class="section-label">Our Collection</span>
                    <h2 class="section-title">Premium Products</h2>
                    <p class="section-description">Discover our range of authentic Himalayan shilajit products</p>
                </div>
                <div class="products-grid" id="productsGrid">
                    <!-- Products will be loaded here -->
                </div>
            </div>
        </section>

        <section class="certification">
            <div class="container">
                <div class="section-header">
                    <span class="section-label">Quality Assurance</span>
                    <h2 class="section-title">Certified & Lab Tested</h2>
                    <p class="section-description">Every batch undergoes rigorous testing to ensure the highest standards</p>
                </div>
                <div class="certification-content">
                    <div class="certification-text">
                        <div class="cert-intro">
                            <h3>Trusted Quality</h3>
                            <p>Our shilajit products undergo comprehensive testing and certification to ensure the highest standards of purity, quality, and authenticity. Every batch is verified by independent laboratories before reaching you.</p>
                        </div>
                        <div class="certification-features">
                            <div class="cert-feature">
                                <div class="cert-icon-wrapper">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                    </svg>
                                </div>
                                <div class="cert-feature-content">
                                    <h4>100% Authentic</h4>
                                    <p>Verified Himalayan source with complete traceability</p>
                                </div>
                            </div>
                            <div class="cert-feature">
                                <div class="cert-icon-wrapper">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                        <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                                    </svg>
                                </div>
                                <div class="cert-feature-content">
                                    <h4>Lab Tested</h4>
                                    <p>Rigorous testing for purity, potency, and safety</p>
                                </div>
                            </div>
                            <div class="cert-feature">
                                <div class="cert-icon-wrapper">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                    </svg>
                                </div>
                                <div class="cert-feature-content">
                                    <h4>Certified Pure</h4>
                                    <p>Meets international quality and safety standards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="certification-image-wrapper">
                        <div class="certification-image">
                            <div class="cert-frame">
                                <img src="static/certified.webp" alt="Certification Certificate" class="cert-img">
                                <div class="cert-glow"></div>
                            </div>
                            <div class="cert-badge">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>Certified</span>
                            </div>
                            <div class="cert-decoration cert-decoration-1"></div>
                            <div class="cert-decoration cert-decoration-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="testimonials">
            <div class="container">
                <div class="testimonials-header">
                    <span class="testimonials-label">TESTIMONIALS</span>
                    <h2 class="testimonials-title">What Our Customers Say</h2>
                    <p class="testimonials-description">Discover how K2 Shilajit has transformed the lives of our customers. Read authentic reviews from people who have experienced the incredible benefits of our premium Himalayan shilajit.</p>
                </div>
                <div class="testimonials-grid">
                    <div class="testimonial-card">
                        <div class="testimonial-avatar">
                            <img src="https://i.pravatar.cc/150?img=12" alt="Mike Torello">
                        </div>
                        <p class="testimonial-quote">"I've been taking K2 Shilajit for 4 months now and the results are incredible. My energy levels have skyrocketed, and I feel more focused throughout the day. The quality is unmatched - you can tell it's the real deal from the mountains. Highly recommend to anyone looking for natural energy and vitality!"</p>
                        <h4 class="testimonial-name">Mike Torello</h4>
                        <p class="testimonial-title">Executive Engineer</p>
                    </div>
                    <div class="testimonial-card">
                        <div class="testimonial-avatar">
                            <img src="https://i.pravatar.cc/150?img=33" alt="Rick Wright">
                        </div>
                        <p class="testimonial-quote">"After trying multiple shilajit brands, K2 Shilajit stands out as the purest and most effective. I take it daily and have noticed significant improvements in my stamina and overall well-being. The customer service is excellent, and shipping was fast. This is now a permanent part of my wellness routine."</p>
                        <h4 class="testimonial-name">Rick Wright</h4>
                        <p class="testimonial-title">Executive Engineer</p>
                    </div>
                    <div class="testimonial-card">
                        <div class="testimonial-avatar">
                            <img src="https://i.pravatar.cc/150?img=47" alt="Devon Miles">
                        </div>
                        <p class="testimonial-quote">"K2 Shilajit has been a game-changer for me. I was skeptical at first, but after 2 months of consistent use, I can feel the difference. My recovery time after workouts has improved, and I wake up feeling more refreshed. The authenticity and purity are evident. Worth every penny!"</p>
                        <h4 class="testimonial-name">Devon Miles</h4>
                        <p class="testimonial-title">Executive Engineer</p>
                    </div>
                </div>
                <div class="testimonial-nav">
                    <button class="testimonial-nav-btn" onclick="changeTestimonial(-1)" aria-label="Previous testimonial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M15 18l-6-6 6-6"/>
                        </svg>
                    </button>
                    <button class="testimonial-nav-btn" onclick="changeTestimonial(1)" aria-label="Next testimonial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 18l6-6-6-6"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>

        <section id="about" class="about">
            <div class="container">
                <div class="about-header">
                    <span class="about-label">ABOUT US</span>
                    <h2 class="about-title">K2 Shilajit</h2>
                    <p class="about-subtitle">Premium Himalayan shilajit sourced directly from the mountains. 100% pure, lab tested, and certified for quality and authenticity.</p>
                </div>
                <div class="about-grid">
                    <div class="about-main">
                        <div class="about-text-block">
                            <h3>Our Story</h3>
                            <p>We source the finest quality shilajit directly from the pristine Himalayan mountains. Every batch is carefully harvested at elevations above 10,000 feet and rigorously tested to ensure the highest standards of purity and potency.</p>
                            <p>Our commitment is to deliver authentic, premium-grade shilajit that preserves all natural minerals and trace elements. We work directly with local harvesters to maintain quality control from source to shelf.</p>
                        </div>
                        <div class="about-stats">
                            <div class="stat-item">
                                <div class="stat-number">10,000+</div>
                                <div class="stat-label">Elevation (ft)</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">85+</div>
                                <div class="stat-label">Minerals</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">100%</div>
                                <div class="stat-label">Pure & Natural</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">Lab</div>
                                <div class="stat-label">Tested</div>
                            </div>
                        </div>
                    </div>
                    <div class="about-features">
                        <div class="about-feature">
                            <div class="about-feature-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <h4>100% Pure</h4>
                            <p>Authentic Himalayan source with complete traceability</p>
                        </div>
                        <div class="about-feature">
                            <div class="about-feature-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                                </svg>
                            </div>
                            <h4>Lab Tested</h4>
                            <p>Rigorous testing for purity, potency, and safety</p>
                        </div>
                        <div class="about-feature">
                            <div class="about-feature-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                </svg>
                            </div>
                            <h4>Premium Grade</h4>
                            <p>Highest quality standards and certifications</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Generate stars HTML based on rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (hasHalfStar && fullStars < 5) {
        stars += '☆';
    }
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
        stars += '☆';
    }
    return stars;
}

// Get product detail HTML
function getProductDetailHTML(product) {
    const reviews = generateReviews(product.name);
    return `
        <section class="product-detail">
            <div class="container">
                <a href="?" class="back-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    <span>Back to Products</span>
                </a>
                
                <div class="product-detail-content">
                    <div class="product-images">
                        <div class="main-image">
                            <img id="mainProductImage" src="${product.images[0]}" alt="${product.name}">
                        </div>
                        <div class="image-thumbnails">
                            ${product.images.map((img, index) => `
                                <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeProductImage('${img}')">
                                    <img src="${img}" alt="${product.name}">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="product-info-detail">
                        <span class="product-badge">Premium Quality</span>
                        <h1 class="product-title">${product.name}</h1>
                        <div class="product-rating-sales">
                            <div class="product-rating">
                                <span class="stars">${generateStars(product.rating)}</span>
                                <span class="rating-value">${product.rating.toFixed(1)}</span>
                                <span class="rating-text">(${product.reviewsCount} reviews)</span>
                            </div>
                            <div class="product-sales">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                                </svg>
                                <span>${product.salesCount.toLocaleString()} sold</span>
                            </div>
                        </div>
                        <div class="product-price-large">Rs. ${product.price.toLocaleString()}</div>
                        <p class="product-full-description">${product.fullDescription}</p>
                        
                        <div class="product-specs">
                            <div class="spec-item">
                                <strong>Size:</strong> ${product.size}
                            </div>
                            <div class="spec-item">
                                <strong>Origin:</strong> ${product.origin}
                            </div>
                        </div>
                        
                        <div class="product-benefits">
                            <h3>Key Benefits</h3>
                            <ul>
                                ${product.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="product-actions-detail">
                            <div class="quantity-selector">
                                <button class="qty-btn" onclick="changeQuantity(-1)">−</button>
                                <span id="productQuantity">1</span>
                                <button class="qty-btn" onclick="changeQuantity(1)">+</button>
                            </div>
                            <button class="add-to-cart-large" onclick="addToCartFromDetail(${product.id})">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4m7 14h4a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4M7 3v18M17 3v18"/>
                                </svg>
                                Add to Cart
                            </button>
                        </div>
                        
                        <div class="product-features">
                            <div class="feature-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                                </svg>
                                <div>
                                    <strong>Free Shipping</strong>
                                    <p>On orders over $50</p>
                                </div>
                            </div>
                            <div class="feature-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <div>
                                    <strong>30-Day Guarantee</strong>
                                    <p>Money back guarantee</p>
                                </div>
                            </div>
                            <div class="feature-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                </svg>
                                <div>
                                    <strong>Lab Tested</strong>
                                    <p>Certified purity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="product-reviews-section">
                    <h2 class="reviews-title">Customer Reviews & Ratings</h2>
                    <div class="reviews-summary">
                        <div class="overall-rating">
                            <div class="rating-big">${product.rating.toFixed(1)}</div>
                            <div class="stars-big">${generateStars(product.rating)}</div>
                            <div class="rating-details">Based on ${product.reviewsCount} reviews</div>
                        </div>
                        <div class="rating-breakdown">
                            <div class="rating-bar">
                                <span>5★</span>
                                <div class="bar-container">
                                    <div class="bar-fill" style="width: ${Math.floor((reviews.filter(r => r.rating === 5).length / reviews.length) * 100)}%"></div>
                                </div>
                                <span>${reviews.filter(r => r.rating === 5).length}</span>
                            </div>
                            <div class="rating-bar">
                                <span>4★</span>
                                <div class="bar-container">
                                    <div class="bar-fill" style="width: ${Math.floor((reviews.filter(r => r.rating === 4).length / reviews.length) * 100)}%"></div>
                                </div>
                                <span>${reviews.filter(r => r.rating === 4).length}</span>
                            </div>
                            <div class="rating-bar">
                                <span>3★</span>
                                <div class="bar-container">
                                    <div class="bar-fill" style="width: ${Math.floor((reviews.filter(r => r.rating === 3).length / reviews.length) * 100)}%"></div>
                                </div>
                                <span>${reviews.filter(r => r.rating === 3).length}</span>
                            </div>
                            <div class="rating-bar">
                                <span>2★</span>
                                <div class="bar-container">
                                    <div class="bar-fill" style="width: ${Math.floor((reviews.filter(r => r.rating === 2).length / reviews.length) * 100)}%"></div>
                                </div>
                                <span>${reviews.filter(r => r.rating === 2).length}</span>
                            </div>
                            <div class="rating-bar">
                                <span>1★</span>
                                <div class="bar-container">
                                    <div class="bar-fill" style="width: ${Math.floor((reviews.filter(r => r.rating === 1).length / reviews.length) * 100)}%"></div>
                                </div>
                                <span>${reviews.filter(r => r.rating === 1).length}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="reviews-list">
                        ${reviews.map(review => `
                            <div class="review-item">
                                <div class="review-header">
                                    <div class="reviewer-info">
                                        <div class="reviewer-avatar">${review.name.charAt(0)}</div>
                                        <div>
                                            <div class="reviewer-name">${review.name}</div>
                                            <div class="reviewer-location">${review.location} • ${review.date}</div>
                                        </div>
                                    </div>
                                    <div class="review-rating">
                                        ${generateStars(review.rating)}
                                    </div>
                                </div>
                                <div class="review-text">${review.text}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </section>
        
        <section class="related-products">
            <div class="container">
                <h2 class="section-title">You May Also Like</h2>
                <div class="products-grid" id="relatedProductsGrid">
                    <!-- Related products will be loaded here -->
                </div>
            </div>
        </section>
    `;
}

// Initialize product detail page
function initProductDetail(product) {
    // Load related products
    const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);
    const relatedGrid = document.getElementById('relatedProductsGrid');
    if (relatedGrid) {
        relatedGrid.innerHTML = '';
        relatedProducts.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.style.cursor = 'pointer';
            card.onclick = () => {
                window.location.href = `?product=${prod.id}`;
            };
            card.innerHTML = `
                <div class="product-image" style="background-image: url('${prod.image}');">
                    <div class="product-discount-badge">${prod.discount}% OFF</div>
                </div>
                <div class="product-info">
                    <div class="product-name">${prod.name}</div>
                    <div class="product-description">${prod.description}</div>
                    <div class="product-price-wrapper">
                        <div class="product-price">Rs. ${prod.price.toLocaleString()}</div>
                        <div class="product-sales-count">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                            </svg>
                            <span>${prod.salesCount.toLocaleString()} sold</span>
                        </div>
                    </div>
                    <div class="product-actions">
                        <button class="order-whatsapp-btn" onclick="orderOnWhatsApp(${prod.id}, event)">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Order on WhatsApp
                        </button>
                    </div>
                </div>
            `;
            relatedGrid.appendChild(card);
        });
    }
}

// Change product image
function changeProductImage(imageSrc) {
    document.getElementById('mainProductImage').src = imageSrc;
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.querySelector('img').src === imageSrc) {
            thumb.classList.add('active');
        }
    });
}

// Product quantity
let productQuantity = 1;

function changeQuantity(change) {
    productQuantity = Math.max(1, productQuantity + change);
    document.getElementById('productQuantity').textContent = productQuantity;
}

// Add to cart from detail page with visual feedback
function addToCartFromDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Get quantity
    const quantity = productQuantity || 1;
    
    // Visual feedback
    const button = event?.target?.closest('.add-to-cart-large');
    if (button) {
        button.style.transform = 'scale(0.98)';
        setTimeout(() => {
            button.style.transform = '';
        }, 200);
    }

    // Show notification
    showNotification(`${quantity}x ${product.name} added! Redirecting to WhatsApp...`, 'success', 2000);

    // Small delay for better UX
    setTimeout(() => {
        const message = encodeURIComponent(`Hello! I'm interested in purchasing:\n\n*${product.name}*\nQuantity: ${quantity}\nPrice: Rs. ${product.price.toLocaleString()} each\nTotal: Rs. ${(product.price * quantity).toLocaleString()}\n\n${product.fullDescription || product.description}\n\nPlease let me know about availability and shipping.`);
        window.open(`https://wa.me/923279571037?text=${message}`, '_blank');
    }, 500);
}

// Add product to cart with visual feedback
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Visual feedback - button animation
    const button = event?.target || document.querySelector(`button[onclick*="${productId}"]`);
    if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 200);
    }

    // Show notification
    showNotification(`${product.name} added! Redirecting to WhatsApp...`, 'success', 2000);

    // Small delay for better UX
    setTimeout(() => {
        const message = encodeURIComponent(`Hello! I'm interested in purchasing:\n\n*${product.name}*\nPrice: Rs. ${product.price.toLocaleString()}\n\n${product.description}\n\nPlease let me know about availability and shipping.`);
        window.open(`https://wa.me/923279571037?text=${message}`, '_blank');
    }, 500);
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('show');
}

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
}

// Update cart UI with animations
function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    // Update cart count with animation
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
        if (totalItems > 0) {
            cartCount.classList.add('animate');
            setTimeout(() => cartCount.classList.remove('animate'), 500);
        }
    }

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M9 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4m7 14h4a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4M7 3v18M17 3v18"/>
                </svg>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">Rs. ${item.price.toLocaleString()}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toLocaleString();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('k2shilajit_cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('k2shilajit_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const checkoutModal = document.getElementById('checkoutModal');
    const orderItems = document.getElementById('orderItems');
    const orderTotal = document.getElementById('orderTotal');

    // Display order items
    orderItems.innerHTML = '';
    cart.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>Rs. ${(item.price * item.quantity).toLocaleString()}</span>
        `;
        orderItems.appendChild(orderItem);
    });

    // Display total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    orderTotal.textContent = total.toLocaleString();

    checkoutModal.classList.add('show');
    toggleCart(); // Close cart sidebar
}

// Close checkout modal
function closeCheckout() {
    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.classList.remove('show');
}

// Process order
function processOrder(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        zip: document.getElementById('zip').value,
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };

    // Build WhatsApp message with order details
    let message = `Hello! I would like to place an order:\n\n`;
    message += `*Customer Information:*\n`;
    message += `Name: ${formData.name}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Address: ${formData.address}\n`;
    message += `City: ${formData.city}\n`;
    message += `ZIP Code: ${formData.zip}\n\n`;
    message += `*Order Details:*\n\n`;
    
    cart.forEach(item => {
        message += `*${item.name}*\n`;
        message += `Quantity: ${item.quantity}\n`;
        message += `Price: Rs. ${item.price.toLocaleString()} each\n`;
        message += `Subtotal: Rs. ${(item.price * item.quantity).toLocaleString()}\n\n`;
    });
    
    message += `*Total: Rs. ${formData.total.toLocaleString()}*\n\n`;
    message += `Please confirm my order and provide payment details.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923279571037?text=${encodedMessage}`, '_blank');
    
    // Close checkout modal
    closeCheckout();
    
    // Clear cart after redirecting
    setTimeout(() => {
        cart = [];
        saveCart();
        updateCartUI();
    }, 100);
}

// Reset store after order
function resetStore() {
    closeCheckout();
    document.getElementById('checkoutForm').reset();
    location.reload();
}

// Newsletter subscription with validation
function subscribeNewsletter(event) {
    event.preventDefault();
    const form = event.target;
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address.', 'error');
        emailInput.focus();
        emailInput.style.borderColor = '#ef4444';
        setTimeout(() => {
            emailInput.style.borderColor = '';
        }, 3000);
        return;
    }
    
    // In a real application, you would send this to a server
    console.log('Newsletter subscription:', email);
    showNotification('Thank you for subscribing to our newsletter! We\'ll be in touch soon.', 'success');
    form.reset();
}

// Show page modal (for footer links)
function showPage(pageName) {
    const pageContent = {
        'contact': {
            title: 'Contact Us',
            content: `
                <h2>Contact K2 Shilajit</h2>
                <p>Get in touch with us - we're here to help!</p>
                <div class="contact-details">
                    <div class="contact-item">
                        <strong>📧 Email:</strong>
                        <p>info@k2shilajit.com</p>
                    </div>
                    <div class="contact-item">
                        <strong>📱 Phone:</strong>
                        <p>+92 327 9571037</p>
                    </div>
                    <div class="contact-item">
                        <strong>💬 WhatsApp:</strong>
                        <p><a href="https://wa.me/923279571037" target="_blank">0327 9571037</a></p>
                    </div>
                    <div class="contact-item">
                        <strong>🕐 Business Hours:</strong>
                        <p>Monday - Saturday: 10:00 AM - 8:00 PM (PKT)</p>
                        <p>Sunday: Closed</p>
                    </div>
                    <div class="contact-item">
                        <strong>📍 Location:</strong>
                        <p>Pakistan</p>
                    </div>
                </div>
                <p>We typically respond within 24 hours.</p>
            `
        },
        'shipping': {
            title: 'Shipping & Returns',
            content: `
                <h2>Shipping & Returns Policy</h2>
                <h3>Shipping Policy</h3>
                <ul>
                    <li><strong>Delivery Time:</strong> Typically 3-7 business days</li>
                    <li><strong>Shipping Charges:</strong> Rs. 300-500 across Pakistan (depends on city)</li>
                    <li><strong>Free Shipping:</strong> Free shipping on orders above Rs. 10,000</li>
                    <li><strong>Cash on Delivery:</strong> Available - Additional Rs. 200 charge</li>
                    <li><strong>Tracking:</strong> All orders can be tracked</li>
                </ul>
                <h3>Returns Policy</h3>
                <ul>
                    <li><strong>Return Period:</strong> 7-day return policy</li>
                    <li><strong>Condition:</strong> Products must be unused and in original packaging</li>
                    <li><strong>Refund:</strong> Refund processed within 5-7 business days after return approval</li>
                    <li><strong>Exchange:</strong> Immediate replacement for defective products</li>
                </ul>
            `
        },
        'faq': {
            title: 'Frequently Asked Questions',
            content: `
                <h2>Frequently Asked Questions (FAQ)</h2>
                <div class="faq-item">
                    <h3>What is Shilajit?</h3>
                    <p>Shilajit is a natural mineral resin harvested from the Himalayan mountains. It contains over 85 minerals and trace elements.</p>
                </div>
                <div class="faq-item">
                    <h3>How to use Shilajit?</h3>
                    <p>Resin: A rice-sized piece in the morning on empty stomach with water or milk. Powder: Mix one teaspoon in water or tea. Capsules: 1-2 capsules per day.</p>
                </div>
                <div class="faq-item">
                    <h3>Is Shilajit safe?</h3>
                    <p>Yes, our shilajit is 100% pure and lab tested in Pakistan. However, pregnant or breastfeeding women should consult a doctor.</p>
                </div>
                <div class="faq-item">
                    <h3>How long does shipping take?</h3>
                    <p>Typically 3-7 business days, depending on the city.</p>
                </div>
                <div class="faq-item">
                    <h3>Do you offer Cash on Delivery?</h3>
                    <p>Yes, we offer Cash on Delivery across Pakistan.</p>
                </div>
                <div class="faq-item">
                    <h3>Can I return my order?</h3>
                    <p>Yes, returns are possible within 7 days if the product is unused.</p>
                </div>
            `
        },
        'privacy': {
            title: 'Privacy Policy',
            content: `
                <h2>Privacy Policy</h2>
                <p><strong>Last Updated:</strong> 2024</p>
                <h3>Use of Personal Information</h3>
                <p>We use your personal information (name, email, phone number, address) only to process orders and contact you.</p>
                <h3>Data Security</h3>
                <p>We store your information securely and do not share it with any third parties.</p>
                <h3>Cookies</h3>
                <p>We use cookies to improve website performance.</p>
                <h3>Your Rights</h3>
                <p>You have the right to access, modify, or delete your information at any time.</p>
            `
        },
        'terms': {
            title: 'Terms & Conditions',
            content: `
                <h2>Terms & Conditions</h2>
                <h3>Terms of Use</h3>
                <p>By using the K2 Shilajit website, you agree to these terms and conditions.</p>
                <h3>Products</h3>
                <ul>
                    <li>All products are 100% pure and authentic</li>
                    <li>We strive to keep product images and descriptions accurate</li>
                    <li>Prices may change with prior notice</li>
                </ul>
                <h3>Orders</h3>
                <ul>
                    <li>All orders are subject to availability</li>
                    <li>We ship after order confirmation</li>
                    <li>Immediate replacement for defective products</li>
                </ul>
                <h3>Payment</h3>
                <ul>
                    <li>Payment is required for order confirmation</li>
                    <li>Cash on Delivery is available</li>
                    <li>Online payments are processed securely</li>
                </ul>
            `
        },
        'refund': {
            title: 'Refund Policy',
            content: `
                <h2>Refund Policy</h2>
                <h3>Return Conditions</h3>
                <ul>
                    <li><strong>Time Limit:</strong> Return request within 7 days</li>
                    <li><strong>Condition:</strong> Products must be unused and in original packaging</li>
                    <li><strong>Shipping Charges:</strong> Return shipping cost is customer's responsibility</li>
                </ul>
                <h3>Return Process</h3>
                <ol>
                    <li>Contact us: info@k2shilajit.com or WhatsApp</li>
                    <li>State the reason for return</li>
                    <li>Pack the product securely</li>
                    <li>We will refund after return confirmation</li>
                </ol>
                <h3>Refund Processing</h3>
                <ul>
                    <li>Refund processed within 5-7 business days after return approval</li>
                    <li>Refund will be made through the same payment method used</li>
                    <li>Bank transfer for Cash on Delivery orders</li>
                </ul>
            `
        },
        'disclaimer': {
            title: 'Disclaimer',
            content: `
                <h2>Disclaimer</h2>
                <h3>Medical Advice</h3>
                <p>These products are not a substitute for medical advice. Consult your doctor before use if you have any health conditions or are taking medications.</p>
                <h3>Usage</h3>
                <p>Use of shilajit is at your own risk. We are not responsible for any side effects or health issues.</p>
                <h3>Quality</h3>
                <p>We strive to ensure purity and quality of our products, but results may vary.</p>
                <h3>Liability</h3>
                <p>K2 Shilajit is not liable for any damage, injury, or loss that may result from product use.</p>
            `
        },
        'blog': {
            title: 'Blog',
            content: `
                <h2>K2 Shilajit Blog</h2>
                <p>Latest information about shilajit, health tips, and more!</p>
                <div class="blog-posts">
                    <div class="blog-post">
                        <h3>Health Benefits of Shilajit</h3>
                        <p>Shilajit is a powerful natural supplement that can help improve energy, immunity, and overall health...</p>
                    </div>
                    <div class="blog-post">
                        <h3>How to Use Shilajit</h3>
                        <p>Learn the proper way to use shilajit to maximize its benefits...</p>
                    </div>
                    <div class="blog-post">
                        <h3>Direct from the Himalayas</h3>
                        <p>Our shilajit is sourced directly from the Himalayan mountains, ensuring purity and quality...</p>
                    </div>
                </div>
                <p><em>Blog posts coming soon!</em></p>
            `
        },
        'testimonials': {
            title: 'Customer Testimonials',
            content: `
                <h2>Customer Testimonials</h2>
                <p>What our customers say</p>
                <div class="testimonial-list">
                    <div class="testimonial-item">
                        <div class="testimonial-stars">★★★★★</div>
                        <p>"Best quality! I've been using K2 Shilajit for 3 months and feel a significant boost in my energy levels."</p>
                        <p><strong>- Ahmed Ali, Lahore</strong></p>
                    </div>
                    <div class="testimonial-item">
                        <div class="testimonial-stars">★★★★★</div>
                        <p>"The purest shilajit I've ever tried. You can really feel the difference in quality!"</p>
                        <p><strong>- Fatima Khan, Karachi</strong></p>
                    </div>
                    <div class="testimonial-item">
                        <div class="testimonial-stars">★★★★★</div>
                        <p>"Fast shipping and excellent customer service. The product is authentic and exactly as described. Will order again!"</p>
                        <p><strong>- Muhammad Hassan, Islamabad</strong></p>
                    </div>
                </div>
            `
        }
    };

    const page = pageContent[pageName];
    if (!page) {
        showNotification('Page not found!');
        return;
    }

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'page-modal';
    modal.innerHTML = `
        <div class="page-modal-content">
            <span class="close-page-modal" onclick="closePageModal()">&times;</span>
            ${page.content}
        </div>
    `;
    document.body.appendChild(modal);
    modal.classList.add('show');
}

// Close page modal
function closePageModal() {
    const modal = document.querySelector('.page-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// Enhanced Toast Notification System
function showNotification(message, type = 'success', duration = 4000) {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(toast => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    });

    // Create notification element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: `<svg class="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
        error: `<svg class="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
        info: `<svg class="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
    };
    
    const titles = {
        success: 'Success!',
        error: 'Error!',
        info: 'Info'
    };
    
    toast.innerHTML = `
        ${icons[type] || icons.info}
        <div class="toast-content">
            <div class="toast-title">${titles[type] || 'Notification'}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="this.closest('.toast').classList.add('fade-out'); setTimeout(() => this.closest('.toast').remove(), 300);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
        </button>
    `;
    
    document.body.appendChild(toast);

    // Adjust position for multiple toasts
    const allToasts = document.querySelectorAll('.toast');
    allToasts.forEach((t, index) => {
        if (index > 0) {
            t.style.top = `${100 + (index * 120)}px`;
        }
    });

    // Remove after duration
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
                // Reposition remaining toasts
                const remainingToasts = document.querySelectorAll('.toast');
                remainingToasts.forEach((t, index) => {
                    t.style.top = `${100 + (index * 120)}px`;
                });
            }
        }, 300);
    }, duration);
}

// Loading overlay functions
function showLoading() {
    let overlay = document.querySelector('.loading-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'loading-overlay';
        overlay.innerHTML = '<div class="spinner"></div>';
        document.body.appendChild(overlay);
    }
    overlay.classList.add('active');
}

function hideLoading() {
    const overlay = document.querySelector('.loading-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.remove();
            }
        }, 300);
    }
}

// Note: Toast notification styles are now in styles.css - no need for inline styles

