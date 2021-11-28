import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import './sass/main.scss';

import ApiService from './js/apiServise';
import { renderMarkup } from './js/renderMarkup';
import card from './template/card.hbs';
import refs from './js/refs';

ApiService.getAllTodo().then(({ data }) => {
  const options = { element: refs.todoList, template: card, data: data };
  renderMarkup(options);
});
