const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('ul#ingredients');
console.log(list);

ingredients.forEach(function (ingredient) {
  var li = document.createElement('li');
  li.textContent = ingredient;
  list.appendChild(li);
    }
  );


