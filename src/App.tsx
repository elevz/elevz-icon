import Icon from '../lib/Icon'
import icons from '../lib/svg'
import './App.css'

function App() {
  return (
    <div className="container">
      {Object.keys(icons).map((name, i) =>
        <div key={i} className="icon">
          <Icon name={name as any} />
          <span>{name}</span>
        </div>
      )}
    </div>
  )
}

export default App
