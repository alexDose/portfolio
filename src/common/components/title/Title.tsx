import s from './Title.module.css'

type TitleType = {
    text: string
}

export const Title = (props: TitleType) => {
    return (
        <div className={s.title}>
            <h2>{props.text}</h2>
        </div>
    )
}