import './App.css'
import Icon from '../lib'
import icons from '../lib/icons'

function App() {
  return (
    <>
      <div className='row'>
        {Object.keys(icons).map((name, i) =>
          <div key={i} className="col-icon">
            <Icon name={name as any} />
            <span>{name}</span>
          </div>
        )}
      </div>

    </>
  )
}

export default App
