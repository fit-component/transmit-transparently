import React from 'react'
import TransmitTransparently from 'fit-transmit-transparently'

@TransmitTransparently
export default class Demo extends React.Component {
    render() {
        return (
            <div {...this.props.others}></div>
        )
    }
}