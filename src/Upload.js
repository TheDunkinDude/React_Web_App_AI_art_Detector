import './Upload.css'

function Upload({files, setFiles, setter, toBackend}){



    return(
        <div>
            <div className="Shape">
                <div className = "upimage">
                    <img src = {require('./Upload-PNG.png')}alt = ' ' className = "img"></img>
                    <label className = 'txt' for = "uploadphoto"> <b>UPLOAD IMAGE</b> </label>
                    <input 
                        name = "inpup" 
                        type='file' 
                        id='uploadphoto'
                        accept='image/jpg, image/jpeg, image/png'
                        multiple
                        onChange = {(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                                const imageIs = e.target.files;
                                toBackend(imageIs[0]);
                                setter(e.target.files);
                            }       
                        } }
                        />
                </div>
            </div>
        </div>
    );
}

export default Upload;