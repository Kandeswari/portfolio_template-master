// Import Assets
import profile from '../assets/Profile2.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Kandes S" />

            <div className='header__content'>
                <h1>Hi, I'm Kandes</h1>
                <p>Blockchain Developer</p>
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;