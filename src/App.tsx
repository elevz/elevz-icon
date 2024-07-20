import Icon from '../lib/Icon'
import icons from '../lib/svg'
import './App.css'

function App() {
  function copyToClipboard(text: string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  return (
    <div className="container">
      {Object.keys(icons).sort().map((name, i) =>
        <div key={i} className="icon" onClick={() => copyToClipboard(name)}>
          <Icon name={name as any} />
          <span>{name}</span>
        </div>
      )}
    </div>
  )
}

export default App
