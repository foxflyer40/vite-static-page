import { useState } from 'react'
import './App.css'

 function Content() {
  const [count, setCount] = useState(0)

  return (
    <div className='content'>
      <div>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by John Walke</li>
          <li>Ha well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Click button to increment counter
        </p>
      </div>
    </div>
  )
}

export default Content