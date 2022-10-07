import { PhotoType } from '../../types/PhotoType'
import * as C from './styles'

type Props = {
    data: PhotoType
}

export const EachPhotoItem = ({ data }: Props) => {
    return (
        <C.Container>
            <C.Photo src={data.url} />
            <C.Texto>albumId: {data.albumId}</C.Texto>
            <C.Texto>id: {data.id}</C.Texto>
            <C.Texto>title: {data.title}</C.Texto>
        </C.Container>
    );
}