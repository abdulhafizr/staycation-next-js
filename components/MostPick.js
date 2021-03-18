import Image from 'next/image'

export default function MostPick({mostPicked}) {
    return (
        <div className="mostpick">
            <h1 className="mostpick__title">Most Picked</h1>
            
            <div className="mostpick__gallery">
                {
                    (mostPicked !== undefined) && (
                        mostPicked.map((mostpick, index) => (
                            <div className="mostpick__gallery-item" key={index}>
                                <span className="mostpick__gallery-item-badge">${mostpick.price} per night</span>
                                <Image 
                                    src={`/dummys/${mostpick.photo}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="mostpick__gallery-item-image"
                                />
                                <div className="mostpick__gallery-item-caption">
                                    <p className="mostpick__gallery-item-caption-label">{mostpick.name}</p>
                                    <p className="mostpick__gallery-item-caption-location">{mostpick.location}</p>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}
