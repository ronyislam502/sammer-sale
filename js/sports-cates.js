function sportsCates() {
    const sportsCatesPrice = getElementPriceText('cates-price');

    const previousTotalPrice = getElementPriceText('total-price');
    const newTotalPriceFix = previousTotalPrice + sportsCatesPrice;
    const newTotalPrice=newTotalPriceFix.toFixed(2);
    setElementValue('total-price', newTotalPrice);

    const previousTotalAmount=getElementPriceText('total-pay');
    const newTotalAmountFix=previousTotalAmount+sportsCatesPrice;
    const newTotalAmount=newTotalAmountFix.toFixed(2);
    setElementValue('total-pay', newTotalAmount);

    //  add to product name
    addToItemsName('Sports Cates');
}
