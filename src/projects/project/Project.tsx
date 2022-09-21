import s from './Project.module.css'

type ProjectType = {
    name: string
    description: string
}

export const Project = (props: ProjectType) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <div className={s.button}>
                    <a href="">Seen</a>
                </div>
            </div>
            <div className={s.text}>
                <div className={s.title}>{props.name}</div>
                <div className={s.description}>{props.description}</div>
            </div>
        </div>
    )
}