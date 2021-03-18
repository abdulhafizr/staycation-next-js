import Image from 'next/image'

export default function Hero({travelers, treasure, cities}) {
    return (
        <div className="hero">
            <div className="hero__caption">
                <h1 className="hero__caption-title">Forget Busy Work,<br/> Start Next Vacation</h1>
                <p className="hero__caption-description">We provide what you need to enjoy your  holiday with family. Time to make another memorable moments.</p>
                <button className="btn shadow">Show Me Now</button>

                <div className="infomation">
                    <div className="infomation__item">
                        <Image 
                            src="/icons/ic_traveler.png"
                            width="32px"
                            height="32px"
                            objectFit="contain"
                            className="infomation__item-icon"
                        />
                        <p className="infomation__item-label">{travelers} <span>travelers</span></p>
                    </div>
                    <div className="infomation__item">
                        <Image 
                            src="/icons/ic_treasure.png"
                            width="32px"
                            height="32px"
                            objectFit="contain"
                            className="infomation__item-icon"
                        />
                        <p className="infomation__item-label">{treasure} <span>treasure</span></p>
                    </div>
                    <div className="infomation__item">
                        <Image 
                            src="/icons/ic_cities.png"
                            width="32px"
                            height="32px"
                            objectFit="contain"
                            className="infomation__item-icon"
                        />
                        <p className="infomation__item-label">{cities} <span>cities</span></p>
                    </div>
                </div>
            </div>
            <div className="hero__banner">
                <img 
                    src="/ilustrations/hero.png"
                    className="hero__banner-image"
                />
            </div>
        </div>
    )
}
