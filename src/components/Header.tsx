import * as React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../css/logo.png'
interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {


    return <div className='header'>
        <div className='header-content'>
            <div className='header-logo'>
                <Link to={'/'} ><div className='logo' style={{ backgroundImage: 'url("' + Logo + '")' }}></div></Link>
                <div className='header-text'>
                    <p>Электронный портал</p>
                    <p>"Фольклор народов Сибири"</p>
                </div>
            </div>
            <div className='header-links'>
                <Link to={'/'}><p>О проекте</p></Link>
                <Link to={'/resources/1'}><p>Ресурсы</p></Link>
                <Link to={'/'}><p>Онтология</p></Link>
                <button>Выйти</button>
            </div>
        </div>
    </div>;
};

export default Header;
