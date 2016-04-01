import React from 'react'
import TransmitTransparently from 'fit-transmit-transparently'

@TransmitTransparently
export default class Demo extends React.Component {
    render() {
        return (
            <div {...this.props.others}>
                会将 props 中非 defaultProps 的部分赋值到 props.others , 方便做安全透传
            </div>
        )
    }
}