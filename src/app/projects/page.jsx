import styles from '../styles/projects.module.css'
import FilterCrum from './components/FilterCrum'
import HeaderProject from './components/HeaderProject'

export default function Projects() {

    return(
        <main className={ ` container ${styles.main} ` }>
            <HeaderProject/>
            <FilterCrum/>
        </main>
    )
}