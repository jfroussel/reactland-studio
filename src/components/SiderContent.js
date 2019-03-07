import React, { Component } from 'react';
import { Button } from 'antd'

const style = {
    container: {
        minHeight: '100vh',
        margin: '10px 10px'

    }
}



class SiderContent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onDragOver(e) {
        e.preventDefault()
        console.log('on drag over', e.dataTransfer.getData("text"))
    }

    onDragEnter(e) {
        e.preventDefault()
        if (e.target.className === "dropzone") {
            e.target.style.border = 'dashed 2px #d35400'

        }
    }

    onDragLeave(e) {
        if (e.target.className === "dropzone") {
            e.target.style.border = 'dashed 2px rgb(199, 198, 197)'
        }
    }

    onDrop(e) {
        e.preventDefault();
        let data = e.dataTransfer.getData("text")
        e.target.innerHTML = data
        if (e.target.className === "dropzone") {
            e.target.style.border = 'dashed 2px rgb(199, 198, 197)'
        }
        console.log('on drop data', data)
    }

    mouseOver(e) {
        console.log('mouse over')
    }
    onClick(e) {
        if(!e.target.children.length == 0) {
            for (let i = 0; i < e.target.children.length; i++) {
                console.log(e.target.children[i].tagName);
              }
        }

    }


    render() {
        console.log('state', this.state)
        return (
            <div>
                <div className=""><Button type="primary" onClick={this.onClick} >Reset</Button></div>
                <div
                    className="dropzone pt-2 pb-2"
                    style={style.container}
                    onDragOver={this.onDragOver}
                    onDragEnter={this.onDragEnter}
                    onDragLeave={this.onDragLeave}
                    onDrop={this.onDrop}
                    onClick={this.onClean}
                    onMouseOver={this.mouseOver}
                    onClick={this.onClick}
                >
                </div>
            </div>


        )
    }
}

export default SiderContent;
