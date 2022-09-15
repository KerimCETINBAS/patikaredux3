
import React,{ useState, useEffect} from 'react'

export default function input( {label, value, onChange} ) {
  const [_value, setValue] = useState(value)
  
  useEffect(()=>onChange && onChange(new CustomEvent("onChange", {detail: _value})))
  return (
    <label className='flex flex-col gap-2 justify-center text-rose-500 '>
        {label}
          <input type="text" defaultValue={_value} onChange={(e) => setValue(e.target.value)}
              className="
              border-1 border-rose-400
              bg-transparent rounded-sm
              px-4 py-1 text-rose-400
              focus:text-rose-500 outline-rose-500
              hover:border-rose-300 duration-300
              " />
    </label> 
        
  )
}
