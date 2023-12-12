import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useMediaQuery } from 'react-responsive';
import CardPlace from './cardplace';
import { setCenter, setZoom } from '../store/setupSlice';
import { setDataSelected } from '../store/selectedDataSlice';

import Arrow from '../assets/arrow-left-white.svg';
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsIcon from '@mui/icons-material/Directions';
import SearchIcon from '@mui/icons-material/Search';
import MapIcon from '@mui/icons-material/Map';

import style from '../style/Sidebar.module.css';

export default function SideBar() {
    const { zoom_default, middle, marks } = useSelector((state) => state.setup.setup);
    const { dataSelected } = useSelector(state => state.selectedData)
    const dispatch = useDispatch();

    const [expand, setExpand] = useState(false);
    const [hide, setHide] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const sidebarRef = useRef(null);
    const searchRef = useRef(null);

    const[dataFiltered, setDataFiltered] = useState(marks);

    const handleFilter = (text) => {
        const filter = marks.filter(mark => mark.name.toLowerCase().includes(text.toLowerCase()));
        setDataFiltered(filter);
    }

    // Responsive
    const isResponsive = useMediaQuery({ maxWidth: 992 });

    function getSelected(value) {
        dispatch(setDataSelected(value));
        dispatch(setCenter([value.lot, value.lat]));
        dispatch(setZoom(18));
    }

    function removeSelected() {
        dispatch(setDataSelected(null));
        dispatch(setCenter(middle.cordinate));
        dispatch(setZoom(zoom_default));
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setExpand(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchActive(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <aside className={style.sidebar} ref={sidebarRef}>
            <div className={style.searchBar_container} ref={searchRef}>
                <div className={`${style.searchForm} ${searchActive ? style.active : ''}`}>
                    <input type="text" name="text" placeholder='Search' onKeyUp={(e) => handleFilter(e.target.value)} />
                    <div className={style.searchIcon_container} onClick={() => setSearchActive(!searchActive)}>
                        <SearchIcon className={style.searchIcon} sx={{ color: '#9E9E9E', fontSize: '28px' }} />
                    </div>
                </div>
            </div>
            {dataSelected ? (
                <section className={style.place_list_container}>
                    {isResponsive ? (
                        <>
                            <div className={`${style.content_information} ${hide ? style.hide : ''}`}>
                                <div style={{ position: 'relative' }}>
                                    <button className={style.back_button} style={{ top: '15px' }} onClick={() => { removeSelected(); setExpand(true) }}>
                                        <img src={Arrow} alt="arrow icon" />
                                    </button>
                                </div>
                                <button className={`${style.content_back_button} ${hide ? style.hide : ''}`} onClick={() => { setHide(!hide); setExpand(!expand) }}>
                                    <img src={Arrow} alt="arrow icon" />
                                </button>
                                <img src={dataSelected.images[0]} alt="thumb-detail" />

                                <div className={style.place_information}>
                                    <div className={style.base_info}>
                                        <p>{dataSelected.name}</p>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                            <span>Minimarket</span>
                                            <span>{dataSelected.hour}</span>
                                        </div>
                                    </div>
                                    <ul className={style.place_more_info}>
                                        <li>
                                            <LocationOnIcon sx={{ color: '#FF9505', width: '32px' }} />
                                            <span>{dataSelected.address}</span>
                                        </li>
                                        <li>
                                            <MapIcon sx={{ color: '#FF9505', width: '32px' }} />
                                            <span>{`Lot: ${dataSelected.lot}, Lat: ${dataSelected.lat}`}</span>
                                        </li>
                                        <li>
                                            <DirectionsIcon sx={{ color: '#FF9505', width: '32px' }} />
                                            <a rel='noreferrer' target="_blank" href={dataSelected.rute}>Lihat rute disini</a>
                                        </li>
                                    </ul>

                                    <div className={style.place_photo_section}>
                                        <p>Foto</p>
                                        <div className={style.images_container}>
                                            {dataSelected.images?.map((image) => (
                                                <img key={image} src={image} alt="thumb-detail" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <button className={style.back_button} onClick={() => { removeSelected(); setExpand(true) }}>
                                <img src={Arrow} alt="arrow icon" />
                            </button>
                            <img src={dataSelected.images[0]} alt="thumb-detail" />
                            <div className={style.place_information}>
                                <div className={style.base_info}>
                                    <p>{dataSelected.name}</p>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                        <span>Minimarket</span>
                                        <span>{dataSelected.hour}</span>
                                    </div>
                                </div>
                                <ul className={style.place_more_info}>
                                    <li>
                                        <LocationOnIcon sx={{ color: '#FF9505', width: '32px' }} />
                                        <span>{dataSelected.address}</span>
                                    </li>
                                    <li>
                                        <MapIcon sx={{ color: '#FF9505', width: '32px' }} />
                                        <span>{`Lot: ${dataSelected.lot}, Lat: ${dataSelected.lat}`}</span>
                                    </li>
                                    <li>
                                        <DirectionsIcon sx={{ color: '#FF9505', width: '32px' }} />
                                        <a href={dataSelected.rute}>Lihat rute disini</a>
                                    </li>
                                </ul>
                                <div className={style.place_photo_section}>
                                    <p>Foto</p>
                                    {/* Map Photo */}
                                    <div className={style.images_container}>
                                        {dataSelected.images?.map((image) => (
                                            <img key={image} src={image} alt="thumb-detail" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </section>
            ) : (
                <section className={`${style.place_list_container}`}>
                    {isResponsive ? (
                        <>
                            <div className={style.menu_icon}>
                                <MenuIcon className={style.icon_sidebar} onClick={() => setExpand(!expand)} />
                            </div>

                            <div className={`${style.content} ${expand ? style.show : ''}`}>
                                {
                                    marks.map((mark, index) =>
                                        <CardPlace data={mark} key={index} getSelected={getSelected} />
                                    )
                                }
                            </div>
                        </>
                    ) : (
                        dataFiltered.map((mark, index) =>
                            <CardPlace data={mark} key={index} getSelected={getSelected} />
                        )
                    )}
                </section>
            )}
        </aside>
    );
}