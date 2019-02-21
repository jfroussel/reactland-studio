import React, { Component } from 'react';

const style = {
    container: {
        //border: 'dashed 2px #c7c7c7',
        minHeight: window.innerHeight,
        margin: '10px 10px'

    }
}

class SiderContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dragged: ''
        }
    }

    onDragOver(e) {
        //return console.log('onDragOver', e.target)
    }

    onDragEnter(e) {
        if (e.target.className == "dropzone") {
            e.target.style.border = 'dashed 2px #d35400'
        }
    }

    onDragLeave(e) {
        if (e.target.className == "dropzone") {
            e.target.style.border = 'dashed 2px rgb(199, 198, 197)'
        }
    }

   

    render() {
        console.log('drop', this.state.dragged)
        return (

            <div
                className="dropzone"
                style={style.container}
                onDragOver={this.onDragOver}
                onDragEnter={this.onDragEnter}
                onDragLeave={this.onDragLeave}
                
            >

            </div>

        )
    }
}

export default SiderContent;
