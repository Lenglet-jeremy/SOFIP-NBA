import styles from "./Header.module.scss";

export default function Header () {

    return (
        <>
        <div className={`${styles.main}`}>
            
            <div className={`${styles.left}`}>
                <h1 className={`${styles.mainTitle}`}>NBA</h1>
            </div>
            
            <div className={`${styles.right}`}>
                <button className={`${styles.buttons}`}>East</button>
                <button className={`${styles.buttons}`}>West</button>
                <button className={`${styles.buttons}`}>All</button>
            </div>

        </div>
        </>
    )
}