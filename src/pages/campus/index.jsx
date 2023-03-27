import './Campus.css'
import Map from '../../components/map'
import 'leaflet/dist/leaflet.css';


function CampusPage() {
  const origin = [14.63812, 121.07748];
  const destination = [14.63809, 121.07691];

  return (
    <>
      <div className='campus-map-wrapper'>
        <div className="campus-header">
          <h1>Campus Map</h1>
          <h2>Ateneo de Manila University</h2>
          <h3>I am at...</h3>
          <select>
            <option value="Jesuit Hall">SEC A</option>
            <option value="Jesuit Hall">SEC B</option>
            <option value="Jesuit Hall">SEC C</option>
            <option value="Jesuit Hall">PLDT CTC</option>
            <option value="Jesuit Hall">SOM Building</option>
            <option value="Jesuit Hall">Matteo Ricci Study Hall</option>
            <option value="Jesuit Hall">JSEC</option>
            <option value="Jesuit Hall">Blue Eagle Gym</option>
            <option value="Jesuit Hall">Gate 2.5</option>
            <option value="Jesuit Hall">Gonzaga</option>
            <option value="Jesuit Hall">Kostka Hall</option>
            <option value="Jesuit Hall">Berchmans Hall</option>
            <option value="Jesuit Hall">Xavier Hall</option>
            <option value="Jesuit Hall">Faber Hall</option>
            <option value="Jesuit Hall">MVP</option>
            <option value="Jesuit Hall">Faura Hall</option>
            <option value="Jesuit Hall">Dela Costa Hall</option>
            <option value="Jesuit Hall">SOSS Building</option>
            <option value="Jesuit Hall">Old Rizal Library</option>
            <option value="Jesuit Hall">New Rizal Library</option>
            <option value="Jesuit Hall">Leong Hall</option>
            <option value="Jesuit Hall">Gate 3.5</option>
            <option value="Jesuit Hall">Arete</option>
            <option value="Jesuit Hall">Bellarmine Hall</option>
            <option value="Jesuit Hall">ISO Canteen</option>
            <option value="Jesuit Hall">Church of Gesu</option>
            <option value="Jesuit Hall">Covered Courts</option>
          </select>
          <h3>I want to go to...</h3>
          <input type="text" id="my-select" list="my-options" placeholder="Select destination" />
            <datalist id="my-options">
            <option value="SEC A"></option>
            <option value="SEC B"></option>
            <option value="SEC C"></option>
            <option value="PLDT CTC"></option>
            <option value="SOM Building"></option>
            <option value="Matteo Ricci Study Hall"></option>
            <option value="JSEC"></option>
            <option value="Blue Eagle Gym"></option>
            <option value="Gate 2.5"></option>
            <option value="Gonzaga"></option>
            <option value="Kostka Hall"></option>
            <option value="Berchmans Hall"></option>
            <option value="Xavier Hall"></option>
            <option value="Faber Hall"></option>
            <option value="MVP"></option>
            <option value="Faura Hall"></option>
            <option value="Dela Costa Hall"></option>
            <option value="SOSS Building"></option>
            <option value="Old Rizal Library"></option>
            <option value="New Rizal Library"></option>
            <option value="Leong Hall"></option>
            <option value="Gate 3.5"></option>
            <option value="Arete"></option>
            <option value="Bellarmine Hall"></option>
            <option value="ISO Canteen"></option>
            <option value="Church of Gesu"></option>
            <option value="Covered Courts"></option>
            </datalist>
        </div>
        <Map origin={origin} destination={destination} />
      </div>

    </>

  )
}

export default CampusPage