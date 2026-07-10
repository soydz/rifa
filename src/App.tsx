import { useEffect, useState } from 'react';
import './App.css'
import { Button, ChooseNumbers, Square } from './components'

function App() {
  const [inicio, setInicio] = useState<number | null>();
  const [fin, setFin] = useState<number | null>();
  const [clickedNumbers, setClickedNumbers] = useState<number[]>([]);
  const [winNumbers, setWinNumbers] = useState<number[]>(() => {
    const stored = localStorage.getItem("winNumbers");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('winNumbers', JSON.stringify(winNumbers));
  }, [winNumbers])

  const onStartGame = (inicio: number, fin: number) => {
    setInicio(inicio);
    setFin(fin);
  }

  const resetGame = () => {
    setInicio(null);
    setFin(null);
    setClickedNumbers([]);
  }

  const newGame = () => {
    resetGame();
    setWinNumbers([]);
    localStorage.removeItem("winNumbers");
  }

  const handleClickSquare = (number: number) => {
    setClickedNumbers(prev => {
      if (prev.includes(number)) {
        return prev.filter(n => n !== number);
      } else {
        return [...prev, number];
      }
    });
  }

  const handleLongPressSquare = (number: number) => {
    setWinNumbers(prev => {
      if (prev.includes(number)) {
        return prev.filter(n => n != number);
      } else {
        return [...prev, number];
      }
    });
  }


  return (
    <div className='mt-8 mx-4 sm:mx-0'>
      {!inicio && !fin && (
        <div className='w-full flex justify-center items-center'>
          <ChooseNumbers
            onStartGame={onStartGame}
          />
        </div>
      )}

      {inicio && fin && (
        <>
          <div className='flex justify-between sm:mx-8'>
            <div>
              <Button onClick={() => resetGame()} className="bg-red-500 text-white">Reset</Button>
            </div>
            <div>
              <Button onClick={() => newGame()} className="bg-blue-500 text-white">Nuevo Juego</Button>
            </div>
          </div>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-6 my-8 sm:mx-8'>
            {Array.from({ length: (fin - inicio) + 1 }, (_, index) => {
              const number = inicio + index;
              return <Square
                key={number}
                number={number}
                onSquareClick={handleClickSquare}
                onSquareLongPress={handleLongPressSquare}
                isClicked={clickedNumbers.includes(number)}
                isWinningNumber={winNumbers.includes(number)}
              />
            })}
          </div>
        </>
      )}

      <div className='py-6 text-xl hover:underline'>
        <a href="https://soydz.com" target='_blank'>soydz.com</a>
      </div>

    </div>
  )
}

export default App
