// Bee's Kitchen - Web Application Logic

// Complete Menu Data based on Physical Menu Card and User Request
const menuItems = [
    // Best Sellers
    {
        id: "bs-1",
        name: "Chicken Fried Rice",
        category: "chinese-specials",
        price: 180,
        image: "assets/chinese_specials.png",
        description: "Classic Chinese wok-tossed fried rice with juicy chicken and scrambled eggs.",
        tag: "Best Seller"
    },
    {
        id: "bs-2",
        name: "Dragon Chicken",
        category: "chinese-specials",
        price: 210,
        image: "assets/chinese_specials.png",
        description: "Crispy chicken strips tossed in a spicy, sweet, and tangy red sauce with cashews.",
        tag: "Best Seller"
    },
    {
        id: "bs-3",
        name: "Chicken Loaded Fries",
        category: "burgers-rolls",
        price: 210,
        image: "assets/loaded_fries.png",
        description: "Crispy golden fries loaded with tender chicken chunks, spring onions, and melted cheese.",
        tag: "Famous"
    },
    {
        id: "bs-4",
        name: "Jumbo Chicken Roll",
        category: "burgers-rolls",
        price: 150,
        image: "assets/chicken_rolls.png",
        description: "Freshly made flatbread wrapped around marinated chicken kebabs and tangy sauces.",
        tag: "Best Seller"
    },
    {
        id: "bs-5",
        name: "Chicken Popcorn",
        category: "fried-chicken",
        price: 160,
        image: "assets/fried_chicken.png",
        description: "Bite-sized tender chicken pieces breaded and deep-fried to crispy golden perfection.",
        tag: "Kids Favorite"
    },

    // Combos
    {
        id: "combo-1",
        name: "COMBO 01",
        category: "combos",
        price: 229,
        image: "assets/combo_platter.png",
        description: "1pc Crispy Fried Chicken + 2pc Wings + 1 Refreshing Mojito.",
        tag: "Combo Special"
    },
    {
        id: "combo-2",
        name: "COMBO 02",
        category: "combos",
        price: 279,
        image: "assets/combo_platter.png",
        description: "1 Veg Burger + Crispy French Fries + 1 Refreshing Mojito.",
        tag: "Popular Combo"
    },
    {
        id: "combo-3",
        name: "COMBO 03",
        category: "combos",
        price: 499,
        image: "assets/combo_platter.png",
        description: "2pc Crispy Fried Chicken + 1 Fried Chicken Burger + French Fries + 1 Scoop Ice Cream.",
        tag: "Hunger Buster"
    },
    {
        id: "combo-4",
        name: "COMBO 04",
        category: "combos",
        price: 469,
        image: "assets/combo_platter.png",
        description: "2 Veg Burgers + Crispy French Fries + 2 Refreshing Mojitos.",
        tag: "Friends Share"
    },
    {
        id: "combo-5",
        name: "COMBO 05",
        category: "combos",
        price: 999,
        image: "assets/combo_platter.png",
        description: "4pc Crispy Fried Chicken + 2 Fried Chicken Burgers + 4pc Wings + 2 Refreshing Mojitos.",
        tag: "Mega Feast"
    },

    // Burgers & Rolls
    {
        id: "br-1",
        name: "Classic Veg Burger",
        category: "burgers-rolls",
        price: 110,
        image: "assets/crispy_burger.png",
        description: "Gourmet vegetable patty with lettuce, tomatoes, creamy mayo, and soft toasted buns.",
        tag: "Classic"
    },
    {
        id: "br-2",
        name: "Veg Tower Burger",
        category: "burgers-rolls",
        price: 170,
        image: "assets/crispy_burger.png",
        description: "Double patty garden burger stacked high with extra cheese, lettuce, and custom sauce.",
        tag: "Tower Special"
    },
    {
        id: "br-3",
        name: "Chicken Burger",
        category: "burgers-rolls",
        price: 140,
        image: "assets/crispy_burger.png",
        description: "Juicy grilled chicken patty topped with fresh greens, mayonnaise, and soft burger buns.",
        tag: "Standard"
    },
    {
        id: "br-4",
        name: "Chicken Tower Burger",
        category: "burgers-rolls",
        price: 200,
        image: "assets/crispy_burger.png",
        description: "Double chicken patty stacked with layers of melted cheese, jalapeños, and secret dressing.",
        tag: "Jumbo"
    },
    {
        id: "br-5",
        name: "Crispy Chicken Burger",
        category: "burgers-rolls",
        price: 180,
        image: "assets/crispy_burger.png",
        description: "Crispy breaded chicken breast fillet topped with crunchy lettuce and cool creamy mayo.",
        tag: "Popular"
    },
    {
        id: "br-6",
        name: "Nashville Fried Chicken Burger",
        category: "burgers-rolls",
        price: 210,
        image: "assets/crispy_burger.png",
        description: "Spicy Nashville-style glazed fried chicken burger with tangy pickles and special sauce.",
        tag: "Spicy 🔥"
    },
    {
        id: "br-7",
        name: "Chicken Roll",
        category: "burgers-rolls",
        price: 170,
        image: "assets/chicken_rolls.png",
        description: "Perfectly seasoned pulled chicken wrapped tightly with sliced onions and lime juice.",
        tag: "Quick Bite"
    },
    {
        id: "br-8",
        name: "Korean Chicken Roll",
        category: "burgers-rolls",
        price: 180,
        image: "assets/chicken_rolls.png",
        description: "Chicken pieces tossed in rich Korean sweet glaze wrapped with cabbage and sesame.",
        tag: "New"
    },

    // Chinese Specials
    {
        id: "ch-1",
        name: "Egg Noodles",
        category: "chinese-specials",
        price: 160,
        image: "assets/chinese_specials.png",
        description: "Stir-fried noodles tossed with scrambled egg strips, julienned veggies, and Chinese spices.",
        tag: "Classic"
    },
    {
        id: "ch-2",
        name: "Manchurian Dry",
        category: "chinese-specials",
        price: 150,
        image: "assets/chinese_specials.png",
        description: "Crispy fried veggie balls tossed in a rich, dark, sweet and sour Chinese garlic sauce.",
        tag: "Veggie"
    },
    {
        id: "ch-3",
        name: "Paneer Chilli",
        category: "chinese-specials",
        price: 160,
        image: "assets/chinese_specials.png",
        description: "Cubes of fresh paneer stir-fried with bell peppers, onions, green chillies, and soy sauce.",
        tag: "Hot & Sweet"
    },

    // Fried Chicken
    {
        id: "fc-1",
        name: "Crispy Fried Chicken (2pc)",
        category: "fried-chicken",
        price: 180,
        image: "assets/fried_chicken.png",
        description: "Our signature double-breaded golden crispy chicken served with garlic dip.",
        tag: "Crunchy"
    },
    {
        id: "fc-2",
        name: "Korean Crispy Wings (5pc)",
        category: "fried-chicken",
        price: 210,
        image: "assets/fried_chicken.png",
        description: "Juicy chicken wings coated in sweet-spicy Korean glaze, topped with sesame.",
        tag: "Sweet & Spicy"
    },
    {
        id: "fc-3",
        name: "Chicken Wings (5pc)",
        category: "fried-chicken",
        price: 180,
        image: "assets/fried_chicken.png",
        description: "Succulent chicken wings seasoned and fried till crisp. Perfect for sharing.",
        tag: "Classic"
    },

    // Beverages
    {
        id: "bv-1",
        name: "Mint Lime Mojito",
        category: "beverages",
        price: 100,
        image: "assets/mint_mojito.png",
        description: "Refreshing fizzy cooler crafted with fresh mint leaves, lime juice, ice, and syrup.",
        tag: "Cooler"
    },
    {
        id: "bv-2",
        name: "Green Apple Mojito",
        category: "beverages",
        price: 100,
        image: "assets/mint_mojito.png",
        description: "Fruity sparkling drink flavored with green apple pulp, crushed mint, and soda.",
        tag: "Fruity"
    },
    {
        id: "bv-3",
        name: "Oreo Milkshake",
        category: "beverages",
        price: 160,
        image: "assets/milkshakes_desserts.png",
        description: "Thick creamy vanilla milkshake blended with crunchy Oreo cookies and chocolate syrup.",
        tag: "Thick Shake"
    },
    {
        id: "bv-4",
        name: "Brownie Milkshake",
        category: "beverages",
        price: 160,
        image: "assets/milkshakes_desserts.png",
        description: "Indulgent shake loaded with chocolate fudge brownie crumbs and chocolate ice cream.",
        tag: "Premium"
    },
    {
        id: "bv-5",
        name: "Rose Milk",
        category: "beverages",
        price: 80,
        image: "assets/milkshakes_desserts.png",
        description: "Traditional sweet pink milk drink flavored with fragrant rose syrup, served ice cold.",
        tag: "Local Fav"
    },
    {
        id: "bv-6",
        name: "Brownie with Ice Cream",
        category: "beverages",
        price: 160,
        image: "assets/milkshakes_desserts.png",
        description: "Warm chocolate walnut brownie topped with a scoop of cold vanilla ice cream and hot fudge.",
        tag: "Dessert"
    }
];

