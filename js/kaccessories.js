function kAccessories() {
    const kAccessPrice = getElementPriceText('kAccess-price');
    // console.log(kAccessPrice);

    const previousTotalPrice = getElementPriceText('total-price');
    // console.log('check', previousTotalPrice);

    const newTotalPriceFix = previousTotalPrice + kAccessPrice;
    const newTotalPrice = newTotalPriceFix.toFixed(2);
    
    setElementValue('total-price', newTotalPrice);
    // console.log('total-price:check type', typeof newTotalPrice);

    const previousTotalAmount = getElementPriceText('total-pay')
    const newTotalAmount = previousTotalAmount + kAccessPrice;
    const totalAmount=newTotalAmount.toFixed(2);
    setElementValue('total-pay', totalAmount);

    // ADD TO  PRODUCT NAME
    addToItemsName('K.Accessories');
}

