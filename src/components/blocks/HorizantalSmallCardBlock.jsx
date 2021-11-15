import React from 'react'
import { Link } from 'react-router-dom'

function HorizantalSmallCardBlock(props) {
    const { title, disc, icon } = props.item;

    return (
        <div className="horizantal-card w-100 shadow-sm m-2 p-2 border">
            <Link className="horizantal-card__block link" to="#">
                <img src={icon} className="ms-2" widtt="36" height="56" />
            </Link>
            <Link className="horizantal-card__block link" to="#">
                <p className="m-0 mb-2 title">{title}</p>
                <p className="m-0">سمو الأمير عبدالعزيز بن سعود يرعى ملتقى أبشر السابع للتعاملات</p>
                <small className="d-block mt-2 more">المزيد ...</small>
            </Link>

        </div>
    )
}

export default HorizantalSmallCardBlock
