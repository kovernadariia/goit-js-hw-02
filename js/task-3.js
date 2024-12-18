function getElementWidth(content, padding, border) {
    // Перетворення рядкових значень в числа
    const contentWidth = parseFloat(content); // Ширина контенту
    const paddingWidth = parseFloat(padding); // Горизонтальний падінг
    const borderWidth = parseFloat(border); // Товщина бордера
    
    // Враховуємо падінг та бордер для загальної ширини
    const totalWidth = contentWidth + 2 * (paddingWidth + borderWidth); // Падінг та бордер на обох сторонах
    
    return totalWidth; // Повертаємо загальну ширину
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

function checkForSpam(message) {
    const newMessage = message.toLowerCase();
    if (newMessage.includes('spam') || newMessage.includes('sale')) {
        return true;
    } else {
        return false;
    }
}
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.



// Доповни код функції таким чином, що:

// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false