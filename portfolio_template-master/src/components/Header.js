// Import Assets
import profile from '../assets/Profile2.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Kandes S" />

            <div className='header__content'>
                <h1>Hi, I'm Kandes</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:kandes.ktvs@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;
