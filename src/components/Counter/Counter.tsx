import React, {useState} from 'react';

export const Counter = () => {
    //count - переменная
    //setCount - функция которая будет менять эту переменную
    const [count, setCount] = useState<number>(0)

    const onClickPlus = () => {
        setCount(count +1)
        console.log(count)
    }

    const onClickMinus = () => {
        setCount(count -1)
    }

    return (
        <>
            <h2>Счетчик:</h2>
            <h1>{count}</h1>
            <button className="minus" onClick={onClickMinus}>- Минус</button>
            <button className="plus" onClick={onClickPlus}>Плюс +</button>
        </>
    );
};
