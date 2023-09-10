
// Style
import style from '../style/CardPlace.module.css'
export default function CardPlace({ data, getSelected }) {
    const { name, hour } = data
    const image = data.images[0]
    return (
        <>
            <div className={style.card}>
                    <img src={image} className={style.thumb_card} alt="place pict" />
                <div className={style.content_card}>
                    <h1 className={style.content_title}>{name}</h1>
                    <span className={style.content_hour}>{hour}</span>
                    <button onClick={() => getSelected(data)} className={style.button_card}>Details</button>
                </div>
            </div>
        </>
    )
}