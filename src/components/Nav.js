import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './Nav.css';

export default function Nav(){
    return (
        <header>
                <div>
                    <h1>
                        <Link to="">
                            <img src={Logo} alt="로고"/>
                        </Link>
                    </h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/list">제품</Link>
                            </li>
                            <li>
                                <Link to="/wishlist">저장소</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
        </header>
    )
}