import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove('is-hidden');
}

export function hideLoader() {
    loader.classList.add('is-hidden');
}


export function createGallery(images) {
    const markup = images.map(image => {
        return `
        <li class="gallery-item">
        <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" />
            </a>
            <div class="info">
  <p><b>Likes</b><span>${image.likes}</span></p>
  <p><b>Views</b><span>${image.views}</span></p>
  <p><b>Comments</b><span>${image.comments}</span></p>
  <p><b>Downloads</b><span>${image.downloads}</span></p>
</div>
        </li>
        `;
    }).join('');
    gallery.innerHTML = markup;
    lightbox.refresh(); // Refresh the lightbox to include new images
}


