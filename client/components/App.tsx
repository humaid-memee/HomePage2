import React from 'react'
import { useDrag } from 'react-dnd'

const ItemTypes = {
  CARD: 'card', // Replace with the appropriate item type
}

const App = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD, // Use the appropriate type
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div className="container">
      <div
        className="test-div"
        ref={drag}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        1
      </div>
      <div
        className="test-div"
        ref={drag}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        2
      </div>
      <p>AAAAAA</p>
    </div>
  )
}

export default App
