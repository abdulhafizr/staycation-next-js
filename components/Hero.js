import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Hero() {
    return (
        <div className={`${styles.hero}`}>
            <div className={styles['hero__caption']}>
                <h1 className={styles['hero__caption-title']}>Forget Busy Work,<br/> Start Next Vacation</h1>
                <p className={styles['hero__caption-description']}>We provide what you need to enjoy your  holiday with family. Time to make another memorable moments.</p>
                <button className="btn shadow">Show Me Now</button>

                <div className={styles['infomation']}>
                    <div className={styles['infomation__item']}>
                        <Image 
                            src="/icons/ic_traveler.png"
                            width="32px"
                            height="32px"
                            objectFit="contain"
                            className={styles['infomation__item-icon']}
                        />
                        <p className={styles['infomation__item-label']}>80,409 <span>travelers</span></p>
                    </div>
                    <div className={styles['infomation__item']}>
                        <Image 
                            src="/icons/ic_treasure.png"
                            width="32px"
                            height="32px"
                            objectFit="contain"
                            className={styles['infomation__item-icon']}
                        />
                        <p className={styles['infomation__item-label']}>862 <span>treasure</span></p>
                    </div>
                    <div className={styles['infomation__item']}>
                        <Image 
                            src="/icons/ic_cities.png"
                            width="32px"
                            height="32px"
                            objectFit="contain"
                            className={styles['infomation__item-icon']}
                        />
                        <p className={styles['infomation__item-label']}>1,492 <span>cities</span></p>
                    </div>
                </div>
            </div>
            <div className={styles['hero__banner']}>
                <Image 
                    src="/ilustrations/hero.png"
                    height="410.63px"
                    width="465.12px"
                    objectFit="cover"
                    className={styles['hero__banner-image']}
                />
            </div>
        </div>
    )
}
