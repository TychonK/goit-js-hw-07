const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('ul#ingredients');

let elements = ingredients.map(ingredient => {
  let li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});
console.log(elements)
  list.append(...elements)


