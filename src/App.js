import { useEffect } from 'react';
import Test from './component/Test'

function App() {
  useEffect(() => {
    window.onbeforeunload = confirmExit;
    function confirmExit()
    {
      return "show warning";
    }
}, [])
  return (
    <div className="App">
      <Test />
    </div>
  );
}

export default App;
