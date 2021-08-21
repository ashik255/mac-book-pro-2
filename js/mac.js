function priceManagement() {
    const basePriceShow = document.getElementById('base-price');
    const basePrice = parseInt(basePriceShow.innerText);
    const memoryPriceShow = document.getElementById('memory-price');
    const memoryPrice = parseInt(memoryPriceShow.innerText);
    const storagePriceShow = document.getElementById('storage-price');
    const storagePrice = parseInt(storagePriceShow.innerText);
    const deliveryChargeShow = document.getElementById('delivery-price');
    const deliveryCharge = parseInt(deliveryChargeShow.innerText);
    const totalSell = basePrice + memoryPrice + storagePrice + deliveryCharge;
    const totalPriceShow = document.getElementById('total-price');
    totalPriceShow.innerText = totalSell;
    const bottomPriceShow = document.getElementById('bottom-total');
    bottomPriceShow.innerText = totalSell;
};


//  function for select memory types 


function memorySelect(price) {
    const memoryPriceShow = document.getElementById('memory-price');
    memoryPriceShow.innerText = price;
    priceManagement();
};


//  function for select storage types 


function storageSelect(price) {
    const storagePriceShow = document.getElementById('storage-price');
    storagePriceShow.innerText = price;
    priceManagement();
};


//  function for select delivery methods 


function selectDeliveryMethod(charge) {
    const deliveryChargeShow = document.getElementById('delivery-price');
    deliveryChargeShow.innerText = charge;
    priceManagement();
};


//  Code for click button 

// 16GB memory 
document.getElementById('second-memory').addEventListener('click', function () {
    memorySelect(180);
});

// 8GB memory 
document.getElementById('first-memory').addEventListener('click', function () {
    memorySelect(0);
});

// 256GB storage
document.getElementById('third-storage').addEventListener('click', function () {
    storageSelect(180);
});

//  512GB storage 
document.getElementById('second-storage').addEventListener('click', function () {
    storageSelect(100);
});

//1TB storage
document.getElementById('first-storage').addEventListener('click', function () {
    storageSelect(0);
});

// select paid delivery service
document.getElementById('paid-delivery').addEventListener('click', function () {
    selectDeliveryMethod(20);
});

// select free delivery service 
document.getElementById('free-delivery').addEventListener('click', function () {
    selectDeliveryMethod(0);
});


//  promoCode Multiple submission

document.getElementById('apply-promo').addEventListener('click', function () {
    const totalPriceShow = document.getElementById('total-price');
    const totalPrice = parseInt(totalPriceShow.innerText);
    const promoInputField = document.getElementById('promo-input');
    const promoInput = promoInputField.value;
    const promoCode = 'stevekaku';
    const afterDiscountPrice = totalPrice * .8;
    if (promoInput == promoCode) {
        const bottomPriceShow = document.getElementById('bottom-total');
        bottomPriceShow.innerText = afterDiscountPrice;
        promoInputField.value = '';
    }
    else {
        promoInputField.value = '';
    }
});