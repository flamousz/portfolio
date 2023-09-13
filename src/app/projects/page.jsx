import styles from '../styles/projects.module.css'
import FilterCrum from './components/FilterCrum'
import HeaderProject from './components/HeaderProject'
import ProjectsSection from './components/ProjectsSection'

export default function Projects() {

    return(
        <main className={ ` container ${styles.main} ` }>
            <HeaderProject/>
            <FilterCrum/>
            <ProjectsSection/>
        </main>
    )
}