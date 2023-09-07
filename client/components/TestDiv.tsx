import { SpringValue } from '@react-spring/web'
import { animated } from '@react-spring/web'

interface Props {
  style: {
    [key: string]: SpringValue<number>
  }
}

function TestDiv({ style }: Props) {
  return <div style={style} className="test-div"></div>
}

export default TestDiv
