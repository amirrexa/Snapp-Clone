import "./card.scss"

interface CardProps {
    className?: string,
    children: any,
}

export const Card = (props: CardProps) => {
    return (
        <div className={`sc-card ${props.className ? props.className : ''}`}>
            {props.children}
        </div>
    )
}