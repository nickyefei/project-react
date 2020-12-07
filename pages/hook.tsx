import React, { useState, useEffect, useContext, useCallback } from 'react'

function Callback() {
  const handleClick = useCallback(() => {
    //do something
  }, [])
  return <Context><div onClick={handleClick}>点击区域</div></Context>
}

const nameContext = React.createContext('nick')

function Context(props) {
  const context = useContext(nameContext)
  return (
    <div>
      { context }
      { props }
    </div>
  )
}

function useMousePosition() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })
  function positionListener(e) {
    setPosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', positionListener)
    return () => {
      window.removeEventListener('mousemove', positionListener)
    }
  }, [position])

  return position
}

export function App() {
  const { x, y } = useMousePosition()
  return (
    <div>
      position: x: {x}, y: {y}
      <Context/>
    </div>
  )
}

function aaa() {
  const [aaa, setaaa] = useState(0)
  setTimeout(() => {
    console.log(aaa)
  })

  setaaa(aaa => aaa + 1)
}