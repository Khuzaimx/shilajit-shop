// Product data
const products = [
    {
        id: 1,
        name: "Premium Shilajit Resin",
        description: "Pure Himalayan shilajit resin, 100% authentic and tested for quality. Sourced from Pakistan's border region.",
        fullDescription: "Our Premium Shilajit Resin is harvested from the pristine Himalayan mountains near Pakistan's border at elevations above 10,000 feet. This raw, unprocessed resin contains over 85 minerals and trace elements in their natural form. Each batch is carefully tested for purity and authenticity in Pakistan.",
        price: 13999,
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
        ],
        benefits: [
            "85+ minerals and trace elements",
            "100% pure and unprocessed",
            "Lab tested in Pakistan",
            "Direct from Himalayan source",
            "Natural energy boost"
        ],
        size: "50 grams",
        origin: "Himalayan Mountains, Pakistan"
    },
    {
        id: 2,
        name: "Shilajit Powder",
        description: "Finely ground shilajit powder, easy to mix and consume. Perfect for daily supplementation.",
        fullDescription: "Our Shilajit Powder is made from premium resin that has been carefully ground into a fine powder for easy consumption. Perfect for mixing into tea, milk, or water. Maintains all the natural benefits of raw shilajit in a convenient form.",
        price: 10999,
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
        ],
        benefits: [
            "Easy to mix and consume",
            "Same purity as resin form",
            "Convenient daily supplement",
            "Fast absorption",
            "No additives or fillers"
        ],
        size: "100 grams",
        origin: "Himalayan Mountains, Pakistan"
    },
    {
        id: 3,
        name: "Shilajit Capsules",
        description: "Convenient shilajit capsules for daily supplementation. No taste, easy to swallow.",
        fullDescription: "Our Shilajit Capsules offer the perfect solution for those who want the benefits of shilajit without the taste. Each capsule contains pure shilajit powder in a vegetarian capsule. Perfect for on-the-go supplementation.",
        price: 12499,
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
        ],
        benefits: [
            "No taste, easy to swallow",
            "Pre-measured dosage",
            "Vegetarian capsules",
            "Travel-friendly",
            "Consistent potency"
        ],
        size: "60 capsules (500mg each)",
        origin: "Himalayan Mountains, Pakistan"
    },
    {
        id: 4,
        name: "Shilajit Extract",
        description: "Concentrated shilajit extract with enhanced bioavailability. Maximum potency in smaller doses.",
        fullDescription: "Our Shilajit Extract is a highly concentrated form that has been carefully processed to enhance bioavailability while maintaining all natural compounds. This premium extract delivers maximum benefits in smaller doses.",
        price: 16999,
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
        ],
        benefits: [
            "Enhanced bioavailability",
            "Concentrated formula",
            "Maximum potency",
            "Smaller serving size",
            "Premium quality"
        ],
        size: "30ml",
        origin: "Himalayan Mountains, Pakistan"
    },
    {
        id: 5,
        name: "Shilajit Combo Pack",
        description: "Complete shilajit collection - resin, powder, and capsules. Best value package for families.",
        fullDescription: "Our Combo Pack includes all three forms of our premium shilajit: resin, powder, and capsules. Perfect for trying different forms or for families. This value pack offers the best of all worlds.",
        price: 35999,
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
        ],
        benefits: [
            "All three forms included",
            "Best value package",
            "Try different formats",
            "Perfect for families",
            "Save 15% vs buying separately"
        ],
        size: "Resin 25g + Powder 50g + 30 Capsules",
        origin: "Himalayan Mountains, Pakistan"
    },
    {
        id: 6,
        name: "Premium Shilajit Gift Set",
        description: "Luxury gift set perfect for gifting or personal use. Beautifully packaged with premium products.",
        fullDescription: "Our Premium Gift Set is beautifully packaged and includes our finest shilajit products. Perfect for gifting to loved ones or treating yourself. Includes premium resin, extract, and a beautiful wooden spoon.",
        price: 24999,
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80",
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
        ],
        benefits: [
            "Beautiful gift packaging",
            "Premium quality products",
            "Includes wooden spoon",
            "Perfect for gifting",
            "Luxury presentation"
        ],
        size: "Resin 30g + Extract 20ml + Accessories",
        origin: "Himalayan Mountains, Pakistan"
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
});

