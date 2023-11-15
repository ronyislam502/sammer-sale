
document.getElementById('input-field').addEventListener('keyup', function (event) {
    const inputValue = event.target.value;
    const applyButton = document.getElementById('btn-apply');
    if (inputValue === 'SELL200') {
        applyButton.removeAttribute('disabled');
    }
    else {
        applyButton.setAttribute('disabled', true);
    }
})
// make purchase button

document.getElementById('total-price').addEventListener('keyup', function (event) {
    const totalPrice = event.target.value;
    const purchaseButton = document.getElementById('make-purchase');
    if (totalPrice < 0 ) {
        purchaseButton.removeAttribute('disabled');
    }
    else {
        purchaseButton.setAttribute('disabled', true);
    }
})

// make purchase button

function goHome() {
    window.location.href = 'index.html';
}