
// Importing Helpers
import React from 'react';
import './FashionPicksSection.css';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectUser } from '../../features/userSlice';
// import { auth } from '../../firebase';

const FashionPicksSection = () => {

    // Importing Images
    const fashionPick1 = require('../../assets/images/fashion-pick-1.png').default;
    const fashionPick2 = require('../../assets/images/fashion-pick-2.png').default;
    const fashionPick3 = require('../../assets/images/fashion-pick-3.png').default;

    // const user = useSelector(selectUser);
    // const handleAuth = () => {
        // if (user) {
        //     auth.signOut();
        // }
    // }
    

    return (
        <div className="fashion-picks-section">
            <div className="fashion-picks-section__content">
                <h1 className="fashion-picks-section__title">Fashion Picks</h1>
                <p className="fashion-picks-section__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <div className="fashion-picks-section__items">
                    <div className="fashion-picks-section__item">
                        <img src={fashionPick1} alt="Fashion pick 1" />
                        <div className="fashion-picks-section__item-content">
                            <h2 className="fashion-picks-section__item-title">Fashion pick 1</h2>
                            <p className="fashion-picks-section__item-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                        </div>
                    </div>
                    <div className="fashion-picks-section__item">
                        <img src={fashionPick2} alt="Fashion pick 2" />
                        <div className="fashion-picks-section__item-content">
                            <h2 className="fashion-picks-section__item-title">Fashion pick 2</h2>
                            <p className="fashion-picks-section__item-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                        </div>
                    </div>
                    <div className="fashion-picks-section__item">
                        <img src={fashionPick3} alt="Fashion pick 3" />
                        <div className="fashion-picks-section__item-content">
                            <h2 className="fashion-picks-section__item-title">Fashion pick 3</h2>
                            <p className="fashion-picks-section__item-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionPicksSection;