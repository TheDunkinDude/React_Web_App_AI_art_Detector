import './mainbody.css';
import FormAndResults from './upandres';



function MainBody() {


    return(
        <div className = 'MainBody'>
            <div className = 'Nonint'>
                <h1 className = "ai_art"> <b> AI ART </b> </h1>
                <h1 className = "det"> <b> DETECTOR </b> </h1>
                <img src = {require('./AI-PNG.png')}alt = ' 'className = "aipng"></img>
                <div className = 'split left'>
                    <div className = 'centered'>
                        <p> 
                             <i>
                             This is a very simple Deep Learning model that is capable of pointing out AI generated art. You can just upload the an image below and click on confirm to recieve your 
                    output. The model is trained on a wide varriety of different images both real and AI generated and uses CNN technology to distinguish AI art.
                            </i> 
                        </p>
                    </div>
                </div>
            </div>

            <div className = "interactable">
                <FormAndResults/>
            </div>
        </div>
    );
}

export default MainBody;