export function Form({ input, setInput, setNumbers }) {

    const handleSubmit = (event) => {
        event.preventDefault()
        setNumbers(input)
        setInput([1, 50])
    }

    const handleChange = (event) => {
        const id = event.target.id
        if (id === 'inicio') {
            const num = event.target.value
            setInput(() => {
                const copia = [...input]
                copia[0] = num
                return copia
            })


        } else if (id === 'fin') {
            const num = event.target.value
            setInput(() => {
                const copia = [...input]
                copia[1] = num
                return copia
            })

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="inicio">Inicio</label>
                <input id="inicio" type="number" onChange={handleChange} value={input[0]} />
            </div>
            <div>
                <label htmlFor="fin" >Fin</label>
                <input id="fin" type="number" onChange={handleChange} value={input[1]} />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}