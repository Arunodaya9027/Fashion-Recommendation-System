const CelebsFashionSection = () => {
    return (
        <section className="celebs-fashion-section">
            <div className="celebs-fashion-section__container">
                <div className="celebs-fashion-section__content">
                    <div className="celebs-fashion-section__content__left">
                        <h2 className="celebs-fashion-section__content__left__title">
                            Celebs Fashion
                        </h2>
                        <p className="celebs-fashion-section__content__left__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                            voluptatum, quod, quae, quia quibusdam voluptas quos dolorum
                            voluptatibus sapiente quas pariatur voluptates. Quisquam voluptatum,
                            quod, quae, quia quibusdam voluptas quos dolorum voluptatibus
                            sapiente quas pariatur voluptates.
                        </p>
                        <button className="celebs-fashion-section__content__left__button">
                            Explore
                        </button>
                    </div>
                    <div className="celebs-fashion-section__content__right">
                        <div className="celebs-fashion-section__content__right__image-container">
                            <img
                                src="https://images.unsplash.com/photo-1611095788041-7c1b4c0d3b5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VsZWJzJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                alt="celebs-fashion"
                                className="celebs-fashion-section__content__right__image-container__image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CelebsFashionSection;