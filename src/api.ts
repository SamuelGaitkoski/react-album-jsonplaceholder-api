import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const api = {
    getAllAlbuns: async () => {
        let response = await axiosInstance.get('/albums');
        return response.data;
    },
    getPhotosByAlbumId: async (id: string) => {
        let response = await axiosInstance.get(`/albums/${id}/photos`);
        return response.data;
    },
    getPhotoById: async (id: string) => {
        let response = await axiosInstance.get(`/photos/${id}`);
        return response.data;
    }
}