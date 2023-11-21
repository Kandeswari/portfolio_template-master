// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';
import PortfolioSite from '../assets/PortfolioSite.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Portfolio Site</h3>
                    <img src={PortfolioSite} alt="Portfolio Site Page" />
                    <p>I designed and built my portfolio site from the ground up, tailoring it to my unique style.I took a hands-on approach to creating my portfolio site.
                    </p>

                    <a href="https://mute-bonus-4684.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Kandeswari/portfolio_template-master" target="_blank" className="button">Code</a>
                </div>

              {/*   <div className="projects__card">
                    <h3>Compound</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
perferendis ratione rerum dolorem.
                    </p>

                    <a href="https://compound.finance/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/compound-finance/compound-protocol" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Aave</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
perferendis ratione rerum dolorem.
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div> */}
            </div>
        </section>
    );
}

export default Projects;
