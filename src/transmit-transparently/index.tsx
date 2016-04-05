import * as React from 'react'
import others from '../others'

const clone = (obj:any):Object=> {
    switch (obj.constructor.name) {
        case 'Object':
            let copyObject:any = {}
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    copyObject[key] = clone(obj[key])
                }
            }
            return copyObject

        case 'Array':
            let copyArray:any = new Array(obj.length)
            for (let i = 0, l = obj.length; i < l; i++) {
                copyArray[i] = clone(obj[i])
            }
            return copyArray

        case 'RegExp':
            let flags:string = ''
            flags += obj.multiline ? 'm' : ''
            flags += obj.global ? 'g' : ''
            flags += obj.ignoreCase ? 'i' : ''
            return new RegExp(obj.source, flags)

        case 'Date':
            return new Date(obj.getTime())

        default: // String, Number, Boolean, …
            return obj
    }
}

export interface StateInterface {
    others:any
}

export default (Target:any)=> {
    class Transmit extends React.Component<any, StateInterface> {
        public state:StateInterface = {
            others: {}
        }

        constructor(props:any) {
            super(props)
        }

        componentWillMount() {
            this.state.others = others(Target.defaultProps, this.props)
        }

        public render():React.ReactElement<any> {
            const newProps:any = clone(this.props)
            newProps.others = this.state.others
            return React.createElement(Target, newProps, this.props.children)
        }
    }

    const func:any = () => {
        return Transmit
    }

    return func()
}