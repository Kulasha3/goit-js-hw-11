import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function checkUp() {
  iziToast.warning({
    title: 'Caution',
    message: 'Please type something to search!',
    position: 'topRight',
  });
}

export function noMatch() {
  iziToast.warning({
    title: 'Caution',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
  });
}

export function errNotify(err) {
  iziToast.warning({
    title: 'Caution',
    message: `Error: ${err}`,
    position: 'topRight',
  });
} 