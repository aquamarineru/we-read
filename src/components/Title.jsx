export default function Title({ children, type }) {
    if(type === 'small'){
        return <h3 className="text-xl">{children}</h3>
    }
    return (
        <h2 className="text-xl md:text-3xl text-title ">
            {children}
        </h2>
    )
}