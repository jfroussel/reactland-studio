import React, { Component } from 'react';

const style = {
    container: {
        //border: 'dashed 2px #c7c7c7',
        minHeight: window.innerHeight - 150,
        margin: '10px 10px'

    }
}



class SiderContent extends Component {
    constructor(props) {
        super(props)
        this.state = { target: 'test'}
    }

    onDragOver(e) {
        e.preventDefault()
      
        console.log('on drag over',e.dataTransfer.getData("text"))
    }

    onDragEnter(e) {
        e.preventDefault()

        console.log('dragEnter', e.target)
        if (e.target.className === "dropzone") {
            e.target.style.border = 'dashed 2px #d35400'

        }
    }

    onDragLeave(e) {
        console.log('dragLeave')
        if (e.target.className === "dropzone") {
            e.target.style.border = 'dashed 2px rgb(199, 198, 197)'
        }
    }

    onDrop(e) {
       e.preventDefault();
        var data = e.dataTransfer.getData("text")
       e.target.innerHTML = data
       console.log(e.target) 
    }

    onClean(e) {
       if(e.target.className === "dropzone") {
           console.log('on clean', e.target)
       }
    }


    render() {
        console.log('state', this.state)
        return (

            <div
                className="dropzone"
                style={style.container}
                onDragOver={this.onDragOver}
                onDragEnter={this.onDragEnter}
                onDragLeave={this.onDragLeave}
                onDrop={this.onDrop}
                onDoubleClick={this.onClean}
            >
            </div>

        )
    }
}

export default SiderContent;