// App State
let cart = [];
let currentCategory = "all";
let searchQuery = "";

// DOM Elements
const menuItemsGrid = document.getElementById("menu-items-grid");
const categoryTabsContainer = document.getElementById("category-tabs-container");
const searchInput = document.getElementById("menu-search");
const clearSearchBtn = document.getElementById("clear-search");

const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartToggle = document.getElementById("cart-toggle");
const mobileCartFloat = document.getElementById("mobile-cart-float");
const cartClose = document.getElementById("cart-close");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartCount = document.getElementById("cart-count");
const mobileCartCount = document.getElementById("mobile-cart-count");
const whatsappCheckoutBtn = document.getElementById("whatsapp-checkout");

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileDrawer = document.getElementById("mobile-drawer");
const drawerClose = document.getElementById("drawer-close");
const drawerOverlay = document.getElementById("drawer-overlay");
const drawerLinks = document.querySelectorAll(".drawer-link, .drawer-cta");

const scrollTopBtn = document.getElementById("scroll-top");
const navbar = document.getElementById("navbar");

// Lightbox Elements
const lightboxModal = document.getElementById("lightbox-modal");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");
const galleryItems = document.querySelectorAll(".gallery-item");

let galleryImagesList = [];
let currentGalleryIndex = 0;

// Initialize Application
function initApp() {
    loadCartFromStorage();
    renderCategories();
    renderMenu();
    setupEventListeners();
    setupGalleryList();
    initIntersectionObservers();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}

