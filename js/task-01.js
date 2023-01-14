const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

const categoriesInfo = categories.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length} `);
});
