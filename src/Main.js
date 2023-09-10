// Components
import MapLayout from './components/maplayout';
import SideBar from './components/sidebar';

// Style
import style from './style/Main.module.css'

export default function Main() {
  return (
    <div className={style.main} >
      <SideBar />
      <MapLayout />
    </div>
  );
}

