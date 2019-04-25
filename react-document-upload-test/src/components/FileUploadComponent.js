
import React, { Component } from 'react';
import './FileUploadComponent.css';
import { post } from 'axios';

export default class FileUploadComponent extends Component
{
   constructor(props) {
      super(props);
      this.state ={
        image: ''
      }
      this.onFileUpload = this.onFileUpload.bind(this)
      this.onChange = this.onChange.bind(this)
      this.fileUpload = this.fileUpload.bind(this)
    }

    onFileUpload(e){
      e.preventDefault() 
      this.fileUpload(this.state.image);
    }

    onChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
            return;
      this.createImage(files[0]);
    }

    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({
          image: e.target.result
        })
      };
      reader.readAsDataURL(file);
    }

    fileUpload(image){
      console.log("Bhavin ",image);
      // We will move this into env file and create one class to store all the api point  
      const url = 'http://localhost:8000/api/fileupload'; 
      const formData = {file: this.state.image}
      return  post(url, formData)
              .then(response => console.log(response))
    }
  
  render()
   {
      return(
        <div className="file-upload-section">
            <div className="heading-file-title-1">
                FILE
            </div>
            <div className="file-upload-button">
                <div className="upload-btn-wrapper">
                    <span className='file-text' >Upload a file</span>
                    <input type="file" name="myfile" onChange={this.onFileUpload} />
                </div>
            </div>
        </div>        
      )
   }
}