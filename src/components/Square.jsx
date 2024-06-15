export function Square({ numbers }) {

    const casillas = []

    for (let i = numbers[0]; i <= numbers[1]; i++) {
        casillas.push(i)
    }

    const handleClick = (event) => {
        const casilla = event.target.classList
        if (casilla.contains('red')) {
            casilla.remove('red')
        } else {
            casilla.add('red')
        }
    }

    return (
        <>
            <ul>
                {casillas.map(item => (
                    <li
                        key={item}
                        id={item}
                        className="square"
                        onClick={handleClick}>
                        {item}
                    </li>
                ))}
            </ul>
        </>

    )
}