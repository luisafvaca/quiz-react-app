import React from 'react';
import { Select, Input, Form, Button, Rate} from 'antd';
import { FormInstance } from 'antd/lib/form';
import { addQuestion } from '../actions/questions';
import { connect } from 'react-redux';
 
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

  addQuestion = () => {
    const fieldsValues = this.formRef.current.getFieldsValue(['topic', 'question', 'answer', 'difficulty']);
    this.props.questions(fieldsValues);
  }

  render(){
    console.log(this.props.state);
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
            <h1>Add a new question</h1>
            <div>
                <Form.Item 
                    label="Select a topic to sort out the question" 
                    name="topic" 
                    labelCol
                >
                    <Select
                        style={{ width: '100%' }}
                        placeholder="topics..."
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
            <Button type="primary" htmlType="submit" onClick={this.addQuestion}>
                Add a question
            </Button>
            </Form>
        </section>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      questions: (question) => dispatch(addQuestion(question))
    }
  }

  const mapStateToProps = (state) => {
    return {
      state
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(AddQuestionForm);
