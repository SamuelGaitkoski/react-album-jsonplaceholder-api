import * as C from './styles'
import { useParams } from "react-router-dom";
import { PhotoType } from '../../types/PhotoType';
import { useState, useEffect } from 'react';
import { api } from '../../api';
import { EachPhotoItem } from '../../components/EachPhotoItem';

export const EachPhotoPage = () => {
    const [photo, setPhoto] = useState<PhotoType>();
    const params = useParams();
    const id = params.slug;

    useEffect(() => {
        if(id) {
            loadEachPhoto(id);
        }
    }, []);

    const loadEachPhoto = async (id: string) => {
        let json = await api.getPhotoById(id);
        setPhoto(json);
    }

    return (
        <C.Container>
            <C.Titulo>Photo {id}</C.Titulo>
            {photo &&
                <EachPhotoItem data={photo} />
            }
        </C.Container>
    );
}