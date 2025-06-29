import axios from 'axios';

export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '42127236-8bfdbbfbeed8a2dadaca720e8';
  
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}
