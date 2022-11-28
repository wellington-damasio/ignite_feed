import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/wellington-damasio.png" alt="" />
                <strong>Wellington Damasio</strong>
                <span>Software Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} /> 
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}

export default Sidebar