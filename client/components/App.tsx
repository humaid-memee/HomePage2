import React, { useState } from 'react'
import Draggable from 'react-draggable'

function App() {
  const [activeDrags, setActiveDrags] = useState(0)
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 })
  const [controlledPosition, setControlledPosition] = useState({
    x: -400,
    y: 200,
  })

  const handleDrag = (e, ui) => {
    const { x, y } = deltaPosition
    setDeltaPosition({ x: x + ui.deltaX, y: y + ui.deltaY })
  }

  const onStart = () => {
    setActiveDrags(activeDrags + 1)
  }

  const onStop = () => {
    setActiveDrags(activeDrags - 1)
  }

  const onDrop = (e) => {
    setActiveDrags(activeDrags - 1)
    if (e.target.classList.contains('drop-target')) {
      alert('Dropped!')
      e.target.classList.remove('hovered')
    }
  }

  const onDropAreaMouseEnter = (e) => {
    if (activeDrags) {
      e.target.classList.add('hovered')
    }
  }

  const onDropAreaMouseLeave = (e) => {
    e.target.classList.remove('hovered')
  }

  return (
    <Draggable onStart={onStart} onDrag={handleDrag} onStop={onStop}>
      <div className="test-div">Drag me</div>
    </Draggable>
  )
}

export default App
