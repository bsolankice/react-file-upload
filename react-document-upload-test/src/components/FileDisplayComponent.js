
import React, { Component } from 'react';
import './FileDisplayComponent.css';
import FileViewer from 'react-file-viewer';

const file = 'http://localhost:3000/1.jpg'
const type = 'jpeg'

export default class FileDisplayComponent extends Component
{
  render()
   {
      return(
        <div className='file-content'>
            <div className='file-title'>
                {this.props.selectedDocument.name}
            </div>
            <div className='file-content-data'>
              <FileViewer
                fileType={this.props.selectedDocument.type}
                filePath={this.props.selectedDocument.url}
                onError={this.onError}/>
            </div>
        </div>
      )
   }

   onError(e) {
    console.log(e, '1 error in file-viewer');
  }
}