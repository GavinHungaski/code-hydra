import { useState } from 'react'

export default function Button(props) {
  const [count, setCount] = useState(0)

    return (
        <button 
            style={{
                background: props.color,
                margin: 5
            }}
            onClick={
                () => setCount(count + 1)
            }>
            <p>
                {props.text} -- {count}
            </p>
        </button>
    )
}