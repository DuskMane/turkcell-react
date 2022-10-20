import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(1);
  return (
    <div>
        <div>{count}</div>
        <button onClick={() => setCount(count+amount)}>Increase + {amount}</button>
        <div>
            <button onClick={() => setAmount(1)}>+1</button>
            <button onClick={() => setAmount(5)}>+5</button>
            <button onClick={() => setAmount(10)}>+10</button>
        </div>
    </div>

  )
}

export default Counter