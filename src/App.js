import React from 'react';
import { PlusCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Select, Form, Rate} from 'antd';
import {Modal, Button} from 'antd';
import AddQuestionForm from './components/addQuestionForm';

import './App.css'
const options = ['Biology', 'Mahts', 'Arts'];
class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      options: []
    }
  }

  componentWillMount = () => {
    const options = this.createOptions();
    console.log(options)
    this.setState({options})
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

  createOptions = () => {
    let optionElement = [];
    let { Option } = Select;
    options.map(item => {
      console.log(item, 'item')
      optionElement.push(<Option key={item}>{item}</Option>)
    })
    this.setState({options: optionElement})
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
        <div>
          <h1>Comenzar el Quiz!</h1>
          <Form.Item
            mode="multiple"
            label="Seleccione el tema para su pregunta" 
            name="topic" 
            labelCol
          >
            <Select
                style={{ width: '100%' }}
                placeholder="Seleccione el tema"
                onChange={this.selecItem}
            >
                {this.state.options}
            </Select>
          </Form.Item>
          <Form.Item label="Seleccione la dificultad para comenzar el juego" name="difficulty" labelCol>
            <Rate count={3}/>
          </Form.Item>
          <Button type="primary">
            <PlayCircleOutlined />
          </Button>
        </div>
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
