import React from 'react';
import { Select, Form, Rate, Button} from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { FormInstance } from 'antd/lib/form';
import { Row, Col } from 'antd';

const options = ['Biology', 'Mahts', 'Arts'];


class StartGame extends React.Component {
    formRef = React.createRef(<FormInstance />);
    selectItem = (value) => {
        console.log(value)
    }

    getOptions = () => {
        let optionElement = [];
        let { Option } = Select;
        options.map(item => {
          console.log(item, 'item')
          optionElement.push(<Option key={item}>{item}</Option>)
        });
    
        return optionElement
    }

    handleStartGame = () => {
        const fieldsValues = this.formRef.current.getFieldsValue(['topics', 'difficulty']);
        this.props.startGame(fieldsValues)
    } 
    render (){
        return (
            <Row>
                <Col span={12} offset={6}>
                <Form
                    span={12} 
                    offset={6}
                    ref={this.formRef}
                    initialValues={{
                        difficulty: 1,
                    }}
                    className='form'
                    layout="inline"
                >
                    <h1>Configure and Start the quiz!</h1>
                    <Form.Item
                        label="Select a topic to start the quiz:" 
                        name="topics"
                        labelCol
                    >
                        <Select
                            style={{ width: '100%' }}
                            placeholder="Topics..."
                            onChange={this.selectItem}
                            mode="multiple"
                        >
                            {this.getOptions()}
                        </Select>
                    </Form.Item>
                    <Form.Item label="Choose the difficulty level" name="difficulty" labelCol>
                        <Rate count={3}/>
                    </Form.Item>
                    <div className="startGame">
                        <Button type="primary" onClick={this.handleStartGame}>
                            <PlayCircleOutlined />
                        </Button>
                    </div>
                </Form>
                </Col>
            </Row>
        )
    }
} 

export default StartGame;