// Load Cart from LocalStorage
function loadCartFromStorage() {
    const storedCart = localStorage.getItem("bees_kitchen_cart");
    if (storedCart) {
        try {
            cart = JSON.parse(storedCart);
            updateCartBadges();
        } catch (e) {
            cart = [];
        }
    }
}

// Save Cart to LocalStorage
function saveCartToStorage() {
    localStorage.setItem("bees_kitchen_cart", JSON.stringify(cart));
    updateCartBadges();
}

// Update Cart Count Badges
function updateCartBadges() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalQty;
    mobileCartCount.textContent = totalQty;
}

// Render Category Tabs Dynamically
function renderCategories() {
    const categories = [
        { id: "all", name: "All Menu" },
        { id: "best-sellers", name: "Best Sellers" },
        { id: "combos", name: "Combos" },
        { id: "burgers-rolls", name: "Burgers & Rolls" },
        { id: "chinese-specials", name: "Chinese Specials" },
        { id: "fried-chicken", name: "Fried Chicken" },
        { id: "beverages", name: "Beverages & Desserts" }
    ];

    categoryTabsContainer.innerHTML = categories.map(cat => `
        <button class="tab-btn ${cat.id === currentCategory ? 'active' : ''}" data-category="${cat.id}">
            ${cat.name}
        </button>
    `).join("");

    // Attach click events
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentCategory = e.target.dataset.category;
            renderMenu();
        });
    });
}

