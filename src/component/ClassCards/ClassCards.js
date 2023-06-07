import React from 'react';
import './ClassCards.css';

import { Card } from '../Card/Card';

import { homeStrings } from '../../config';

const ClassCards = () => {
    return (
        <div className='cards__container'>
            <ul className='cards__items'>
                {
                    homeStrings.home_class_info.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                src={item.src}
                                text={item.text}
                                title={item.title}
                                path={item.path}
                            />
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default ClassCards;