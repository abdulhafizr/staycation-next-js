import Image from 'next/image'

export default function House() {
    return (
        <div className="house">
            <h1 className="house__title">Houses with beauty backyard</h1>
            <div className="house__gallery">
                
                <div className="house__gallery-item">
                    <span className="house__gallery-badge">Popular Choice</span>
                    <div className="house__gallery-image">
                        <Image 
                            src="/dummys/house_1.png"
                            width="222.78px"
                            height="180px"
                            className="house__gallery-image"
                        />
                    </div>
                    <h1 className="house__gallery-title">Tabby Town</h1>
                    <p className="house__gallery-location">Gunung Batu, Indonesia</p>
                </div>

                <div className="house__gallery-item">
                    <div className="house__gallery-image">
                        <Image 
                            src="/dummys/house_2.png"
                            width="222.78px"
                            height="180px"
                            className="house__gallery-image"
                        />
                    </div>
                    <h1 className="house__gallery-title">Anggana</h1>
                    <p className="house__gallery-location">Bogor, Indonesia</p>
                </div>

                <div className="house__gallery-item">
                    <div className="house__gallery-image">
                        <Image 
                            src="/dummys/house_3.png"
                            width="222.78px"
                            height="180px"
                            className="house__gallery-image"
                        />
                    </div>
                    <h1 className="house__gallery-title">Seattle Rain</h1>
                    <p className="house__gallery-location">Jakarta, Indonesia</p>
                </div>

                <div className="house__gallery-item">
                    <div className="house__gallery-image">
                        <Image 
                            src="/dummys/house_4.png"
                            width="222.78px"
                            height="180px"
                            className="house__gallery-image"
                        />
                    </div>
                    <h1 className="house__gallery-title">Wodden Pit</h1>
                    <p className="house__gallery-location">Wonosobo, Indonesia</p>
                </div>

            </div>
        </div>
    )
}
