export const SVGSprite = ({ id, className, title, onClick }) => {
    return (
        <svg title={title} className={className} onClick={onClick}>
            <use xlinkHref={`icons.svg#${id}`} />
        </svg>
    )
}