// Initialize sliders
function initSliders() {
    slides = document.querySelectorAll('.slide');
    testimonials = document.querySelectorAll('.testimonial-slide');
    
    // Auto-advance hero slider
    if (slides.length > 0) {
        setInterval(() => {
            changeSlide(1);
        }, 5000);
    }
    
    // Auto-advance testimonials
    if (testimonials.length > 0) {
        setInterval(() => {
            changeTestimonial(1);
        }, 6000);
    }
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

// Testimonial slider functions
function changeTestimonial(direction) {
    if (testimonials.length === 0) return;
    
    testimonials[currentTestimonialIndex].classList.remove('active');
    const dots = document.querySelectorAll('.testimonial-dot');
    if (dots[currentTestimonialIndex]) {
        dots[currentTestimonialIndex].classList.remove('active');
    }
    
    currentTestimonialIndex += direction;
    
    if (currentTestimonialIndex >= testimonials.length) {
        currentTestimonialIndex = 0;
    } else if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = testimonials.length - 1;
    }
    
    testimonials[currentTestimonialIndex].classList.add('active');
    if (dots[currentTestimonialIndex]) {
        dots[currentTestimonialIndex].classList.add('active');
    }
}

function currentTestimonial(index) {
    if (testimonials.length === 0) return;
    
    testimonials[currentTestimonialIndex].classList.remove('active');
    const dots = document.querySelectorAll('.testimonial-dot');
    if (dots[currentTestimonialIndex]) {
        dots[currentTestimonialIndex].classList.remove('active');
    }
    
    currentTestimonialIndex = index - 1;
    testimonials[currentTestimonialIndex].classList.add('active');
    if (dots[currentTestimonialIndex]) {
        dots[currentTestimonialIndex].classList.add('active');
    }
}

// Load products to the page
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${product.image}');">
                <div class="product-overlay">
                    <a href="?product=${product.id}" class="view-product-btn">View Details</a>
                </div>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">Rs. ${product.price.toLocaleString()}</div>
                <div class="product-actions">
                    <a href="?product=${product.id}" class="view-details-btn">View Details</a>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
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
                <div class="slide active" style="background-image: linear-gradient(rgba(45, 55, 72, 0.7), rgba(26, 32, 44, 0.7)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80');">
                    <div class="slide-content">
                        <span class="hero-badge">Premium Quality</span>
                        <h2 class="hero-title">Premium Himalayan<br><span class="gradient-text">Shilajit</span></h2>
                        <p class="hero-description">Pure, authentic shilajit sourced from the pristine mountains of the Himalayas. Experience the power of nature's most potent mineral resin.</p>
                        <a href="#products" class="hero-cta">
                            <span>Shop Now</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="slide" style="background-image: linear-gradient(rgba(45, 55, 72, 0.7), rgba(26, 32, 44, 0.7)), url('https://images.unsplash.com/photo-1464822759844-d150ad6d0cfa?w=1920&q=80');">
                    <div class="slide-content">
                        <span class="hero-badge">100% Natural</span>
                        <h2 class="hero-title">Nature's Ancient<br><span class="gradient-text">Treasure</span></h2>
                        <p class="hero-description">Harvested from the highest peaks, our shilajit contains over 85 minerals and trace elements essential for optimal health and vitality.</p>
                        <a href="#products" class="hero-cta">
                            <span>Explore Products</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="slide" style="background-image: linear-gradient(rgba(45, 55, 72, 0.7), rgba(26, 32, 44, 0.7)), url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80');">
                    <div class="slide-content">
                        <span class="hero-badge">Lab Tested</span>
                        <h2 class="hero-title">Certified Pure<br><span class="gradient-text">Excellence</span></h2>
                        <p class="hero-description">Every batch is rigorously tested for purity and potency. Trust in quality that meets the highest international standards.</p>
                        <a href="#products" class="hero-cta">
                            <span>Shop Now</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="slider-controls">
                <button class="slider-btn prev" onclick="changeSlide(-1)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                </button>
                <div class="slider-dots">
                    <span class="dot active" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span>
                </div>
                <button class="slider-btn next" onclick="changeSlide(1)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>
            </div>
            <div class="scroll-indicator">
                <div class="scroll-arrow"></div>
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
                <div class="section-header">
                    <span class="section-label">Testimonials</span>
                    <h2 class="section-title">What Our Customers Say</h2>
                </div>
                <div class="testimonials-slider">
                    <div class="testimonial-slide active">
                        <div class="testimonial-content">
                            <div class="testimonial-stars">★★★★★</div>
                            <p class="testimonial-text">"Amazing quality! I've been using K2 Shilajit for 3 months and feel a significant boost in my energy levels. Highly recommended!"</p>
                            <div class="testimonial-author">
                                <div class="author-avatar" style="background: linear-gradient(135deg, #8B7355 0%, #6B5B47 100%);"></div>
                                <div>
                                    <h4>Sarah Johnson</h4>
                                    <p>Verified Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-slide">
                        <div class="testimonial-content">
                            <div class="testimonial-stars">★★★★★</div>
                            <p class="testimonial-text">"The purest shilajit I've ever tried. You can really feel the difference in quality. Worth every penny!"</p>
                            <div class="testimonial-author">
                                <div class="author-avatar" style="background: linear-gradient(135deg, #7A6B5D 0%, #5D4E42 100%);"></div>
                                <div>
                                    <h4>Michael Chen</h4>
                                    <p>Verified Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-slide">
                        <div class="testimonial-content">
                            <div class="testimonial-stars">★★★★★</div>
                            <p class="testimonial-text">"Fast shipping and excellent customer service. The product is authentic and exactly as described. Will order again!"</p>
                            <div class="testimonial-author">
                                <div class="author-avatar" style="background: linear-gradient(135deg, #9B8B7A 0%, #7A6B5D 100%);"></div>
                                <div>
                                    <h4>Emily Rodriguez</h4>
                                    <p>Verified Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testimonial-controls">
                    <span class="testimonial-dot active" onclick="currentTestimonial(1)"></span>
                    <span class="testimonial-dot" onclick="currentTestimonial(2)"></span>
                    <span class="testimonial-dot" onclick="currentTestimonial(3)"></span>
                </div>
            </div>
        </section>

        <section id="about" class="about">
            <div class="container">
                <div class="about-content">
                    <div class="about-text">
                        <span class="section-label">About Us</span>
                        <h2 class="section-title">K2 Shilajit</h2>
                        <p>We source the finest quality shilajit directly from the Himalayan mountains. Our products are 100% pure, tested, and certified for quality and authenticity.</p>
                        <div class="about-features">
                            <div class="feature-item">
                                <div class="feature-icon">✓</div>
                                <div>
                                    <h4>100% Pure</h4>
                                    <p>Authentic Himalayan source</p>
                                </div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">✓</div>
                                <div>
                                    <h4>Lab Tested</h4>
                                    <p>Certified quality assurance</p>
                                </div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">✓</div>
                                <div>
                                    <h4>Premium Grade</h4>
                                    <p>Highest quality standards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Get product detail HTML
