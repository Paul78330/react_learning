import React,{useState, useEffect} from 'react';

function Timer(props) {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const intervalId = setInterval(()=> {
      setTime((prev) => prev + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const handleChange = ({target}) => {
    setName(target.value)
  }
  
  return (
    <div>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} type="text"/>
    </div>
  );
}

export default Timer;
