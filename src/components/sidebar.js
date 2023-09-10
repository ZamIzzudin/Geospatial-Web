// Library
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

// Components
import CardPlace from './cardplace'
import { setCenter, setZoom } from '../store/setupSlice';

// Asset
import Thumb from '../assets/thumb.jpeg'
import Arrow from '../assets/arrow-left-white.svg'


// Style
import style from '../style/Sidebar.module.css'

export default function SideBar() {
    const { zoom_default, middle, marks } = useSelector((state) => state.setup.setup);

    const [selected, setSelected] = useState(null)
    const dispatch = useDispatch();

    function getSelected(value) {
        setSelected(value)
        dispatch(setCenter([value.lot, value.lat]));
        dispatch(setZoom(18))
    }

    function removeSelected() {
        setSelected(null)
        dispatch(setCenter(middle.cordinate));
        dispatch(setZoom(zoom_default))
    }

    return (
        <aside className={style.sidebar}>
            {selected ? (
                <section className={style.place_list_container}>
                    <button className={style.back_button} onClick={() => removeSelected()}><img src={Arrow} alt="arrow icon" /></button>
                    <img src={Thumb} alt="thumb-detail" />
                    <h1>{selected.name}</h1>
                </section>
            ) : (
                <section className={style.place_list_container}>
                    {marks.map((mark, index) => <CardPlace data={mark} key={index} getSelected={getSelected} />)}
                </section>
            )}
        </aside>
    )
}