// Components
import MapLayout from './components/maplayout';
import SideBar from './components/sidebar';

// Utils
import setup from './utils/setup.json';

// Style
import style from './style/Main.module.css'

export default function Main() {
  let data = setup

  return (
    <div className={style.main} >
      <SideBar setup={data} />
      <MapLayout setup={data} />
    </div>
  );
}