// Filter and Render Menu Cards
function renderMenu() {
    // Filter logic
    let filtered = menuItems;

    // Filter by Category
    if (currentCategory !== "all") {
        if (currentCategory === "best-sellers") {
            // Best seller is determined by tag
            filtered = menuItems.filter(item => item.tag === "Best Seller");
        } else {
            filtered = menuItems.filter(item => item.category === currentCategory);
        }
    }

    // Filter by Search Query
    if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(item => 
            item.name.toLowerCase().includes(query) || 
            item.description.toLowerCase().includes(query)
        );
    }

    // Output Grid HTML
    if (filtered.length === 0) {
        menuItemsGrid.innerHTML = `
            <div class="empty-results text-center" style="grid-column: 1/-1; padding: 40px 0;">
                <span style="font-size: 3rem;">🔍</span>
                <h3 style="margin-top: 16px; font-size: 1.4rem;">No food items found</h3>
                <p style="color: var(--accent-ultra-light);">Try searching for something else like 'burger' or 'fries'</p>
            </div>
        `;
        return;
    }

    menuItemsGrid.innerHTML = filtered.map(item => `
        <div class="menu-card reveal active">
            <div class="menu-card-img-box">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                ${item.tag ? `<span class="menu-card-tag">${item.tag}</span>` : ''}
            </div>
            <div class="menu-card-content">
                <h3 class="menu-card-title">${item.name}</h3>
                <p class="menu-card-desc">${item.description}</p>
                <div class="menu-card-footer">
                    <span class="menu-card-price">₹${item.price}</span>
                    <button class="add-to-cart-btn" data-id="${item.id}" aria-label="Add ${item.name} to order">
                        +
                    </button>
                </div>
            </div>
        </div>
    `).join("");

    // Attach click handlers to add-to-cart buttons
    document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.target.dataset.id;
            addToCart(id);
            triggerButtonTapFeedback(e.target);
        });
    });
}

// Haptic-like micro-animation feedback on add to cart button
function triggerButtonTapFeedback(btn) {
    btn.style.transform = "scale(0.85)";
    btn.style.backgroundColor = "var(--primary-dark)";
    btn.textContent = "✓";
    setTimeout(() => {
        btn.style.transform = "none";
        btn.style.backgroundColor = "";
        btn.textContent = "+";
    }, 450);
}

// Add Item to Order Cart
function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }

    saveCartToStorage();
    renderCart();
}

// Update Item Quantity in Cart
function updateCartQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(c => c.id !== id);
    }

    saveCartToStorage();
    renderCart();
}

// Delete Item from Cart Completely
function deleteCartItem(id) {
    cart = cart.filter(c => c.id !== id);
    saveCartToStorage();
    renderCart();
}

// Render Order Cart contents
function renderCart() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <span>🛒</span>
                <p>Your cart is empty.</p>
                <button class="btn btn-primary btn-sm close-cart-go-menu">Browse Menu</button>
            </div>
        `;
        cartSubtotal.textContent = "₹0";
        
        // Attach click back to menu close drawer
        const backToMenuBtn = cartItemsContainer.querySelector(".close-cart-go-menu");
        if (backToMenuBtn) {
            backToMenuBtn.addEventListener("click", toggleCart);
        }
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">₹${item.price} each</div>
            </div>
            <div class="cart-item-actions">
                <button class="qty-btn" onclick="updateCartQtyDirect('${item.id}', -1)">-</button>
                <span class="qty-val">${item.quantity}</span>
                <button class="qty-btn" onclick="updateCartQtyDirect('${item.id}', 1)">+</button>
                <button class="delete-item-btn" onclick="deleteCartItemDirect('${item.id}')" aria-label="Remove item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                </button>
            </div>
        </div>
    `).join("");

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartSubtotal.textContent = `₹${subtotal}`;
}

// Global binders for onclick helpers inside dynamic innerHTML
window.updateCartQtyDirect = (id, delta) => updateCartQty(id, delta);
window.deleteCartItemDirect = (id) => deleteCartItem(id);

// Toggle Cart Drawer
function toggleCart() {
    cartDrawer.classList.toggle("open");
    cartOverlay.classList.toggle("active");
    if (cartDrawer.classList.contains("open")) {
        renderCart();
    }
}

// Toggle Mobile Menu Drawer
function toggleMobileMenu() {
    mobileDrawer.classList.toggle("open");
    drawerOverlay.classList.toggle("active");
}

