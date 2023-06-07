import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export const Card = (props) => {
    const { title, text, src="../../asset/cat1.jpg", path = "" } = props;

    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={path}>
                    <figure className='cards__item__pic-wrap' data-category={title}>
                        <img
                            className='cards__item__img'
                            alt='Cat1'
                            src={src}
                        />
                        <div class="cards__middle">
                            <div class="cards__overlay__text">LEARN MORE</div>
                        </div>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
};

export default Card;