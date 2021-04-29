import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import Redux from '../../Component/Reduxs'
import routers from '../../Router'
const {Content, Footer, Sider } = Layout
const { SubMenu } = Menu;
export default class index extends Component {
    render() {
        return (
            <Layout>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {
                    routers.map((item)=>{
                        return(
                            <SubMenu key={item.path} title={item.title}>
                                <Menu.Item key={item.path}>{item.title}</Menu.Item>
                            </SubMenu>
                        )
                    })
                }
               
              </Menu>
            </Sider>
            <Layout>
              
              <Content style={{padding:"20px 50px"}}>
                <div className="site-layout-background">
                    <Redux/>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        )
    }
}
