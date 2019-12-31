import React from 'react';
import firebase from '../firebase';
import {useState} from 'reinspect';
import {Button, Form, Input, InputNumber, Layout, Typography, Row, Col} from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const AddTimeEntryForm = () => {
    const [title, setTitle] = useState('', 'Title State');
    const [time, setTime] = useState('', 'TimeState');

    const onSubmit = (e) => {
        if(title !== '' && time !== ''){
            e.preventDefault();
            firebase
                .firestore()
                .collection('times')
                .add({
                    title,
                    time_seconds: parseInt(time)
                })
                .then(() => {
                    setTitle('')
                    setTime('')
                })
        } else {
            e.preventDefault();
            setTitle('')
            setTime('')
        }

        console.log("SUBMIT")

    }


    return (
        <Form onSubmit = {onSubmit}>
                    
        <Title style = {{width: '20%', margin: '0 auto'}} level = {4 }> Add Time Entry </Title>
            <Row type = 'flex' justify = 'space-around' gutter = {[28, 28]}>
                <Col span = {8}>

                    <Text level = {5}>Title</Text>
                    <Input 
                        type = 'text' 
                        value = {title} 
                        onChange = {(e) => setTitle(e.currentTarget.value)}
                    />                          
                </Col>
                    

                <Col span = {8}>
                    <Text  level = {5}>Time</Text>
                    <Input 
                        type = 'number'
                        value = {time}
                        onChange = {(e) => setTime(e.currentTarget.value)}    
                    />

                </Col>
            </Row>

            <Row type = 'flex' justify = 'center' >
                <Col span = {38}>
                <Button htmlType="submit" type="primary" ghost> Add Time Entry</Button>  
                </Col>
            </Row>    
                
                    
        </Form>              
        

    )
}

export default AddTimeEntryForm;

// <Form onSubmit = {onSubmit}>
//               
// <Title level = {4 }> Add Time Entry </Title>
//     <Row type = 'flex' justify = 'space-around'>
//         <Col span = {8}>

//             <Text level = {5}>Title</Text>
//             <Input 
//                 type = 'text' 
//                 value = {title} 
//                 onChange = {(e) => setTitle(e.currentTarget.value)}
//             />                          
//         </Col>
               

//         <Col span = {8}>
//             <Text  level = {5}>Time</Text>
//             <Input 
//                 type = 'number'
//                 value = {time}
//                 onChange = {(e) => setTime(e.currentTarget.value)}
//             />

//         </Col>
//     </Row>

//     <Row type = 'flex' justify = 'center'>
//         <Col span = {38}>
//            <Button htmlType="submit"> Add Time Entry</Button>  
//         </Col>
//     </Row>    
        
            
// </Form>   