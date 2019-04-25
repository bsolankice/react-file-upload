import React, { Component } from 'react';
import './App.css';
import FileUploadComponent from './components/FileUploadComponent';
import FileListComponent from './components/FileListComponent';
import FileDisplayComponent from './components/FileDisplayComponent';

export default class App extends Component
{
  constructor(props) {
    super(props);
    this.state ={
      selectedIndex: 1,
      selectedDocument: '',
      documents:[
        { 
          name: 'Document #1',
          url: 'http://localhost:3000/1.jpg',
          index: 1,
          type: 'jpeg'
        },
        { 
          name: 'Document #2',
          url: 'http://localhost:3000/1.jpg',
          index: 2,
          type: 'jpeg'
        },
        { 
          name: 'Document #3',
          url: 'http://localhost:3000/1.jpg',
          index: 3,
          type: 'jpeg'
        },
      ]
    }
    this.onChangeSelectedDocument = this.onChangeSelectedDocument.bind(this)
    this.updatedSelectedDocument = this.updatedSelectedDocument.bind(this)
  }

  onChangeSelectedDocument(index){
    this.setState({
      selectedIndex: index
    });
    this.updatedSelectedDocument(index);
  }

  updatedSelectedDocument(currentIndex){
    
    let selectedDocument = this.state.documents.find((document) => {
      return document.index === currentIndex;
    }, currentIndex)
    this.setState({
      selectedDocument: selectedDocument
    });
  }

  componentDidMount() {
    this.updatedSelectedDocument(this.state.selectedIndex);
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
render()
 {
    return(
      <div className="App">
          <div className="side-bar">
            <FileUploadComponent/>  
            <FileListComponent
              documents={this.state.documents}
              selectedIndex={this.state.selectedIndex}
              onChangeSelectedDocument={this.onChangeSelectedDocument}
            />
          </div>
          
          <FileDisplayComponent
              selectedDocument={this.state.selectedDocument}
          />  
      </div>     
    )
 }
}