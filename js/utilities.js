function inputValueField(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

function getElementPriceText(elementId) {
    const inputPrice = document.getElementById(elementId);
    const priceText = inputPrice.innerText;
    const price = parseFloat(priceText);
    return price;
}

function setElementValue(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

function addToItemsName(itemsName) {
    console.log(itemsName);
    const addItemsName = document.getElementById('items-name');
    const count = addItemsName.childElementCount;
    const p = document.createElement('p');
    p.classList.add('text-xl');
    p.classList.add('font-medium');
    p.classList.add('text-black');
    p.classList.add('my-2');
    p.innerHTML = `${count + 1}. ${itemsName}`;
    addItemsName.appendChild(p);
}