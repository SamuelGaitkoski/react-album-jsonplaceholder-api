import * as C from './styles'
import { useEffect, useState } from "react";
import { api } from "../../api";
import { AlbumType } from "../../types/AlbumType";
import { AlbumItem } from "../../components/AlbumItem";
import { useParams } from "react-router-dom";
import { PhotoType } from '../../types/PhotoType';
import { PhotoItem } from '../../components/PhotoItem';
import { isMetaProperty, isTemplateExpression } from 'typescript';

export const PhotoPage = () => {
    const [photos, setPhotos] = useState<PhotoType[]>([]);
    const params = useParams();
    const id = params.slug;

    useEffect(() => {
        if(id) {
            loadAlbumPhotos(id);
        }
    }, []);

    const loadAlbumPhotos = async (id: string) => {
        let json = await api.getPhotosByAlbumId(id);
        setPhotos(json);
    }

    return (
        <C.Container>
            <C.Titulo>Photos from album {id}</C.Titulo>
            {photos.map((item, index) => (
                <PhotoItem key={index} data={item} />
            ))}
        </C.Container>
    )
}