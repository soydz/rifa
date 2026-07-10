import { useState } from "react";
import { Button } from "./Button";

interface ChooseNumbersProps {
    onStartGame: (inicio: number, fin: number) => void;
}

export function ChooseNumbers({ onStartGame }: Readonly<ChooseNumbersProps>) {
    const [inicio, setInicio] = useState(1);
    const [fin, setFin] = useState(50);

    const handleSubmit = (e: any) => {
        if (fin < inicio) {
            return alert("El numero final debe ser mayor al inicial");
        }
        e.preventDefault();
        onStartGame(inicio, fin);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6 max-w-96">
            <p>Selecciona el numero inicial y final</p>
            <div className="flex gap-6 justify-center">
                <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="inicial">Inicial</label>
                    <input type="number" id="inicial" className="border rounded-lg py-2.5 px-3 w-full" value={inicio} onChange={(e) => setInicio(Number(e.target.value))} />
                </div>
                <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="inicial">Final</label>
                    <input type="number" id="inicial" className="border rounded-lg py-2.5 px-3 w-full" value={fin} onChange={(e) => setFin(Number(e.target.value))} />
                </div>
            </div>
            <Button type="submit" >Iniciar</Button>
        </form>
    )
}