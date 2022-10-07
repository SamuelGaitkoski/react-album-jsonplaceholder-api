import * as C from './styles'
import { AlbumType } from '../../types/AlbumType';
import { api } from '../../api';
import { useState } from 'react';
import { PhotoType } from '../../types/PhotoType';
import { useNavigate } from 'react-router-dom';

type Props = {
    data: AlbumType
}

export const AlbumItem = ({ data }: Props) => {
    //const [photos, setPhotos] = useState<PhotoType[]>([]);
    const navigate = useNavigate();

    // const loadAlbumPhotos = async (id: number) => {
    //     let json = await api.getPhotosByAlbumUserId(id);
    //     setPhotos(json);
    // }

    const handleClickAlbum = (index: number) => {
        //loadAlbumPhotos(index);
        return navigate(`/albums/${index}/photos`);
    }

    return (
        <C.Container onClick={() => handleClickAlbum(data.id)}>
            <C.Textos>
                <C.Texto>userId: {data.userId}</C.Texto>
                <C.Texto>id: {data.id}</C.Texto>
                <C.Texto>title: {data.title}</C.Texto>
            </C.Textos>
        </C.Container>
    );
}