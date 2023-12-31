import './App.css'
import { GetData } from './components/GetData';
import { GetError } from './components/GetError'
import { GetLoading } from './components/GetLoading';

function App() {

  return (
    <>
      <GetData />
      <GetError />
      <GetLoading />
    </>
  )
}

export default App
