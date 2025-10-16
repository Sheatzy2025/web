import { useState } from "react";
interface ClickCounterProps {
    title : string;
}
function ClickCounter({title} : ClickCounterProps) {
  const [count, setCount] = useState(0);

  const handleCount = () => setCount(count + 1);

  return (
    <button onClick={handleCount}>
    {title}
      {count >= 10 ? "...You are a master in the art of clicking !" : ""}
      <br />
      count is {count}
    </button>
  );
}

export default ClickCounter;
