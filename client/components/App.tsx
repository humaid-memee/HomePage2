// import React, { useState } from 'react'
// import { useSpring, animated } from '@react-spring/web'
// import { useDrag } from '@use-gesture/react'
// import TestDiv from './TestDiv'

import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

function App() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: mx, y: my, immediate: down })
  })

  // Bind it to a component
  return <animated.div {...bind()} className="test-div" style={{ x, y }} />
}

// function App() {
//   const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

//   // Set the drag hook and define component movement based on gesture data
//   const bind = useDrag(({ down, movement: [mx, my] }) => {
//     api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
//   })
//   return <TestDiv {...bind()} style={{ x, y }} />
// }

// function App() {
//   const [keyboard, setKeyboard] = useState({ x: 300, y: 500 })
//   const bindKeyboard = useDrag((params) => {
//     params.event.preventDefault()
//     setKeyboard({
//       x: params.offset[0],
//       y: params.offset[1],
//     })
//   })

//   const [mouse, setMouse] = useState({ x: 315, y: 535 })
//   const bindMouse = useDrag((params) => {
//     params.event.preventDefault()
//     setMouse({
//       x: params.offset[0],
//       y: params.offset[1],
//     })
//   })

//   const [pencils, setPencils] = useState({ x: 880, y: 425 })
//   const bindPencils = useDrag((params) => {
//     params.event.preventDefault()
//     setPencils({
//       x: params.offset[0],
//       y: params.offset[1],
//     })
//   })

//   return (
//     <div className="stationery">
//       <div
//         {...bindKeyboard()}
//         style={{
//           position: 'relative',
//           width: '15rem',
//           height: 'auto',
//           top: keyboard.y,
//           left: keyboard.x,
//           zIndex: 2,
//         }}
//       >
//         <div className="test-div"></div>
//       </div>

//       <div
//         {...bindMouse()}
//         style={{
//           position: 'relative',
//           width: '2rem',
//           height: 'auto',
//           top: mouse.y,
//           left: mouse.x,
//           zIndex: 2,
//         }}
//       >
//         <div className="test-div"></div>
//       </div>

//       <div
//         {...bindPencils()}
//         style={{
//           position: 'relative',
//           width: '4rem',
//           height: 'auto',
//           top: pencils.y,
//           left: pencils.x,
//           zIndex: 3,
//         }}
//       >
//         <div className="test-div"></div>
//       </div>
//     </div>
//   )
// }

// import React from 'react'
// import { useDrag } from 'react-dnd'

// const ItemTypes = {
//   CARD: 'card', // Replace with the appropriate item type
// }

// const App = () => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: ItemTypes.CARD, // Use the appropriate type
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }))

//   return (
//     <div className="container">
//       <div
//         className="test-div"
//         ref={drag}
//         style={{ opacity: isDragging ? 0.5 : 1 }}
//       >
//         1
//       </div>
//       <div
//         className="test-div"
//         ref={drag}
//         style={{ opacity: isDragging ? 0.5 : 1 }}
//       >
//         2
//       </div>
//       <p>AAAAAA</p>
//     </div>
//   )
// }

export default App
