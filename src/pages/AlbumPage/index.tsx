import * as C from './styles'
import { useEffect, useState } from "react";
import { api } from "../../api";
import { AlbumType } from "../../types/AlbumType";
import { AlbumItem } from "../../components/AlbumItem";
import { PhotoType } from '../../types/PhotoType';

export const AlbumPage = () => {
    const [albums, setAlbums] = useState<AlbumType[]>([]);

    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        let json = await api.getAllAlbuns();
        setAlbums(json);
    }

    return (
        <C.Container>
            <C.Titulo>Albums List</C.Titulo>
            {albums.map((item, index) => (
                <AlbumItem key={index} data={item} />
            ))}
        </C.Container>
    )
}