
import { HeadTemplate } from './HeadTemplate'
import './Template.css'
export const MainTemplate = () => {
  return (
    <div>
      <HeadTemplate/>
        <h3>Technique:</h3>
        <h4>MR images of the brain were acquired without intravenous contrast.</h4>
        <div className='input-field'>
            <label htmlFor="textInput">COMPARISON: </label>
            <input type="text" id="" name="" className="custom-input"/>
        </div>

        <h3>Finding:</h3>
        
        <div className='input-field'>
            <label htmlFor="textInput">BRAIN PARENCHYMA: </label>
            <input type="text" id="" name="" className="custom-input"/>
        </div>
        <div className='input-field'>
            
            <input type="text" id="" name="" className="custom-input"/>
        </div>
        <div className='input-field'>
            <label htmlFor="textInput">VENTRICLES/EXTRA-AXIAL SPACES: </label>
            <input type="text" id="" name="" className="custom-input"/>
        </div>
        <div className='input-field'>
            <label htmlFor="textInput">VENTRICLES/EXTRA-AXIAL SPACES: </label>
            <input type="text" id="" name="" className="custom-input"/>
        </div>
        <div className='input-field'>
            <label htmlFor="textInput">FLOW VOIDS: </label>
            <input type="text" id="" name="" className="custom-input"/>
        </div>
        <div className='input-field'>
            <label htmlFor="textInput">EXTRACRANIAL STRUCTURES:  </label>
            <input type="text" id="" name="" className="custom-input"/>
        </div>

    </div>
  )
}
