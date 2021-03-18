import Image from 'next/image'

export default function List({title, data}) {
    return (
        <div className="list">
            <h1 className="list__title">{title}</h1>
            <div className="list__gallery">
                {
                    (data !== undefined) && (
                        data.map((list) => (
                            <div className="list__gallery-item">
                                <span className="list__gallery-badge">Popular Choice</span>
                                <div className="list__gallery-image">
                                    <Image 
                                        src={`/dummys/${list.photo}`}
                                        width="222.78px"
                                        height="180px"
                                        className="list__gallery-image"
                                    />
                                </div>
                                <h1 className="list__gallery-title">{list.name}</h1>
                                <p className="list__gallery-location">{list.location}</p>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}
