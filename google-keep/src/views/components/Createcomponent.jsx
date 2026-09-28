import { useState } from 'react'
import '../../styles/createcomponent.css'

const Createcomponent = () => {
    const [info, setInfo] = useState({
       focused : false
    })
  return (
    <div className='createComponentParentContainer'>
        <div
        className="createComponentcontainer">
            {info?.focused && (
            <div className='titleContentInputContainer' 
            contentEditable="true"
            spellCheck="false"
            aria-multiline="true"
            role="textbox"
            data-placeholder="Title">

            </div>
            )}
             <div className='notesContentInputContainer'
             contentEditable ="true"
             spellCheck ="false"
             aria-multiline ="true"
             role='textbox'
             data-placeholder="Take a Note..."
             onFocus={()=>setInfo((prev)=>({...prev, focused:true}))}
             ></div>
        </div>
    </div>
  )
}

export default Createcomponent