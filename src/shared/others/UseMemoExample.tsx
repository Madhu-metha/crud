import { useMemo, useState } from "react";

const useMemoExample = () => {
    const [number, setNumber] = useState<number>(0);
    const [count, setCount] = useState<number>(2);

    // let squareNumber=0;

    // useEffect(()=> {
    //   squareNumber = number * number;
    // }, [number])

    const squareNumber = useMemo(() => {
        return number * number;
    }, [number])

    return (
        <>
            <span>{squareNumber}</span>
            <span>{count}</span>

            <button onClick={() => { setNumber(number + 1) }}>Increase Number</button>
            <button onClick={() => { setCount(count + 1) }}>Increase Count</button>
        </>
    )
};

export default useMemoExample;