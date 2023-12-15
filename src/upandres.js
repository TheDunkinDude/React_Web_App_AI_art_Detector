import './upandres.css';
import {useEffect, useState, useRef } from "react";
import Upload from "./Upload";
import Result from "./result";
import axios from 'axios';

function FormAndResults(){

    const [files, setFiles] = useState();
    const [ prev, setPreviews] = useState();
    const [Pred, setPred] = useState();
    const scrollToElem = useRef();

    useEffect( () => {
        if (!files) return;
        
        let tmp = [];
        for(let i = 0; i < files.length; i++) {
                tmp.push(URL.createObjectURL(files[i]));
        }
        const objectUrls = tmp;
        setPreviews(objectUrls);
        
        for (let i = 0; i < objectUrls.length; i++) {
            return () => {
                URL.revokeObjectURL(objectUrls[i]);
            };
        }

    }, [files])

    const imageUploader = (images) => {

            if(images){
                const formData = new FormData();
                formData.append('file', images);
                console.log('FormData:', formData);

                 const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                        // Add other headers as needed
                    },
                };
                
                axios.post('https://aiartdetforgen1.ignorelist.com/api/sub', formData, config).then((response) => {
                    console.log(response.data);
                    const res = response.data;
                    setPred(res.pred)
                })
                .catch((error) => {
                    console.log("Error on Uploading: ", error);
                });
            }else {
                console.error('No image selected');
              }

    };

    function fileSetter(value){
        setFiles(value);
    }


    return(
            <div>
                <div className = "upload" >
                    <Upload files = {files} setter = {fileSetter} setFiles = {setFiles} toBackend = {imageUploader} />
                </div>
                <div className = "result" >
                    <Result display = {prev}  refer = {scrollToElem} prediction = {Pred}/>
                </div>
            </div>
        );

}




export default FormAndResults;
