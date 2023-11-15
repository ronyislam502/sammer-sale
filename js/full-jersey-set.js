function jerseySet(){
    const jerseySetPrice=getElementPriceText('jersey-price');

    const previousTotalPrice=getElementPriceText('total-price');
    const newTotalPriceFix=previousTotalPrice+jerseySetPrice;
    const newTotalPrice=newTotalPriceFix.toFixed(2);
    setElementValue('total-price', newTotalPrice);

    const previousTotalAmount=getElementPriceText('total-pay');
    const newTotalAmountFix=previousTotalAmount+jerseySetPrice;
    const newTotalAmount=newTotalAmountFix.toFixed(2);
    setElementValue('total-pay', newTotalAmount);
    // add to product name
    addToItemsName('Full Jersey Set');
}