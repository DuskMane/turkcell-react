import React, { useEffect, useState } from 'react'

function AutoCounter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setCounter((prev) => (prev + 1))
            console.log("interval")
        }, 1000)

        return () => clearInterval(interval);
    }, [])

  return (
    <div>
        <b>{counter}</b>
    </div>
  )
}

export default AutoCounter