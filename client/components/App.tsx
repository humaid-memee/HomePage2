import React, { ReactEventHandler, useState } from 'react'
import Draggable, { DraggableEvent } from 'react-draggable'

function App() {
  const [activeDrags, setActiveDrags] = useState(0)
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 })
  const [controlledPosition, setControlledPosition] = useState({
    x: -400,
    y: 200,
  })

  const handleDrag = (
    e: DraggableEvent,
    ui: { deltaX: number; deltaY: number }
  ) => {
    const { x, y } = deltaPosition
    setDeltaPosition({ x: x + ui.deltaX, y: y + ui.deltaY })
  }

  const onStart = () => {
    setActiveDrags(activeDrags + 1)
  }

  const onStop = () => {
    setActiveDrags(activeDrags - 1)
  }

  const onDrop = (e: {
    target: {
      classList: {
        contains: (arg0: string) => any
        remove: (arg0: string) => void
      }
    }
  }) => {
    setActiveDrags(activeDrags - 1)
    if (e.target.classList.contains('drop-target')) {
      alert('Dropped!')
      e.target.classList.remove('hovered')
    }
  }

  const onDropAreaMouseEnter = (e: {
    target: { classList: { add: (arg0: string) => void } }
  }) => {
    if (activeDrags) {
      e.target.classList.add('hovered')
    }
  }

  const onDropAreaMouseLeave = (e: {
    target: { classList: { remove: (arg0: string) => void } }
  }) => {
    e.target.classList.remove('hovered')
  }

  return (
    <Draggable onStart={onStart} onDrag={handleDrag} onStop={onStop}>
      <div className="test-div">Drag me</div>
    </Draggable>
  )
}

export default App