// Set up event listeners
function setupEventListeners() {
    // Cart Events
    cartToggle.addEventListener("click", toggleCart);
    mobileCartFloat.addEventListener("click", toggleCart);
    cartClose.addEventListener("click", toggleCart);
    cartOverlay.addEventListener("click", toggleCart);

    // Mobile Navigation Drawer Events
    mobileMenuBtn.addEventListener("click", toggleMobileMenu);
    drawerClose.addEventListener("click", toggleMobileMenu);
    drawerOverlay.addEventListener("click", toggleMobileMenu);
    drawerLinks.forEach(link => {
        link.addEventListener("click", () => {
            toggleMobileMenu();
        });
    });

    // Search events
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        if (searchQuery.trim() !== "") {
            clearSearchBtn.classList.add("show");
        } else {
            clearSearchBtn.classList.remove("show");
        }
        renderMenu();
    });

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.classList.remove("show");
        renderMenu();
    });

    // Checkout to WhatsApp
    whatsappCheckoutBtn.addEventListener("click", () => {
        checkoutOrderWhatsApp();
    });

    // Scroll Events
    window.addEventListener("scroll", () => {
        // Sticky Header Color Transform
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            scrollTopBtn.classList.add("show");
        } else {
            navbar.classList.remove("scrolled");
            scrollTopBtn.classList.remove("show");
        }

        // Active Section Scroll Spy
        scrollSpy();
    });

    // Scroll to Top action
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Footer category filter link clicks
    document.querySelectorAll(".menu-filter-link").forEach(link => {
        link.addEventListener("click", (e) => {
            const filter = e.target.dataset.filter;
            // set tab active
            const targetTab = document.querySelector(`.tab-btn[data-category="${filter}"]`);
            if (targetTab) {
                targetTab.click();
            }
        });
    });
}

// Assemble and Redirect Order via WhatsApp
function checkoutOrderWhatsApp() {
    if (cart.length === 0) return;

    let subtotal = 0;
    let text = `🐝 *Bee's Kitchen - New Order* 🐝\n`;
    text += `=========================\n\n`;

    cart.forEach(item => {
        const total = item.price * item.quantity;
        subtotal += total;
        text += `• *${item.quantity}x ${item.name}* (₹${item.price})\n  _Total: ₹${total}_\n\n`;
    });

    text += `=========================\n`;
    text += `*Order Subtotal: ₹${subtotal}*\n`;
    text += `_Note: Parcel/delivery charges extra_\n\n`;
    
    // Add meta detail
    text += `*Preferred Details:*\n`;
    text += `- Order Type: Dine-in / Takeaway\n`;
    text += `- Time: ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}\n\n`;
    text += `Please confirm my order. Thank you!`;

    const encodedText = encodeURIComponent(text);
    const phoneNumber = "918148604388"; // Official Number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    // Open in new window
    window.open(whatsappUrl, "_blank");
}

// Scroll Spy navigation active state updater
function scrollSpy() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
}

// Lightbox Gallery Setup
function setupGalleryList() {
    galleryImagesList = Array.from(galleryItems).map(item => ({
        src: item.dataset.image,
        caption: item.dataset.caption
    }));

    galleryItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            currentGalleryIndex = index;
            openLightbox();
        });
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightboxPrev.addEventListener("click", showPrevImage);
    lightboxNext.addEventListener("click", showNextImage);

    // Close on clicking overlay outside image
    lightboxModal.addEventListener("click", (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (!lightboxModal.classList.contains("open")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showPrevImage();
        if (e.key === "ArrowRight") showNextImage();
    });
}

function openLightbox() {
    lightboxModal.classList.add("open");
    updateLightboxImage();
}

function closeLightbox() {
    lightboxModal.classList.remove("open");
}

function updateLightboxImage() {
    const currentImgData = galleryImagesList[currentGalleryIndex];
    lightboxImg.src = currentImgData.src;
    lightboxImg.alt = currentImgData.caption;
    lightboxCaption.textContent = currentImgData.caption;
}

function showPrevImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImagesList.length) % galleryImagesList.length;
    updateLightboxImage();
}

function showNextImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImagesList.length;
    updateLightboxImage();
}

// Scroll Intersection Observer for CSS Reveals
function initIntersectionObservers() {
    const revealElements = document.querySelectorAll(".reveal");
    
    if (!window.IntersectionObserver) {
        revealElements.forEach(el => el.classList.add("active"));
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Unobserve after showing
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
}
