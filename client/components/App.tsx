import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { useEffect, useState } from 'react'

function App() {
  const [coord, setCoord] = useState([0, 0])

  const [{ x, y }, api] = useSpring(() => ({ x: coord[0], y: coord[1] }))
  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: coord[0], y, immediate: down })
    setCoord([mx, my])
    console.log(x, y)
  })

  // Update the state whenever the element's position changes
  // useEffect(() => {
  //   setCoord([Number(x), Number(y)])
  //   console.log('effect working', coord)
  // }, [x, y])

  // Bind it to a component
  return (
    <animated.div
      {...bind()}
      className="test-div"
      style={{ x: coord[0], y: coord[1], touchAction: 'none' }}
    />
  )
}

export default App
