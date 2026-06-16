

import { getImagesbyQuery } from "/js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton} from "/js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more');

let query = '';
let page = 1;   
let totalPages = 0;

form.addEventListener('submit', handleSubmit);
loadMoreButton.addEventListener('click', handleLoadMore);

async function handleSubmit(event) {
    event.preventDefault();

     query = event.target.elements['search-text'].value.trim();

    if (!query) {
        iziToast.show({
            message: 'Please enter a search query.',
            position: 'topRight',
            color: 'red',
        });
        return;
    }

    page = 1;
   
    clearGallery();
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesbyQuery(query, page);
        if (data.hits.length === 0) {
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again.',
                position: 'topRight',
                color: 'red',
            });
            return;
        }
        createGallery(data.hits);
        totalPages = Math.ceil(data.totalHits / 15);
        if (page < totalPages) {
            showLoadMoreButton();
        }
    } catch (error) {
        console.error('Error fetching images:', error);
    } finally {
        hideLoader();
    }
}

async function handleLoadMore() {
    page += 1;
    showLoader();
    hideLoadMoreButton();

    try {
        const data = await getImagesbyQuery(query, page);
        createGallery(data.hits);
        if (page < totalPages) {
            showLoadMoreButton();
        } else {
            iziToast.show({
                message: "You've reached the end of search results.",
                position: 'topRight',
                color: 'blue',
            });
        } scrollPage();
        
    }
    catch (error) {
            console.error('Error fetching images:', error);
        } finally {
            hideLoader();
        }
    }
    
    
function scrollPage() {
    const galleryItem = document.querySelector('.gallery-item');
    if (!galleryItem) return;

    const cardHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}   

