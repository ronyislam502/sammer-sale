function discountApply() {
    const inputFieldValue = inputValueField('input-field');

    const previousTotalPrice = getElementPriceText('total-price');

    if (previousTotalPrice < 200) {
        alert('200TK PORIMAN SHOPPING KORUN');
        return;
    }
    const discountAmount = previousTotalPrice * 0.2;

    const previousDiscountAmount = getElementPriceText('discount-amount');
    const newDiscountAmountText = previousDiscountAmount + discountAmount;
    const newDiscountAmount = newDiscountAmountText.toFixed(2);
    setElementValue('discount-amount', newDiscountAmount);

    const previousTotalAmount=getElementPriceText('total-pay');
    const newTotalAmountText = previousTotalPrice - newDiscountAmount;
    const newTotalAmount = newTotalAmountText.toFixed(2);
    setElementValue('total-pay', newTotalAmount);
}