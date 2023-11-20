
import exploreImage from '../../assets/images/explore.png';
import './ExploreSection.css';

const ExploreSection = () => {
    return (
        <div className="explore-section">
            <div className="explore-section-content">
                <div className="explore-section-content-left">
                    <h2>Explore</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
                    </p>
                    <button className="explore-section-content-left-button">Explore</button>
                </div>
                <div className="explore-section-content-right">
                    <img src={exploreImage} alt="explore" />
                </div>
            </div>
        </div>
    );
}

export default ExploreSection;