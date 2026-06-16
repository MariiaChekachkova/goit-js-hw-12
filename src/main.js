

import { getImagesbyQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const query = event.target.elements['search-text'].value.trim();

    if (!query) {
        iziToast.show({
            message: 'Please enter a search query.',
            position: 'topRight',
            color: 'red',
        });
        return;
    }
   
    clearGallery();
    showLoader();

    getImagesbyQuery(query)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again.',
                    position: 'topRight',
                    color: 'red',
                });
                return;
            }
            createGallery(data.hits);
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        })
        .finally(() => {
            hideLoader();
        });

}

