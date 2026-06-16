import axios from "axios";
const ApiKey = '56293806-02168ee71cd5fd65309551948';
export async function getImagesbyQuery(query, page) {
    const response = await axios.get('https://pixabay.com/api/', {
        params: {
            key: ApiKey,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: 15,
        }
    });
    return response.data;
}