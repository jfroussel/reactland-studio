import React, { Component } from 'react';
import { FormIcons, LayoutTemplates } from './constants'
import { Collapse, Icon, Avatar, Tooltip } from 'antd'

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
        this.state = {}
    }

    renderIcons(icons) {
        return icons.map((icon, i) => {
            return <Avatar
                key={i}
                shape="square"
                src={icon}
                style={{ margin: 5, cursor: 'move' }}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
            />
        })
    }

    renderLayout(layouts) {
        return layouts.map((layout, i) => {
            return <div
                key={i}
                style={{ cursor: 'move', zIndex: 'auto', display: 'inline-block', margin: '5px' }}
                schema={layout.schema}
                name={layout.name}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
                draggable="true"
                onDragStart={(e) => this.onDragStart(e)}
                onDragEnd={this.onDragEnd}
            >
                <Tooltip placement="topLeft" title={layout.description}>
                    <Avatar src={layout.icon} size={30} shape="square" />
                </Tooltip>

            </div>
        })
    }



    onDrag(e) {
        e.stopPropagation()
        return console.log('on drag')
    }

    onDragStart(e) {
        let p = e.target.parentElement.parentElement
        let schema = p.getAttribute('schema')
        e.dataTransfer.setData("text/plain", schema)

    }

    onDragEnd(e) {
        return console.log('onDragEnd')
    }


    onMouseOver(e) {
        console.log('mouse over')
        let elm = e.target
        
        //e.target.style.background = "#d35400"
    }

    onMouseLeave(e) {
        //console.log('mouse leave', e.target)
        return e.target.style.background = ''
    }



    render() {

        const formIcons = FormIcons[0].icons
        const layouts = LayoutTemplates

        return (

            <Collapse
                bordered={false}
                defaultActiveKey={['0']}
                expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
            >
                <Panel header="Layout templates" key="1" style={customPanelStyle}>
                    {this.renderLayout(layouts)}
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