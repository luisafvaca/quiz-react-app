import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import {Modal, Button} from 'antd';
import AddQuestionForm from './components/addQuestionForm';
import './App.css'

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      visible: false
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

  render(){
    return (
      <div className="app">
        <Button type="primary"
          onClick={this.showModal}
        >
          <PlusCircleOutlined />
        </Button>
        <Modal
          title="Añada una pregunta"
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
