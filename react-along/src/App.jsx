import { useEffect,useState } from 'react'
import './App.css'
import store from './components/Store'
import fetchDataAction from './components/Action'

function App() {
  const [data, setData] = useState([]);
  const [showClearButton, clearButton] = useState(false);

  useEffect(() => {
    store.subscribe(() => {
      setData(store.getState().data);
      clearButton(true);
    });
  }, []);

  const handleFetchData = () => {
    setData([]);
    store.dispatch(fetchDataAction());
  };

  const handleClearData = () => {
    setData([]);
    clearButton(false);
  };


  return (
    <>
      <button onClick={handleFetchData} className='fetch'>Fetch data</button>
      {data.map((item) => (
        <div key={item.id} className='box'>
          <h2>{item.name}</h2>
          <br />
          {item.email}
        </div>
      ))}
      {showClearButton && (
        <button onClick={handleClearData} className='clear'>Clear data</button>
      )}
    </>
  );
}

export default App