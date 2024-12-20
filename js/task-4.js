
function getShippingCost(country) {
    let price;

    switch (country.toLowerCase()) { 
        case 'china':
            price = 100;
            break;
        case 'chile':
            price = 250;
            break;
        case 'australia':
            price = 170;
            break;
        case 'jamaica':
            price = 120;
            break;
        default:
            return "Sorry, there is no delivery to your country";
    }

   
    return `Shipping to ${country} will cost ${price} credits`;
}
console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica")); 
console.log(getShippingCost("Sweden")); 




