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

export default App
