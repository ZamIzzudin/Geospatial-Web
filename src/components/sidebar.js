// Library
import { useState } from 'react'

// Components
import CardPlace from './cardplace'

// Style
import style from '../style/Sidebar.module.css'

export default function SideBar({ setup }) {
    const { marks } = setup
    const [selected, setSelected] = useState(null)

    function getSelected(value) {
        setSelected(value)
    }

    return (
        <aside className={style.sidebar}>
            {selected ? (
                <section className={style.place_list_container}>
                    {selected.name}
                </section>
            ) : (
                <section className={style.place_list_container}>
                    {marks.map((mark, index) => <CardPlace data={mark} key={index} getSelected={getSelected} />)}
                </section>
            )}
        </aside>
    )
}