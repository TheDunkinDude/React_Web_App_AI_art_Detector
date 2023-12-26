import './Report.css'
import { useState } from 'react';
import axios from 'axios';

function Report(){

    const [section, setSection] = useState('Navigation');
    const [complain, setComplain] = useState(null);

    function SectionHandle(value){
        setSection(value);
    };

    function ComplaintHandle(value){
        setComplain(value);
    };
    
    function FormSubmit(){
            
            const formdata = {section,complain};

            axios.post('https://16.170.63.82/api/submit', formdata)
            .then(response => {
              console.log(response.data);
              setComplain(null);
              setSection('Navigation');
            })
            .catch(error => {
              console.error('Error submitting data:', error);
            });


    };

    return(
        <div className='MainBody'>
            <div className='ContainReportForm'> 
                <div > 
                    <select onChange={e => SectionHandle(e.target.value)} value = {section} className='SelectorBar'>
                        <option value="Navigation"> Navigation </option>
                        <option value="Uploadiing"> Uploadiing an image </option>
                        <option value="Results"> Results Area </option>
                        <option value="Prediction"> Prediction </option>
                    </select>
                </div>
                <div>
                    <textarea onChange={e => ComplaintHandle(e.target.value)}  rows="10" cols="159" value={complain} className='ComplainSection'/>
                </div>
                <div>
                    <button onClick={FormSubmit} className='SubmitBttn'> <b> Submit Form </b></button>
                </div>
            </div>
    </div>
    );
}

export default Report;