function getProductDetailHTML(product) {
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
                        <div class="product-rating">
                            <span class="stars">★★★★★</span>
                            <span class="rating-text">(4.9/5 - 127 reviews)</span>
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
            card.innerHTML = `
                <div class="product-image" style="background-image: url('${prod.image}');">
                    <div class="product-overlay">
                        <a href="?product=${prod.id}" class="view-product-btn">View Details</a>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-name">${prod.name}</div>
                    <div class="product-description">${prod.description}</div>
                    <div class="product-price">Rs. ${prod.price.toLocaleString()}</div>
                    <div class="product-actions">
                        <a href="?product=${prod.id}" class="view-details-btn">View Details</a>
                        <button class="add-to-cart" onclick="addToCart(${prod.id})">Add to Cart</button>
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

// Add to cart from detail page
function addToCartFromDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Get quantity
    const quantity = productQuantity || 1;
    
    // Redirect to WhatsApp with product information
    const message = encodeURIComponent(`Hello! I'm interested in purchasing:\n\n*${product.name}*\nQuantity: ${quantity}\nPrice: Rs. ${product.price.toLocaleString()} each\nTotal: Rs. ${(product.price * quantity).toLocaleString()}\n\n${product.fullDescription || product.description}\n\nPlease let me know about availability and shipping.`);
    window.open(`https://wa.me/923279571037?text=${message}`, '_blank');
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Redirect to WhatsApp with product information
    const message = encodeURIComponent(`Hello! I'm interested in purchasing:\n\n*${product.name}*\nPrice: Rs. ${product.price.toLocaleString()}\n\n${product.description}\n\nPlease let me know about availability and shipping.`);
    window.open(`https://wa.me/923279571037?text=${message}`, '_blank');
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

// Update cart UI
function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

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

// Newsletter subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    // In a real application, you would send this to a server
    console.log('Newsletter subscription:', email);
    showNotification('Thank you for subscribing to our newsletter!');
    event.target.reset();
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

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 3000;
        animation: slideIn 0.3s;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

