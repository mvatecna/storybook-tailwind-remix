import type { ChangeEvent} from 'react';
import { useState } from 'react'

type TextInputGenProps = {
  placeholder: string
}

export default function TextInputGen({placeholder} : TextInputGenProps) {
  const [input,  setInput] = useState("");

  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInput(e.target.value)
    console.log(input);
  }


  return (
    <input type="text" placeholder={placeholder} className="input input-bordered w-full max-w-xs" value={input} onChange={handleChange} />
  )
}
