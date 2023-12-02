// Library
import { Link } from "react-router-dom"

// Style
import style from './style/Home.module.css'

// Assets
import Jumbo from './assets/jumbo.mp4'
import JumboThumb from './assets/jumbo-thumb.png'
import alfamart from './assets/alfamart.webp'

// Components
import Footer from './components/footer'

export default function Home() {
    return (
        <main>
            <section className={style.jumbotron}>
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
            </section>
            <section className={style.content_1}>
                <h1>WHAT DO YOU NEED?</h1>
                <p>Drink? Food? Snack? Coffe? Ice Cream? Justice?</p>
            </section>
            <section className={style.content_2}>
                <div className={style.content_layout}>
                    <div className={style.content_layout_1}>
                        <h2>YOU DEFINITELY NEED THIS.</h2>
                        <p>Cause We Will Guide You to Find Nearest Alfamart in CINERE to Satisfy Your Desires.</p>
                    </div>
                    <div className={style.content_layout_2}>
                        <img src={alfamart} width="100%" alt="alfamart pic" />
                    </div>
                </div>
            </section>
            <section className={style.content_3}>
                <h1>Wanna Try?</h1>
                <Link to="/map">
                    <button>Try Now</button>
                </Link>
            </section>
            <Footer />
        </main>
    )
}