
import React, { Component } from 'react';
import './FileListComponent.css';

export default class FileListComponent extends Component
{
  render()
   {
      const documents = this.props.documents.map(document => {
        let classList = 'file-card';
        if(document.index == this.props.selectedIndex){
          classList += ' active';
        }
        return (
            <div 
            className={ classList }
            onClick={(e) => this.props.onChangeSelectedDocument(document.index)}
            >
              <span className="file-name"> {document.name} </span>
            </div>
        )
      });
      return(
        <div className="file-list-section">
            {documents}
        </div>
      )
   }
}
