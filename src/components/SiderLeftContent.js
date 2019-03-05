import React, { Component } from 'react';
import { LayoutIcons, FormIcons, LayoutTemplates } from './constants'
import { Collapse, Icon, Avatar, Tag } from 'antd'

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
                src={icon}
                style={{ margin: 5, cursor: 'move' }}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}

            />
        })
    }

    renderLayout(layouts) {
        return layouts.map((layout, i) => {
            return <Tag
                key={i}
                color="#f50"
                style={{ margin: 5, cursor: 'move' }}
                schema={layout.schema}
                name={layout.name}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
                draggable="true"
                onDragStart={(e) => this.onDragStart(e)}
                onDragEnd={this.onDragEnd}
            >
                {layout.id}
            </Tag>


        })
    }

    onDrag(e) {
        return console.log('on drag')
    }

    onDragStart(e) {
        let schema = e.target.getAttribute('schema')
        console.log('dargstart', e.target)
       
        e.dataTransfer.setData("text/plain", schema)

    }

    onDragEnd(e) {
        return console.log('onDragEnd')
    }


    onMouseOver(e) {
        console.log('mouse over')
        e.target.style.background = "#d35400"
    }

    onMouseLeave(e) {
        console.log('mouse leave')
        return e.target.style.background = ''
    }



    render() {

        const layoutIcons = LayoutIcons[0].icons
        const formIcons = FormIcons[0].icons
        const layouts = LayoutTemplates
        console.log('layout', layouts)

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

                <Panel header="Layout templates" key="4" style={customPanelStyle}>

                    {this.renderLayout(layouts)}

                </Panel>
            </Collapse>

        );
    }
}

export default SiderLeftContent;