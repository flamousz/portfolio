import Image from 'next/image'
import proj from '../../../../public/projects/proj1.jpg'

export default function ProjectsSection() {

    return(
        <article>
            <figure>
                <Image
                    src={proj}
                    width={500}
                    height={500}
                    alt='potrait of my proj'
                />
            </figure>
        </article>
    )
}