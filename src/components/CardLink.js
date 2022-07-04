import styles from './CardLink.module.css'

const CardLink = ({ title, url, description }) => {
    return (
        <a href={ url } className={styles.card}>
            <h2>{ title } &rarr;</h2>
            <p>{ description }</p>
        </a>
    )
}

export default CardLink