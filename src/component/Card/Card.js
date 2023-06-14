import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export const Card = (props) => {
    const { title, text, src="../../asset/cat1.jpg", path = "" } = props;

    const getTextItem = (str) => {
        if (str.includes(':')) {
            // make text before ':' bold
            const index = str.indexOf(':');
            const firstPart = str.slice(0, index + 1);
            const secondPart = str.slice(index + 1);
            return (
                <div className='cards__item__text' id={str}>
                    <b>{firstPart}</b>
                    <div className='cards__item__padding'>{secondPart}</div>
                </div>
            );
        }
        else {
            return (
                <div className='cards__item__text' id={str}>{str}</div>
            );
        }
    } 

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
                    </figure>
                    <div className='cards__item__info'>
                        { text.map(item => {
                            return getTextItem(item);
                        })}
                    </div>
                </Link>
            </li>
        </>
    );
};

export default Card;