function homeCooker(){
    const homeCookerPrice = getElementPriceText('cooker-price');

    const previousTotalPrice = getElementPriceText('total-price');
    const newTotalPriceFix = previousTotalPrice + homeCookerPrice;
    const newTotalPrice=newTotalPriceFix.toFixed(2);
    setElementValue('total-price', newTotalPrice);

    const previousTotalAmount=getElementPriceText('total-pay');
    const newTotalAmountFix=previousTotalAmount+homeCookerPrice;
    const newTotalAmount=newTotalAmountFix.toFixed(2);
    setElementValue('total-pay', newTotalAmount);

    //  add to product name
    addToItemsName('Home Cooker');
}