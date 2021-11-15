import React from 'react'
import { Link } from 'react-router-dom';

function SmallCardBlock(props) {
    const { title, icon } = props.item;

    return (
        <Link className="small-card link shadow-sm m-2 p-2 w-100" to="#">
            <header className="text-center">
                <img src={icon} className="small-card__img" width="20" height="20" />
            </header>
            <p className="small-card__title text-center m-0 mt-2">{title}</p>
        </Link>
    )
}

export default SmallCardBlock
