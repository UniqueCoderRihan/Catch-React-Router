import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between container text-2xl text-blue-400'>
            <Link to="/">MealDb</Link>
            <div>
                <Link className='mr-4' to='/foods'>Foods</Link>
                <Link to='/about'>About</Link>
            </div>
        </nav>
    );
};

export default Header;