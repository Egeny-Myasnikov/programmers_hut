import Image from 'next/image'
import s from './style.module.css'


export const ProjectCard = ({ projectImg, projectTitle }) => {
    return (
        <div className={s.projectCard}>
            <div className={s.imgWrap}>
                <Image
                    className={s.img}
                    src={projectImg}
                    alt={projectTitle}
                />
            </div>
            <div className={s.info}>
                <h2> {projectTitle}</h2>
            </div>
        </div>
    )
}
