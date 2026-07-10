import { useRef } from "react";
import { useLongPress } from "use-long-press";

interface SquareProps {
    number: number;
    onSquareClick: (number: number) => void;
    onSquareLongPress: (number: number) => void;
    isClicked: boolean;
    isWinningNumber: boolean;
}

export function Square({ number, onSquareClick, onSquareLongPress, isClicked, isWinningNumber }: Readonly<SquareProps>) {
    const isLongPressActive = useRef(false);

    const bind = useLongPress(() => {
        isLongPressActive.current = true;
        onSquareLongPress(number);
    }, { threshold: 500 });

    const handleClick = () => {
        if (!isLongPressActive.current) {
            onSquareClick(number)
        }
    }

    return (
        <button
            onClick={() => handleClick()}
            {...bind()}
            className={`flex justify-center items-center text-2xl border w-full aspect-square cursor-pointer rounded-lg 
                ${isClicked && "bg-red-800"} ${isWinningNumber && "bg-green-800 "}`}
        >
            {number}
        </button>
    )
}