import { getImagesByQuery } from './js/pixabay-api';
import { imgRender, showLoader, hideLoader, clearGallery } from './js/render-functions';
import { checkUp, noMatch, errNotify } from './js/notifications';

const refs = {
  formEl: document.querySelector('.form'),
};

hideLoader();

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  
  const search = e.target.elements.text.value.trim();
  
  if (!search) {
    checkUp();
    return;
  }
  
  showLoader();
  clearGallery();
  
  getImagesByQuery(search)
    .then(data => {
      if (data.hits.length === 0) {
        noMatch();
      } else {
        imgRender(data);
      }
      hideLoader();
      e.target.reset();
    })
    .catch(err => {
      errNotify(err);
      hideLoader();
      e.target.reset();
    });
}
