import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import SiderLeftContent from './SiderLeftContent'
import SiderRightContent from './SiderRightContent'
import SiderContent from './SiderContent'

const {
    Header, Footer, Sider, Content,
} = Layout;

const styles = {
    sider: {
        backgroundColor: '#c7c7c7'
    }
}

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false
        }
    }

    onClose() {
        return this.setState({ collapsed: true })
    }

    onOpen() {
        return this.setState({ collapsed: false })
    }


    render() {
        console.log('onCollapse', this.state.collapsed)
        return (
            <Layout style={{ minHeight: window.innerHeight }}>
                <Header style={{ background: "#212121", border: "solid 1px #c7c7c7" }} ></Header>
                <Layout>
                    <Sider
                        style={{ background: "#212121", color: "#fff" }}

                    >
                    <SiderLeftContent />
                    </Sider>
                    <Content style={{ background: "none" }}>
                        <SiderContent />
                    </Content>
                    <Sider
                        style={{ background: "#212121", color: "#fff" }}
                        theme="#212121"
                        collapsible
                        trigger={null}
                        collapsedWidth="30"
                        collapsed={this.state.collapsed}
                        onCollapse={this.state.collapsed}
                    >
                        {
                            !this.state.collapsed
                                ? <Icon type="double-right" style={{ fontSize: 20, padding: "5px 5px" }} onClick={(e) => this.onClose(e)} />
                                : <Icon type="double-left" style={{ fontSize: 20, padding: "5px 5px" }} onClick={(e) => this.onOpen(e)} />
                        }
                        <br />
                        <SiderRightContent />
                    </Sider>
                </Layout>

                <Footer style={{ background: "#212121", border: "solid 1px #c7c7c7" }}></Footer>
            </Layout>
        );
    }
}

export default Dashboard;

