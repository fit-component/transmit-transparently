import * as React from 'react'
import TransmitTransparent from '../../src'

@TransmitTransparent()
export default class Demo extends React.Component<any,any> {
    render() {
        return (
            <div>通过 this.props.others 获取透传参数</div>
        )
    }
}