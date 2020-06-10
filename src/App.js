import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import {Modal, Button} from 'antd';
import AddQuestionForm from './components/addQuestionForm';
import StartGame from './components/startGame';

import './App.css'
class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      options: []
    }
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  onClose = (e) => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  selecItem = (e) => {
    console.log(e)
  }

  startGame = (params) => {
    console.log(params)
  }

  render(){
    console.log(this.state)
    return (
      <div className="app">
        <div>
          <Button type="primary"
            onClick={this.showModal}
          >
            <PlusCircleOutlined />
          </Button>
        </div>
        <StartGame 
          startGame={this.startGame}
        />
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onOk={this.onClose}
          cancelButtonProps={false}
        >
          <AddQuestionForm />
        </Modal>  
      </div>
    );
  }
}

export default App;
