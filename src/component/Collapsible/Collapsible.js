import React, {useState} from 'react';
import './Collapsible.css';
import { arrow } from '../../asset';

const Collapsible = (props) => {
    const {title, content} = props;
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className='collapsible-container' style={{maxHeight: isCollapsed ? "fit-content" : "auto"}}>
            <div className='collapsible-title-bar' onClick={toggleCollapsed}>
                <div className='collapsible-title'>{title}</div>
                <img src={arrow} alt="arrow" className={isCollapsed ? 'collapsible-default' : "collapsible-active"} />
            </div>
            { isCollapsed ? null : 
                <div className='collapsible-content'>
                    {content}
                </div>
            }
        </div>
    );
};

export default Collapsible;