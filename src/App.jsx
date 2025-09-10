import Home from "./pages/Home"
import Canvas from "./canvas"
import Costumizer from "./pages/Costumizer" 
function App() {
  

  return (
    <main className="app transition-all ease-in bg-gray-300">
      <Home/>
      <Canvas />
      <Costumizer/>
    </main>
  )
}

export default App
