import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  galleryEl: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

// Initialize loader as hidden
refs.loader.style.display = 'none';

export let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function showLoader() {
  refs.loader.style.display = 'block';
}

export function hideLoader() {
  refs.loader.style.display = 'none';
}

export function clearGallery() {
  refs.galleryEl.innerHTML = '';
}

export function imgTemplate(data) {
  return data.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
      loading="lazy"
    />
  </a>
  <div class="gallery-descr">
  <p><b>Likes</b> ${likes}</p>
  <p><b>Views</b> ${views}</p>
  <p><b>Comments</b> ${comments}</p>
  <p><b>Downloads</b> ${downloads}</p>
 </div>
</li>`;
      }
    )
    .join('\n');
}

export function imgRender(data) {
  const markup = imgTemplate(data);
  refs.galleryEl.innerHTML = markup;
  gallery.refresh();
}
