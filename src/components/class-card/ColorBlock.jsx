import './ColorBlock.css'
import check from './img/check.svg'

function ColorBlock(props) {
  return (
    <div
      className={`color-block ${props.selected ? 'active': ''} ${props.color}`}
      onClick={props.onclick}
    >
      <div className="black-rectangle">
        <img src={check} alt="check" />
      </div>
    </div>
  )
}

export default ColorBlock