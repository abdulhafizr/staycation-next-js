import Image from 'next/image'

export default function Detail() {
    return (
        <div className="detail">
            <div className="detail__gallery">
                <div className="detail__gallery-item">
                    <Image 
                        src="/dummys/gallery-1.png"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="detail__gallery-item">
                    <Image 
                        src="/dummys/gallery-2.png"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="detail__gallery-item">
                    <Image 
                        src="/dummys/gallery-3.png"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>

            <div className="detail__wrapper">
                <div className="detail__description">
                    <h1 className="detail__description-title">About the place</h1>
                    <p className="detail__description-body">Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.</p>
                    <p className="detail__description-body">Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.</p>
                    <p className="detail__description-body">Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The national agency for design: enabling Singapore to use design for economic growth and to make lives better.</p>

                    <div className="detail__features">
                        <div className="detail__features-item">
                            <img 
                                src="/icons/ic_bedroom.png"
                                className="detail__features-icon"
                            />
                            <p className="detail__features-label">5 bedroom</p>
                        </div>
                        <div className="detail__features-item">
                            <img 
                                src="/icons/ic_livingroom.png"
                                className="detail__features-icon"
                            />
                            <p className="detail__features-label">1 living room</p>
                        </div>
                        <div className="detail__features-item">
                            <img 
                                src="/icons/ic_bathroom.png"
                                className="detail__features-icon"
                            />
                            <p className="detail__features-label">3 bathroom</p>
                        </div>
                        <div className="detail__features-item">
                            <img 
                                src="/icons/ic_diningroom.png"
                                className="detail__features-icon"
                            />
                            <p className="detail__features-label">1 dinning room</p>
                        </div>
                        <div className="detail__features-item">
                            <img 
                                src="/icons/ic_wifi.png"
                                className="detail__features-icon"
                            />
                            <p className="detail__features-label">10 mbp/s</p>
                        </div>
                        <div className="detail__features-item">
                            <img 
                                src="/icons/ic_ac.png"
                                className="detail__features-icon"
                            />
                            <p className="detail__features-label">7 unit ready</p>
                        </div>
                        <div className="detail__features-item">
                            <img 
                                src="/icons/ic_kulkas.png"
                                className="detail__features-icon"
                            />
                            <p className="detail__features-label">2 refigrator</p>
                        </div>
                        <div className="detail__features-item">
                            <img 
                                src="/icons/ic_tv.png"
                                className="detail__features-icon"
                            />
                            <p className="detail__features-label">4 television</p>
                        </div>
                    </div>
                </div>

                <div className="order">
                    <div className="order__card">
                        <h1>Start Booking</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
