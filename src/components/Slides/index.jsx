import styles from "./slides.module.scss"
import Logo from "../../assets/solidariedade.png"

function SlideInfinite() {
    return ( 
        <>
            <div className={styles.slider}>
                <div className={styles.slide_track}>
                    <div className={styles.slide}>
                        <img src={Logo} height="100" width="100" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={Logo} height="100" width="100" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={Logo} height="100" width="100" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={Logo} height="100" width="100" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={Logo} height="100" width="100" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={Logo} height="100" width="100" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={Logo} height="100" width="100" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={Logo} height="100" width="100" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={Logo} height="100" width="100" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={Logo} height="100" width="100" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={Logo} height="100" width="100" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={Logo} height="100" width="100" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={Logo} height="100" width="100" alt="" />
                    </div>
                    <div className={styles.slide}>
                        <img src={Logo} height="100" width="100" alt="" />
                    </div>
                </div>
            </div>
        </>
     );
}

export default SlideInfinite;