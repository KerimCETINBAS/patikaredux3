import React, {useState, useEffect} from 'react'


export default function numarator({upperLimit, maxValue, minValue, onChanged}) {
    const [number, setNumber] = useState(0)

    useEffect(() => onChanged && onChanged(new CustomEvent("changed", {  detail:number})) ,[number])

    const checkNumber = (number) => {
        return number < ( minValue || 0 ) ?
                minValue || 0 :
                number < ( maxValue || 10 ) ?
                number :
                maxValue || 10
    }
    return (
        <span className='inline'>
            <span 
                className='h-6 w-6 inline-flex items-center justify-center  text-white font-bold select-none bg-rose-500'
                onClick={() => setNumber(checkNumber(number - 1))} >-</span>
            <input type="number" name="" 
                value={number}
                className='w-10 inline text-center  items-center justify-center'
                onChange={e =>
                    setNumber(checkNumber(e.target.value)) }  />
            <span
                className='h-6 w-6 inline-flex items-center justify-center  text-white font-bold select-none bg-rose-500'
                onClick={() => setNumber(checkNumber(number + 1))}>+</span> 
        
        </span>
    )
}
