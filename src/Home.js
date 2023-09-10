// Library
import { Link } from "react-router-dom"

// Style
import style from './style/Home.module.css'

// Assets
import Jumbo from './assets/jumbo.mp4'
import JumboThumb from './assets/jumbo-thumb.png'

export default function Home() {
    return (
        <div className={style.jumbotron}>
            <div className={style.jumbotron_content}>
                <h1>Cinere Geo Spasial</h1>
                <p>Make you easily to find your dreamy minimarket in Cinere</p>
                <Link to="/map">
                    <button>Get Started</button>
                </Link>
            </div>
            <video className={style.jumbotron_video} width="100%" height="100%" autoPlay="autoplay" loop="loop" muted poster={JumboThumb}>
                <source src={Jumbo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}