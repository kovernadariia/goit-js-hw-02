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