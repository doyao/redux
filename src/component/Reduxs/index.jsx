import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Space, Modal,Form,Input} from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

import { DELETE,ADD,UPDATE } from '../../Redux/constants'
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
  };
const Ui = (props) => {
    const [visible, setVisible] = useState(false);
    const [btnState, setBtnState] = useState();
    const [users,setUsers] = useState([]);
    const { list} = props;
    const listsss=[1,11,11,1,2]

    const updateChange = (record) => {
        setVisible(true);
        setBtnState(true);
        setUsers(record);
    }
    // 数组去重1
    const qu=(arr)=>{
        const res=new Map();
        return arr.filter(item => !res.has(item) && res.set(item,1))
    }
    // 数组去重2
    const qu2=(arr)=>{
        
        return [...new Set(arr)]
    }
     // 数组去重3
     const qu3=(arr)=>{
        
        return Array.from(new Set(arr))
    }
    const addChange = () => {
        setVisible(true);
        setBtnState(false);
        console.log("数组去重一"+qu(listsss));
        console.log("数组去重二"+qu2(listsss));
        console.log("数组去重三"+qu3(listsss));
    }
    const onFinish = (value) => {
        if(btnState===false){
            props.addChange(value);
            
        }else{
            props.updateChange(value);
        }
        setVisible(false);
    }

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
        },
        {
            title: '操作',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button type='primary' onClick={() => { updateChange(record) }} icon={<EditOutlined />}>修改</Button>
                    <Button type='primary' danger onClick={() => { props.deleteChange(record) }} icon={<DeleteOutlined />}>删除</Button>
                </Space>

            ),
        },
    ];
    return (
        <div>
            <Button type="primary" onClick={() => { addChange() }}>添加用户</Button>
            <Table columns={columns} dataSource={list} />
            <Modal
                title={btnState ? '修改用户' : '添加用户'}
                centered
                visible={visible}
                destroyOnClose
                onCancel={() => setVisible(false)}
                footer={null}
                width={400}>
                <Form
                {...layout}
                name="basic"
                initialValues={btnState ? users : null}
                onFinish={onFinish}
                >
                <Form.Item
                    label="编号"
                    name="key"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input  disabled={btnState ? true : false}/>
                </Form.Item>
                <Form.Item
                    label="姓名"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="年龄"
                    name="age"
                    rules={[{ required: true, message: 'Please input your age!' }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        确定
                    </Button>
                </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

const mapStateToState = store => {
    return ({
        list: store.list,
        loading: store.loading,
    })
}
const mapDispatchToProps = dispatch => {
    return {
        deleteChange: (record) => {
            dispatch({
                type: DELETE,
                value: record.key
            })

        },
        addChange: (list) => {
            dispatch({
                type: ADD,
                value: list
            })

        },
        updateChange:(list) => {
            dispatch({
                type: UPDATE,
                value: list
            })

        }

    }
}
export default connect(mapStateToState, mapDispatchToProps)(Ui)
