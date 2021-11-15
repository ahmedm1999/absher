import React from 'react'
import Carousel from 'react-elastic-carousel';
import SmallCardBlock from './SmallCardBlock';

function Slider(props) {
    const { dots } = props;

    const items = [
        { id: 1, title: "التحقق من فاتورة ضمن مبادرة ", icon: "/images/app.png" },
        { id: 2, title: 'التحقق من فاتورة ضمن مبادرة ', icon: "/images/app.png" },
        { id: 3, title: 'التحقق من فاتورة ضمن مبادرة ', icon: "/images/app.png" },
        { id: 4, title: 'التحقق من فاتورة ضمن مبادرة ', icon: "/images/app.png" },
        { id: 5, title: 'التحقق من فاتورة ضمن مبادرة .', icon: "/images/app.png" }
    ];
    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 1, itemsToScroll: 2 },
    ];
    return (
        <Carousel pagination={dots} breakPoints={breakPoints} >
            {items.map(item => <SmallCardBlock item={item} key={item.id} />)}
        </Carousel>
    )
}

export default Slider
