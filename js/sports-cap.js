function sportsCap(){
    const sportsCapPrice = getElementPriceText('cap-price');

    const previousTotalPrice = getElementPriceText('total-price');
    const newTotalPriceFix = previousTotalPrice + sportsCapPrice;
    const newTotalPrice=newTotalPriceFix.toFixed(2);
    setElementValue('total-price', newTotalPrice);

    const previousTotalAmount=getElementPriceText('total-pay');
    const newTotalAmountFix=previousTotalAmount+sportsCapPrice;
    const newTotalAmount=newTotalAmountFix.toFixed(2);
    setElementValue('total-pay', newTotalAmount);

    //  add to product name
    addToItemsName('Sports Back Cap');
}