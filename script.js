// Stol raqamini URL dan olish
const urlParams = new URLSearchParams(window.location.search);
const tableNumber = urlParams.get('table') || '1';
document.getElementById('table-number').textContent = tableNumber;

// Menyu ma'lumotlari
const menuData = {
    drinks: [
        { id: 1, name: "Qora choy", price: 3000, image: "/images/qora choy.jpeg" },
        { id: 2, name: "Ko'k choy", price: 3000, image: "/images/limonad.jpg" },
        { id: 3, name: "Limon choy", price: 15000, image: "/images/limon.png" },
        { id: 2, name: "Novvot choy", price: 3000, image: "/images/limonad.jpg" },
        { id: 4, name: "Pepsi 2 L ", price: 20000, image: "/images/pepsi2.jpg" },
        { id: 5, name: "Pepsi 1.5 L", price: 16000, image: "/images/pepsi1,5.jpeg" },
        { id: 6, name: "Pepsi 1.0 L", price: 10000, image: "/images/pepsi1.jpeg" },
        { id: 7, name: "Coca-Cola 1.5 L", price: 10000, image: "/images/coca-cola-15 l.png" }

    ],
    salads: [
        { id: 8, name: "Achchiq chuchuk", price: 10000, image: "/images/achchiq_chuchuk.jpg" },
        { id: 9, name: "Bahor salati", price: 25000, image: "/images/bahor_s.jpg" },
        { id: 10, name: "Fransuzki salati", price: 30000, image: "/images/fransuzkiy_salat.jpg" },
        { id: 11, name: "Karam salati", price: 6000, image: "/images/karam_s.jpg" },
        { id: 12, name: "Ko'k pomidor", price: 10000, image: "/images/kuk_pomidor.jpg" },
        { id: 13, name: "Qatiq salati", price: 10000, image: "/images/qatiq_s.jpg" },
        { id: 14, name: "Nejniy salat", price: 32000, image: "/images/nejniy_s.jpg" },
        { id: 15, name: "Olivie", price: 25000, image: "/images/olivie.jpg" },
        { id: 16, name: "Pomidor sok", price: 10000, image: "/images/pomidor_sok.jpg" },
        { id: 17, name: "Qatiq salati", price: 10000, image: "/images/qatiq_s.jpg" },
        { id: 18, name: "Salyoniy asartiy", price: 8000, image: "/images/salyoniy_asarti_s.jpg" },
        { id: 19, name: "Yaponiskiy salati", price: 30000, image: "/images/yaponiskiy_salat.jpg" },
        { id: 20, name: "Zvejiy", price: 12000, image: "/images/zvejiy_s.jpg" },
        { id: 21, name: "Mujiskiy kapriz", price: 30000, image: "/images/zvejiy_s.jpg" }
    
    ],
    national: [
        { id: 21, name: "Osh", price: 30000, image: "/images/osh.jpg" },
        { id: 22, name: "Qo'y go'shtili sho'rva", price: 25000, image: "/images/quygo'shti_shorva.jpg" },
        { id: 23, name: "Oddiy Lag'mon", price: 20000, image: "/images/oddiy_lagmon.jpg" },
        { id: 24, name: "Chuchvara", price: 25000, image: "/images/cesar.jpg" },
        { id: 25, name: "Ko'cha osh", price: 25000, image: "/images/cesar.jpg" },
        { id: 26, name: "Mastava", price: 25000, image: "/images/cesar.jpg" },
        { id: 27, name: "Dimlama", price: 25000, image: "/images/Dimlama.jpg" },
        { id: 28, name: "Sho'rva", price: 25000, image: "/images/cesar.jpg" },
        { id: 29, name: "Jiz", price: 25000, image: "/images/Jiz.jpg" },
        { id: 30, name: "Perajok", price: 25000, image: "/images/perajok.jpg" },
        { id: 31, name: "Chunton", price: 25000, image: "/images/chunton.jpg" },
        { id: 32, name: "Qovurilgan Lag'mon", price: 25000, image: "/images/qovirilgan_lagmon.jpg" },
        { id: 33, name: "Asarti_shourma", price: 30000, image: "/images/asarti_shourma.jpg" },
        { id: 34, name: "Uyg'ur lag'mon", price: 25000, image: "/images/uygur_lag'mon.jpg" },
        
    ],
    fish: [
        { id: 34, name: "Qovurilgan baliq", price: 35000, image: "/images/Qovirilgan_baliq.jpg" },
        { id: 35, name: "Baliq shashlik", price: 40000, image: "/images/baliq_shashlik.jpg" },
        { id: 36, name: "Qo'y burda", price: 18000, image: "/images/baliq_shashlik.jpg" },
        { id: 37, name: "Mol burda", price: 14000, image: "/images/baliq_shashlik.jpg" },
        { id: 38, name: "Baliq shashlik", price: 40000, image: "/images/baliq_shashlik.jpg" },
        { id: 11, name: "Tovuq qanotcha", price: 10000, image: "/images/tovuq_qanotcha.jpg" },
        { id: 11, name: "O'rama qiyma mol", price: 10000, image: "/images/urama qiyma_mol.jpg" },
        { id: 11, name: "Sazan kuschnik", price: 10000, image: "/images/sazan_kusochnik.jpg" },
        { id: 11, name: "Oq baliq kusochnik", price: 10000, image: "/images/oqbaliq_kusochnik.jpg" },
        { id: 11, name: "G'ishduvon", price: 10000, image: "/images/gishduvon.jpg" },
    ],
    desserts: [
        { id: 39, name: "Halva", price: 12000, image: "/images/halva.jpg" },
        { id: 40, name: "Prichuda", price: 7000, image: "/images/nisholda.jpg" },
        { id: 41, name: "Medovik", price: 10000, image: "/images/medovik.jpg" },
        { id: 42, name: "9", price: 25000, image: "/images/9.jpg" },
        { id: 43, name: "1", price: 3000, image: "/images/1.jpg" },
        { id: 44, name: "2", price: 3000, image: "/images/2.jpg" },
        { id: 45, name: "3", price: 3000, image: "/images/3.jpg" },
        { id: 46, name: "4", price: 3000, image: "/images/4.jpg" },
        { id: 47, name: "5", price: 3000, image: "/images/5.jpg" },
        { id: 48, name: "6", price: 3000, image: "/images/6.jpg" },
        { id: 49, name: "7", price: 3000, image: "/images/7.jpg" },
    ],
    Xizmat:[
        {id: 55, name: "Bir kishiga xizmat", price: 4000, image: "/images/ofisant.png"}
    ]
};

