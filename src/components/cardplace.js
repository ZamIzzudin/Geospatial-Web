// Asset
import Thumb from '../assets/thumb.jpeg'

// Style
import style from '../style/CardPlace.module.css'
export default function CardPlace({ data, getSelected }) {
    const { name } = data

    return (
        <div className={style.card}>
            <img src={Thumb} className={style.thumb_card} alt="place pict" />
            <div className={style.content_card}>
                <h1 className={style.content_title}>{name}</h1>
                <span>Alamat</span>
                <button onClick={() => getSelected(data)} className={style.button_card}>Details</button>
            </div>
        </div>
    )
}