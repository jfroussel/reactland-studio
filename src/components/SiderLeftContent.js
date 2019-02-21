import React, { Component } from 'react';
import { LayoutIcons, FormIcons } from './constants'
import { Collapse, Icon, Avatar } from 'antd'

const Panel = Collapse.Panel;
const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 15,
    border: 0,
    overflow: 'hidden',
};



class SiderLeftContent extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    renderIcons(icons) {
        return icons.map((icon, i) => {
            return <Avatar
                key={i}
                shape="square"
                style={{ margin: 5 }}
                src={icon}

            />
        })
    }

    onDragStart(e) {
        return console.log('onDragStart', e.target)
    }

    onDragEnd(e) {
        return console.log('onDragEnd', e.target)
    }
    onDrop(e) {
        e.preventDefault()
        console.log('ondrop')

       

    }



    render() {
        const layoutIcons = LayoutIcons[0].icons
        const formIcons = FormIcons[0].icons

        return (

            <Collapse
                bordered={false}
                defaultActiveKey={['0']}
                expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
            >
                <Panel header="Layout templates" key="1" style={customPanelStyle}>

                    <div
                        draggable="true"
                        onDragStart={this.onDragStart}
                        onDragEnd={this.onDragEnd}
                        onDrop={this.onDrop}
                    >
                        {this.renderIcons(layoutIcons)}
                    </div>


                </Panel>
                <Panel header="Form components" key="2" style={customPanelStyle}>
                    {
                        this.renderIcons(formIcons)
                    }
                </Panel>
                <Panel header="Other Components" key="3" style={customPanelStyle}>
                    others components
                </Panel>
            </Collapse>

        );
    }
}

export default SiderLeftContent;