import React from 'react';
import { Select, Input, Form, Button, Rate} from 'antd';
import { FormInstance } from 'antd/lib/form';

const options = ['Biology', 'Mahts', 'Arts'];

class AddQuestionForm extends React.Component {
    formRef = React.createRef(<FormInstance />);
    constructor(props){
        super(props);
        this.state = {
        selectedTopics: [],
        options: []
        }
    }

  madeOoptions = () => {
    const children= [];
    const { Option } = Select;
    for (let i = 0; i < options.length; i++) {
      children.push(<Option key={i}>{options[i]}</Option>);
    }
    return children;
  }

  componentWillMount = () => {
    const options = this.madeOoptions();
    this.setState({options})
  }

  selecItem = (e) => {
    this.formRef.current.setFieldsValue({
        topic: `${options[e]}`,
    });
  }

  //send to db to add question
  test = (e) => {
    console.log(this.formRef.current.getFieldsValue(['topic', 'question', 'answer', 'difficulty']), 'testestest');
  }

  render(){
    return (
        <section className="add-question">
            <Form
            ref={this.formRef}
            initialValues={{
                ['topic']: 'Arts',
                difficulty: 1,
            }}
            className='form'
            >
            
            <h1>Añada una nueva pregunta</h1>
            <div>
                <Form.Item 
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
                <Form.Item 
                    label="Write the question" 
                    name="question" 
                    labelCol
                    rules={[{
                        required: true,
                    }]}
                >
                    <Input type="text"/>
                </Form.Item>
                <Form.Item 
                    label="Write the answer" 
                    name="answer" 
                    labelCol
                    rules={[{
                        required: true,
                    }]}    
                >
                    <Input type="text"/>
                </Form.Item>
                <Form.Item label="Chosse the dificulty" name="difficulty" labelCol>
                    <Rate count={3}/>
                </Form.Item>
            </div>
            <Button type="primary" htmlType="submit" onClick={this.test}>
                Añadir pregunta
            </Button>
            </Form>
        </section>
    );
  }
}

export default AddQuestionForm;
