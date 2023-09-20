import getAllproject from '../../../lib/getAllproject'
import styles from '../styles/projects.module.css'
import FilterCrum from './components/FilterCrum'
import HeaderProject from './components/HeaderProject'
import ProjectsSection from './components/ProjectsSection'

export default async function Projects() {
    const projectData = await getAllproject()

    console.log(projectData,'< project data');

    return(
        <main className={ ` container ${styles.main} ` }>
            <p>{projectData[0]}</p>
            <HeaderProject/>
            <FilterCrum/>
            <ProjectsSection/>
            <ProjectsSection/>
        </main>
    )
}

