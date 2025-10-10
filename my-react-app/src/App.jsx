
import Navigation from './components/Navigation.jsx'

function App() {

  return (
    <>
      <div>
        <Navigation current="home" onChange={(key) => console.log(key)} />
      </div>
    </>
  )
}

export default App