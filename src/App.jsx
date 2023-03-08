import { useEffect, useState } from 'react'
import './App.css'

//Crear un componente
//Definir props 
//Utilizar props
const amiiboUrl = 'https://www.amiiboapi.com/api/amiibo/';

const Panel = ({isOpen,title,handleClick, children, image,id,name,type, amiiboSeries,character}) => {
  return (
    <div >
      
      <button  style={{color:isOpen? '#229954' :'#A93226', border:isOpen?  '4px solid #5499C7':'3px solid #4A235A', width: 300, height: '100%', margin: 10 }} onClick={handleClick} >

      <div style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
      <img src={image} alt="personaje" style={{width: 50, backgroundColor: '#BDC3C7', borderRadius:50, padding: 10 ,margin: 5}} />
      <h3>¿Quién es tu personaje favorito?</h3>
      <p style={{transform:isOpen? 'rotate(180)': 'none'}}>+</p>

      </div>
      </button>
     
      {isOpen && <div style={{color:isOpen? '#229954' :'#A93226'}}>
        <h3>Nombre: {name}</h3>
        <p>Tipo: {type}</p>
        <p>Amibibo: {amiiboSeries}</p>
        <p>Character: {character}</p>
        </div>}
      
      
     
    </div>
  )
}
//// BORRAR
const data = [{
  id:1,
  question: 'pregunta 1',
  answer: 'answer 1'
}, {
  id:2,
  question: 'pregunta 2',
  answer: 'answer 2'
}, {
  id:3,
  question: 'pregunta 3',
  answer: 'answer 3'
}, {
  id:4,
  question: 'pregunta 4',
  answer: 'answer 4'
}, {
  id:5,
  question: 'pregunta 5',
  answer: 'answer 5'
}]
//// BORRAR


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
     <Accordeon/>
    </div>
  )
}

export default App
