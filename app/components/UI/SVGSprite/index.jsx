export const SVGSprite = ({ id, className }) => {
    return (
        <svg className={className}>
            <use xlinkHref={`icons.svg#${id}`} />
        </svg>
    )
}
