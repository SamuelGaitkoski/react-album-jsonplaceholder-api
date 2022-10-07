import * as C from './styles'
import { Link } from 'react-router-dom';

export const MainPage = () => {
    return (
        <C.Container>
            <Link to="/albums">
                <C.Link>Album Page</C.Link>
            </Link>
        </C.Container>
    );
}