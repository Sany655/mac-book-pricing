// set initial value
let memory = 0;
let storage = 0;
let delivery = 0;
let bestPrice = 1299

// set prices by getElementById
function setValueById(id,value) {
    document.getElementById(id).innerText = value;
    calculateTotalPrice()
}

// calculating total price
function calculateTotalPrice() {
    document.getElementById('total-price').innerText = bestPrice+memory+storage+delivery;
    total()
}

function total() {
    document.getElementById('total').innerText = bestPrice+memory+storage+delivery;
}

// ram button events
document.getElementById('ram-8gb').addEventListener('click', function() {
    memory = 0;
    setValueById('memory-cost-text',memory);
})
document.getElementById('ram-16gb').addEventListener('click', function() {
    memory = 180;
    setValueById('memory-cost-text',memory);
})

// storage button events
document.getElementById('rom-256gb').addEventListener('click', function() {
    storage = 0;
    setValueById('storage-cost-text',storage);
})
document.getElementById('rom-512gb').addEventListener('click', function() {
    storage = 100;
    setValueById('storage-cost-text',storage)
})
document.getElementById('rom-1tb').addEventListener('click', function() {
    storage = 180;
    setValueById('storage-cost-text',storage)
})


// delivery button events
document.getElementById('delivery-normal').addEventListener('click', function() {
    delivery = 0;
    setValueById('delivery-charge-text',delivery)
})
document.getElementById('delivery-premium').addEventListener('click', function() {
    delivery = 20;
    setValueById('delivery-charge-text',delivery)
})

// applying pomo code
document.getElementById('pomo-code-button').addEventListener('click', function() {
    if (document.getElementById('pomo-code').value==='stevekaku') {
        const total = parseInt(document.getElementById('total').innerText);
        document.getElementById('total').innerText = total-((20/100)*total);
        document.getElementById('pomo-code').value = '';
    }
})