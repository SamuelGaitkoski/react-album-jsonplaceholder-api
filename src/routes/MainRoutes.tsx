import { useRoutes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { AlbumPage } from "../pages/AlbumPage";
import { PhotoPage } from "../pages/PhotoPage";
import { EachPhotoPage } from "../pages/EachPhotoPage";

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <MainPage />},
        {path: '/albums', element: <AlbumPage />},
        {path: '/albums/:slug/photos', element: <PhotoPage />},
        {path: '/photos/:slug', element: <EachPhotoPage />}
    ]);
}