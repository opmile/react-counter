import { useState } from "react";

import Container from "./components/Container";
import Counter from "./components/Counter";
import Control from "./components/Control";

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count => count + 1)
  }

  const handleDecrement = () => {
    setCount(count => count - 1)
  }

  const handleReset = () => {
    setCount(() => 0)
  }

  return (
    <Container>
      <Counter>
        {count}
      </Counter>
      <Control 
        increment={handleIncrement}
        reset={handleReset}
        decrement={handleDecrement}
      />
    </Container>
  )
}

export default App;
