import { useEffect, useState } from 'react'
import './App.css'

//Crear un componente
//Definir props 
//Utilizar props
const amiiboUrl = 'https://www.amiiboapi.com/api/amiibo/';

const Panel = ({isOpen,title,handleClick, children, image,id,name,type, amiiboSeries,character}) => {
  return (
    <div >
      
      <button  style={{ border:isOpen?  '4px solid #4A235A':'3px solid #5499C7', width: 300, height: '100%', margin: 10, textDecoration:'none'}} onClick={handleClick} >

      <div style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
      <img src={image} alt="personaje" style={{width: 50, backgroundColor: '#BDC3C7', borderRadius:50, padding: 10 ,margin: 5}} />
      <h3 style={{color:isOpen? '#D8BFD8' :'white'}}>¿Quién es tu personaje favorito?</h3>
      <p style={{transform:isOpen? 'rotate(180)': 'none'}}>+</p>
      </div>

      
      {isOpen && <div style={{ color:isOpen? '#BA55D3' :'#A93226', backgroundColor:'Thistle', borderRadius:30, padding: 2, marginTop:5}}>
        <h3 style={{padding:0}}>Nombre: {name}</h3>
        <div style={{color: '#000'}}>
        <p><b>Tipo:</b> {type}</p>
        <p><b>Amibibo:</b> {amiiboSeries}</p>
        <p><b>Character:</b> {character}</p>
        </div>
        
        </div>}
      </button> 
    </div>
  )
}

const Accordeon = () => {
  const [isOpen, setIsOpen] = useState(null)

  const [chars, setChars] = useState([]);

  useEffect(()=>{
    const getChars = async () => {
       const response = await fetch(amiiboUrl);
       const data     = await response.json();
       setChars(data.amiibo)
       console.log(data.amiibo);
    }
    getChars();
  },[]);
   
  const handleClick = (tail) => {
    setIsOpen(tail)
  }

  return (
    <div>
      
      {chars.map((item)=>(
      <Panel key={item.tail} id={item.tail} isOpen={item.tail===isOpen} handleClick={()=>handleClick(item.tail)} title={item.question}
      image={item.image}
      name={item.name}
      type={item.type}
      amiiboSeries={item.amiiboSeries}
      character={item.character}
      >
      {item.answer}
     </Panel>))}
     

     
     
    </div>
  )
}

//  APP //
function App() {
  return (
   
    <div>
     <h1>FAQs ❔</h1>
     <h2 style={{backgroundColor:'#B0C4DE', color:'#4682B4', borderRadius:20}}>Amiibo cards</h2>
     <Accordeon/>
    </div>
  )
}

export default App
