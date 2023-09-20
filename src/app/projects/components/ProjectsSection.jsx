import Image from "next/image";
import proj from "../../../../public/projects/proj1.jpg";
import proj1a from "../../../../public/projects/proj1a.png";
import styles from "../../styles/projects.module.css";

export default function ProjectsSection() {
	return (
		<section className={styles.project_section}>
			<article>
				<h3>01</h3>
				<h2>Taco Aw</h2>
				<h3>Full Stack Developer</h3>
				<p>
					A website for a taco restaurant consists of a CMS and user-side,
					with a front-end that uses React JS and Redux as its state
					management.
				</p>
			</article>
			<figure>
				<Image
					src={proj}
					width={500}
					height={500}
					alt='potrait of my proj'
				/>
				<Image
					src={proj1a}
					width={500}
					height={500}
					alt='potrait of my proj with second picture'
				/>
				<Image
					src={proj}
					width={500}
					height={500}
					alt='potrait of my proj'
				/>
				<Image
					src={proj1a}
					width={500}
					height={500}
					alt='potrait of my proj with second picture'
				/>
			</figure>
		</section>
	);
}
