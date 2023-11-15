function k_accessories() {
    const kAccessoriesPrice = getElementPriceText('k-accessories-price');

    const previousTotalPrice = getElementPriceText('total-price');
    const newTotalPriceFix = previousTotalPrice + kAccessoriesPrice;
    const newTotalPrice = newTotalPriceFix.toFixed(2);
    setElementValue('total-price', newTotalPrice);

    const previousTotalAmount = getElementPriceText('total-pay');
    const newTotalAmountFix = previousTotalAmount + kAccessoriesPrice;
    const newTotalAmount = newTotalAmountFix.toFixed(2);
    setElementValue('total-pay', newTotalAmount);

    //  add to product name
    addToItemsName('k.Accessories2');
}