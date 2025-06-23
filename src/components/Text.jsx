export default function Text({children, size, weight, color}) {

    const weightHandler = () => {
        switch (weight) {
            case "bold":
                return `font-bold`
            case "light":
                return `font-light`
            case "semibold":
                return `font-semibold`
            default: 
                return `font-regular`
        }
    }

    const sizeHandler = () => {
        switch (size) {
            case "normal":
                return `text-[1rem]`
            case "subheader":
                return `text-[1.5rem]`
            case "header":
                return `text-[2rem]`
            default:
                return `text-[${size}]`
        }
    }

    // const colorHandler = () => {
    //     if (color !== "") {
    //         return `text-[${color}]`
    //     } else {
    //         return `text-gray-900`
    //     }
    // }
        


    return (
        <>
            <p className={`font-Inter} text-gray-900 ${weightHandler()} ${sizeHandler()}`}>{children}</p>
        </>
    )
}