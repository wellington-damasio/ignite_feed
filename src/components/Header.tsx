import styles from './Header.module.css'
import igniteLogo from '../assets/ignite_symbol.png'

const Header = () => {
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo do Ignite" />
            <strong>Ignite Feed</strong>
        </header>
    )
}

export default Header