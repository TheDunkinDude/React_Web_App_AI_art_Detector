import'./result.css'
import {useEffect } from 'react';

function Result({display,refer,prediction}){


    useEffect(() => {
        if (refer.current && display && display.length > 0) {
            refer.current.scrollIntoView({ behavior: 'smooth' , block: "end" });
          }
      }, [display, refer]);


    return(
        <div>
            <div className = "secondShape" >
                <div className = "splits"  >
                { display && 
                display.map((pic) => {
                    return (
                        <div >
                            <div className='predictReturn'> <i>
                              <div>  <b> The Given Image is   </b> </div>
                               <div> <b> {prediction} </b> </div>
                               </i> 
                            </div>
                            <img src = {pic} alt = 'Error Loading' className='ig'ref={refer} />
                         </div>
                    );
                })
            }
                </div>
            </div>
        </div>
    );
}

export default Result;