let cart = [];

// Kategoriyalarni yuklash
function loadCategories() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            loadMenuItems(button.dataset.category);
        });
    });
}

// Menyu elementlarini yuklash
function loadMenuItems(category) {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';

    menuData[category].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-info">
                <h3>${item.name}</h3>
                <div class="menu-item-price">
                    <span class="price">${item.price.toLocaleString()} so'm</span>
                    <button class="add-to-cart" data-id="${item.id}">+</button>
                </div>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });

    // Savatga qo'shish tugmalari
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.dataset.id);
            addToCart(itemId);
        });
    });
}

// Savatga qo'shish
function addToCart(itemId) {
    let item;
    
    // Barcha kategoriyalardan itemni qidirish
    for (const category in menuData) {
        item = menuData[category].find(i => i.id === itemId);
        if (item) break;
    }

    if (!item) return;

    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCart();
}

// Savatni yangilash
function updateCart() {
    const orderItems = document.getElementById('order-items');
    orderItems.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <span>${item.name}</span>
            <div class="order-item-controls">
                <button class="decrease" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="increase" data-id="${item.id}">+</button>
                <span>${(item.price * item.quantity).toLocaleString()} so'm</span>
            </div>
        `;
        orderItems.appendChild(orderItem);

        total += item.price * item.quantity;
    });

    document.getElementById('total-amount').textContent = total.toLocaleString();

    // Miqdor tugmalari
    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.dataset.id);
            const item = cart.find(i => i.id === itemId);
            if (item) {
                item.quantity += 1;
                updateCart();
            }
        });
    });

    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.dataset.id);
            const itemIndex = cart.findIndex(i => i.id === itemId);
            if (itemIndex !== -1) {
                if (cart[itemIndex].quantity > 1) {
                    cart[itemIndex].quantity -= 1;
                } else {
                    cart.splice(itemIndex, 1);
                }
                updateCart();
            }
        });
    });
}

// Buyurtma berish
document.getElementById('submit-order').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Savat boʻsh! Iltimos, taom tanlang.');
        return;
    }

    const order = {
        table: tableNumber,
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        timestamp: new Date().toISOString()
    };

    // Bu yerda serverga so'rov yuboriladi (keyinroq qo'shamiz)
    console.log('Buyurtma:', order);
    
    // Modalni ko'rsatish
    document.getElementById('success-modal').style.display = 'flex';
    
    // Savatni tozalash
    cart = [];
    updateCart();
});

// Modalni yopish
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('success-modal').style.display = 'none';
});

// Dasturni boshlash
loadCategories();
loadMenuItems('drinks');