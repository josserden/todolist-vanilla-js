export const renderMarkup = ({ element, template, data }) => {
  return element.insertAdjacentHTML('beforeend', template(data));
};
