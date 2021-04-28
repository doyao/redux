import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Space, Modal,Form,Input} from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { DELETE } from '../../Redux/constants'
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
    const { list, loading } = props;

    const updateChange = (record) => {
        setVisible(true);
        setBtnState(true);
        setUsers(record);
    }
    const addChange = () => {
        setVisible(true);
        setBtnState(false);
    }
    const onFinish = () => {
        setUsers([null]);
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
            title: 'Tags',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button type='primary' onClick={() => { updateChange(record) }} icon={<EditOutlined />}>修改</Button>
                    <Button type='ghost' onClick={() => { props.deleteChange(record) }} icon={<DeleteOutlined />}>删除</Button>
                </Space>

            ),
        },
    ];
    return (
        <div>
            <Button type="primary" onClick={() => { addChange() }}>添加用户</Button>
            <Table loading={loading} columns={columns} dataSource={list} />
            <Modal
                title={btnState ? '修改用户' : '添加用户'}
                centered
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
                width={400}>
                <Form
                {...layout}
                name="basic"
                initialValues={users}
                onFinish={onFinish}
                >
                <Form.Item
                    label="编号"
                    name="key"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input disabled/>
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

    }
}
export default connect(mapStateToState, mapDispatchToProps)(Ui)
