import { useState } from 'react'
import './App.css'

//Crear un componente
//Definir props 
//Utilizar props

const Panel = ({isOpen,title,handleClick, children}) => {
  
  return (
    <div  >
      <div  style={{color:isOpen? 'green' :'red'}} onClick={handleClick} >
      <p>{title}</p>
      </div>
      {isOpen && <p>{children}</p>}
    </div>
  )
}

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

const Accordeon = () => {
  const [isOpen, setIsOpen] = useState(null)
   
  const handleClick = (id) => {
    setIsOpen(id)
  }

  return (
    <div  >
      
      {data.map((item)=>(
      <Panel key={item.id} id={item.id} isOpen={item.id===isOpen} handleClick={()=>handleClick(item.id)} title={item.question}>
      {item.answer}
     </Panel>))}
     

     
     
    </div>
  )
}

function App() {


  return (
   
    <div>
     <h1>FAQs ❔</h1>
     <Accordeon/>
    </div>
  )
}

export default App
