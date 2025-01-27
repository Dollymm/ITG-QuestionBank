import './PaperSection.css'
import { useState } from 'react'
import QuesRefrence from './QuesRefrence'
import UpperSection from './UpperSection'

function PaperSection(){
    const [curYear, setCurYear] = useState()
    const [year, setYear] = useState()

 return (
    <>
    <section className="inside-body-section">
        <UpperSection />
        <div className="container-fluid " style={{marginBottom:"20px"}}>
            <div className="card card-inside">
                <div className="card-header"> QUESTION PAPERS</div>
                <div className="card-body">
               <select onChange={(e)=>setCurYear(e.target.value)}>
                <option value={0}>Select Branch</option>
                <option value="first">First year</option>
                <option value="cse" >Computer Science and Engineering  </option>
                <option value="ce" >Civil Engineering  </option>
                <option value="me" >Mechanical Engineering  </option>
                <option value="ece">electronics and communication engg. </option>
               
                <option value="ee" >Electrical Engineering  </option>
               </select>
            <select className='year' onChange={(e)=>setYear(e.target.value)}>
             <option value={0}>Select year</option> 
             <option value={1}>1st year</option>  
            <option value={2} >2nd year</option>
            <option value={3} >3rd year</option>
            <option value={4} >4th year</option>
           </select>
                </div>
         
       
        {
            (curYear && year) &&
            <div className='quesnPapers' >
            <QuesRefrence year={year} curYear={curYear}/>
            </div>
        }
           </div>
        </div>
    </section>
    </>
 )
}

export default PaperSection;