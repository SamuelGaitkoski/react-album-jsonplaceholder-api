import { PhotoType } from '../../types/PhotoType';
import * as C from './styles'
import { useNavigate } from 'react-router-dom';

type Props = {
    data: PhotoType
}

export const PhotoItem = ({ data }: Props) => {
    const navigate = useNavigate();

    const handleClickPhoto = (index: string) => {
        return navigate(`/photos/${index}`);
    }
    
    return (
        <C.Container onClick={() => handleClickPhoto(data.id)}>
            <C.Photo src={data.thumbnailUrl} />
            <C.Texto>albumId: {data.albumId}</C.Texto>
            <C.Texto>id: {data.id}</C.Texto>
            <C.Texto>title: {data.title}</C.Texto>
        </C.Container>
    );
}