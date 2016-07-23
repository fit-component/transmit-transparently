import * as React from 'react'
import others from '../others'
import * as _ from 'lodash'

export interface StateInterface {
    others: any
}

export default (ignore?: string[], isReactNative?: boolean) => (Target: any) => {
    class Transmit extends React.Component<any, StateInterface> {
        public state: StateInterface = {
            others: {}
        }

        constructor(props: any) {
            super(props)
        }

        componentWillMount() {
            this.state.others = others(Target.defaultProps, this.props, ignore, isReactNative)
        }

        public render(): React.ReactElement<any> {
            const newProps: any = _.cloneDeep(this.props)
            newProps.others = this.state.others
            return React.createElement(Target, newProps, this.props.children)
        }
    }

    const func: any = () => {
        return Transmit
    }

    return func()
}