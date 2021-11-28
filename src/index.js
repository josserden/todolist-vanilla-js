import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import './sass/main.scss';

import refs from './js/refs';
import { onWarning } from './js/notification';

import ApiService from './js/apiServise';
import { renderMarkup } from './js/renderMarkup';
import card from './template/card.hbs';

ApiService.getAllTodo().then(({ data }) => {
  const options = { element: refs.todoList, template: card, data: data };
  renderMarkup(options);

  refs.todoList.addEventListener('click', function (event) {
    // event.preventDefault();

    if (event.target.checked) {
      const label = document.querySelector('label');

      console.log(label.getAttribute('data-completed'));

      label.setAttribute('data-completed', 'true');

      label.dataset.completed === 'true';
    }
  });
});
