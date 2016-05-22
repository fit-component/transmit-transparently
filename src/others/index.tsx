import * as _ from 'lodash'

export default (defaultProps: any = {}, props: any = {}, ignore?: string[])=> {
    let defaultPropsKeys: any = Object.keys(defaultProps)
    let others: any = {}

    Object.keys(props).forEach((key: string)=> {
        if (!_.includes(defaultPropsKeys, key) && !_.includes(ignore, key)) {
            others[key] = props[key]
        }
    })

    return others
}