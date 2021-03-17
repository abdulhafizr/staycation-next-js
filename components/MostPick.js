import Image from 'next/image'
import styles from '../styles/Home.module.scss';

export default function MostPick() {
    return (
        <div className={styles['mostpick']}>
            <h1 className={styles['mostpick__title']}>Most Picked</h1>
            
            <div className={styles['mostpick__gallery']}>
                <div className={styles['mostpick__gallery-item']}>
                    <span className={styles['mostpick__gallery-item-badge']}>$50 per night</span>
                    <Image 
                        src="/dummys/mp_1.png"
                        layout="fill"
                        objectFit="cover"
                        className={styles['mostpick__gallery-item-image']}
                    />
                    <div className={styles['mostpick__gallery-item-caption']}>
                        <p className={styles['mostpick__gallery-item-caption-label']}>Blue Origin Fams</p>
                        <p className={styles['mostpick__gallery-item-caption-location']}>Jakarta, Indonesia</p>
                    </div>
                </div>
                <div className={styles['mostpick__gallery-item']}>
                    <span className={styles['mostpick__gallery-item-badge']}>$50 per night</span>
                    <Image 
                        src="/dummys/mp_2.png"
                        layout="fill"
                        objectFit="cover"
                        className={styles['mostpick__gallery-item-image']}
                    />
                    <div className={styles['mostpick__gallery-item-caption']}>
                        <p className={styles['mostpick__gallery-item-caption-label']}>Blue Origin Fams</p>
                        <p className={styles['mostpick__gallery-item-caption-location']}>Jakarta, Indonesia</p>
                    </div>
                </div>
                <div className={styles['mostpick__gallery-item']}>
                    <span className={styles['mostpick__gallery-item-badge']}>$50 per night</span>
                    <Image 
                        src="/dummys/mp_3.png"
                        layout="fill"
                        objectFit="cover"
                        className={styles['mostpick__gallery-item-image']}
                    />
                    <div className={styles['mostpick__gallery-item-caption']}>
                        <p className={styles['mostpick__gallery-item-caption-label']}>Blue Origin Fams</p>
                        <p className={styles['mostpick__gallery-item-caption-location']}>Jakarta, Indonesia</p>
                    </div>
                </div>
                <div className={styles['mostpick__gallery-item']}>
                    <span className={styles['mostpick__gallery-item-badge']}>$50 per night</span>
                    <Image 
                        src="/dummys/mp_4.png"
                        layout="fill"
                        objectFit="cover"
                        className={styles['mostpick__gallery-item-image']}
                    />
                    <div className={styles['mostpick__gallery-item-caption']}>
                        <p className={styles['mostpick__gallery-item-caption-label']}>Blue Origin Fams</p>
                        <p className={styles['mostpick__gallery-item-caption-location']}>Jakarta, Indonesia</p>
                    </div>
                </div>
                <div className={styles['mostpick__gallery-item']}>
                    <span className={styles['mostpick__gallery-item-badge']}>$50 per night</span>
                    <Image 
                        src="/dummys/mp_5.png"
                        layout="fill"
                        objectFit="cover"
                        className={styles['mostpick__gallery-item-image']}
                    />
                    <div className={styles['mostpick__gallery-item-caption']}>
                        <p className={styles['mostpick__gallery-item-caption-label']}>Blue Origin Fams</p>
                        <p className={styles['mostpick__gallery-item-caption-location']}>Jakarta, Indonesia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
