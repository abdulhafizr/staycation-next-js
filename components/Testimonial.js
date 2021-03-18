import {useEffect, useState} from 'react'
import Image from 'next/image'

export default function Testimonial({testimonial}) {
    
    const [testiCount, setTestiCount] = useState([]);

    useEffect(() => {
        for(let i= 0; i < testimonial.rate; i++) {
            testiCount.push(i);
        }
    }, [])

    return (
        <div className="testimonial">
            <div className="testimonial__photo">
                <img 
                    src={`/dummys/${testimonial.photo}`}
                    className="testimonial__photo-item"
                />
            </div>
            <div className="testimonial__caption">
                <h1 className="testimonial__title">Happy Family</h1>
                <div className="testimonial__rate">
                    {
                        (testiCount.length > 0) && (
                            testiCount.map((test) => (
                                <Image 
                                    key={test}
                                    src="/icons/ic_star.svg"
                                    width="30.82px"
                                    height="30.12px"
                                />
                            ))
                        )
                    }
                </div>
                <p className="testimonial__message">{testimonial.testimonial}</p>
                <p className="testimonial__name">{testimonial.name}, <span>{testimonial.job}</span></p>
                <button className="btn shadow">Read Their Story</button>
            </div>
        </div>
    )
}
