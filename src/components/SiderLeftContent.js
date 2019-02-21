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

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class SiderLeftContent extends Component {

    renderIcons(icons) {
        return icons.map((icon) => {
            console.log('icon',icon)
            return <Avatar shape="square" style={{margin:5}} src={icon} />
        })
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
                    {
                        this.renderIcons(layoutIcons)
                    }
                </Panel>
                <Panel header="Form components" key="2" style={customPanelStyle}>
                    {
                        this.renderIcons(formIcons)
                    }
                </Panel>
                <Panel header="Other Components" key="3" style={customPanelStyle}>
                    <p>{text}</p>
                </Panel>
            </Collapse> 
           
        );
    }
}

export default SiderLeftContent;