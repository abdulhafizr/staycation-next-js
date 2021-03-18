import Image from 'next/image'

export default function MostPick() {
    return (
        <div className="mostpick">
            <h1 className="mostpick__title">Most Picked</h1>
            
            <div className="mostpick__gallery">
                <div className="mostpick__gallery-item">
                    <span className="mostpick__gallery-item-badge">$50 per night</span>
                    <Image 
                        src="/dummys/mp_1.png"
                        layout="fill"
                        objectFit="cover"
                        className="mostpick__gallery-item-image"
                    />
                    <div className="mostpick__gallery-item-caption">
                        <p className="mostpick__gallery-item-caption-label">Blue Origin Fams</p>
                        <p className="mostpick__gallery-item-caption-location">Jakarta, Indonesia</p>
                    </div>
                </div>
                <div className="mostpick__gallery-item">
                    <span className="mostpick__gallery-item-badge">$50 per night</span>
                    <Image 
                        src="/dummys/mp_2.png"
                        layout="fill"
                        objectFit="cover"
                        className="mostpick__gallery-item-image"
                    />
                    <div className="mostpick__gallery-item-caption">
                        <p className="mostpick__gallery-item-caption-label">Blue Origin Fams</p>
                        <p className="mostpick__gallery-item-caption-location">Jakarta, Indonesia</p>
                    </div>
                </div>
                <div className="mostpick__gallery-item">
                    <span className="mostpick__gallery-item-badge">$50 per night</span>
                    <Image 
                        src="/dummys/mp_3.png"
                        layout="fill"
                        objectFit="cover"
                        className="mostpick__gallery-item-image"
                    />
                    <div className="mostpick__gallery-item-caption">
                        <p className="mostpick__gallery-item-caption-label">Blue Origin Fams</p>
                        <p className="mostpick__gallery-item-caption-location">Jakarta, Indonesia</p>
                    </div>
                </div>
                <div className="mostpick__gallery-item">
                    <span className="mostpick__gallery-item-badge">$50 per night</span>
                    <Image 
                        src="/dummys/mp_4.png"
                        layout="fill"
                        objectFit="cover"
                        className="mostpick__gallery-item-image"
                    />
                    <div className="mostpick__gallery-item-caption">
                        <p className="mostpick__gallery-item-caption-label">Blue Origin Fams</p>
                        <p className="mostpick__gallery-item-caption-location">Jakarta, Indonesia</p>
                    </div>
                </div>
                <div className="mostpick__gallery-item">
                    <span className="mostpick__gallery-item-badge">$50 per night</span>
                    <Image 
                        src="/dummys/mp_5.png"
                        layout="fill"
                        objectFit="cover"
                        className="mostpick__gallery-item-image"
                    />
                    <div className="mostpick__gallery-item-caption">
                        <p className="mostpick__gallery-item-caption-label">Blue Origin Fams</p>
                        <p className="mostpick__gallery-item-caption-location">Jakarta, Indonesia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
