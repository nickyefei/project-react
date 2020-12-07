import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class Drag extends Component {
  state: any = {
    list: [
      {
        name: 'nick',
        age: 13
      },
      {
        name: 'nancy',
        age: 17
      },
      {
        name: 'david',
        age: 33
      },
    ],
    draging: false,
    startPageY: 0,
    offsetPageY: 0,
    dindex: 0
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleMouseDown(e, index) {
    this.setState({
      draging: true,
      startPageY: e.pageY,
      offsetPageY: e.pageY,
      dindex: index
    })
  }

  getStyle(index) {
    if (index !== this.state.dindex) return {}
    return {
      background: 'grey',
      transform: `translate(10px, ${this.state.offsetPageY}px)`,
      opacity: 0.5
    }
  }

  listSort(list, index, nindex) {
    list = list.slice()
    list.splice(nindex, 0, list.splice(index, 1)[0])
    return list
  }

  handleMouseMove(e) {
    let offset = e.pageY - this.state.startPageY
    const dindex: number = this.state.dindex
    if (offset > 60 && dindex < this.state.list.length ) {
      offset -= 60
      this.setState({
        list: this.listSort(this.state.list, dindex, dindex + 1),
        dindex: dindex - 1,
        startPageY: this.state.startPageY - 60
      })
    } else if (offset < -60 && dindex > 0) {
      offset += 60
      this.setState({
        list: this.listSort(this.state.list, dindex, dindex - 1),
        dindex: dindex - 1,
        startPageY: this.state.startPageY - 60
      })
    }
    this.setState({
      offsetPageY: offset
    })
  }

  handleMouseUp(e) {
    e.preventDefault()
    this.setState({
      draging: false,
      startPageY: 0,
      dindex: 0
    })
  }
  
  render () {
    return (
      <View>
        <View>
          {
            this.state.list.map((item: any, index) => {
              return (
                <View 
                  key={index}
                  onMouseDown={evt => this.handleMouseDown(evt, index)}
                  style={this.getStyle(index)}
                >
                  {item.name}---{item.age}
                </View>
              )
            })
          }
        </View>
        {
          this.state.draging && <View className='mask' onMouseMove={this.handleMouseMove} onMouseUp={this.handleMouseUp}></View>
        }
      </View>
      
    )
  }
}
