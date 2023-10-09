import React, { ReactEventHandler, useEffect, useState } from 'react'
import Draggable, { DraggableEvent } from 'react-draggable'
import { getCoordsById, saveCoord } from '../api/api'
import { useQuery } from '@tanstack/react-query'

function App() {
  function useCoordsById(id: number) {
    return useQuery(['coords'], () => getCoordsById(id))
  }

  const { data: initialCoord, isLoading } = useCoordsById(1)

  const [activeDrags, setActiveDrags] = useState(0)
  const [deltaPosition, setDeltaPosition] = useState({
    x: 0,
    y: 0,
  })

  console.log(deltaPosition)

  // const [controlledPosition, setControlledPosition] = useState({
  //   x: -400,
  //   y: 200,
  // })

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

  function handleSavePosition() {
    const div = document.querySelector('.test-div')
    if (div) {
      const rect = div.getBoundingClientRect()
      const newPosition = {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
      }
      saveCoord({ id: 1, x: newPosition.x, y: newPosition.y })
    }
  }
  return (
    !isLoading && (
      <>
        <Draggable
          onStart={onStart}
          onDrag={handleDrag}
          onStop={onStop}
          defaultPosition={{ x: initialCoord.x, y: initialCoord.y }}
        >
          <div className="test-div">Drag me</div>
        </Draggable>
        <button onClick={handleSavePosition}>Save Position</button>
      </>
    )
  )
}

export default App
