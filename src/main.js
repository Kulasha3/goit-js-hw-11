import { getImagesByQuery } from './js/pixabay-api';
import { checkUp, noMatch } from './js/render-functions';
import { imgRender } from './js/render-functions';
import { gallery } from './js/render-functions';
import { errNotify } from './js/render-functions';

export const refs = {
  formEl: document.querySelector('.form'),
  galleryEl: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.loader.style.display = 'none';

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  
  const search = e.target.elements.text.value.trim();
  
  if (!search) {
    checkUp();
    return;
  }
  
  refs.loader.style.display = 'block';
  refs.galleryEl.innerHTML = '';
  
  getImagesByQuery(search)
    .then(data => {
      if (data.hits.length === 0) {
        noMatch();
      } else {
        imgRender(data);
        gallery.on('show.simplelightbox');
        gallery.refresh();
      }
      refs.loader.style.display = 'none';
      e.target.reset();
    })
    .catch(err => {
      errNotify(err);
      refs.loader.style.display = 'none';
      e.target.reset();
    });
}
