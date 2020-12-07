import React, { Component } from "react";
import ReactDom from 'react-dom'


function getDisplayName(Comp) {
  return Comp.displayName || Comp.name || 'Component'
}

export function HOC(Comp) {
  const displayName = getDisplayName(Comp)
  return (
    <>
      <div>this is header</div>
      <Comp/>
    </>
  )
}

export default function(Comp) {
  return class Inheritance extends Comp {
    componentDidMount() {
      console.log('rerer')
    }
    render() {
      return super.render()
    }
  }
}

export default function(tagName) {
  return function(Comp) {
    return class extends Component {
      componentDidMount() {
        const ctx = this
        const dom = ReactDom.findDOMNode(ctx)
        const nodes = {
          trigger: dom,
          target: dom.querySeletor(tagName)
        }
        console.log('rerer')
      }

      render() {
        return <Comp {...this.props}/>
      }
    }
  }
}