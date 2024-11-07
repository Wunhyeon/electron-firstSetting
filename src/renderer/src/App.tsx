import Versions from './components/Versions'
import { Test } from './components/Test'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <h1 className="text-green-700 text-6xl">hi</h1>
      <Test />
      <Versions />
    </>
  )
}

export default App
