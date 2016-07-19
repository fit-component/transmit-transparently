import * as _ from 'lodash'
import * as React from 'react'

class HTMLAttributesClass implements React.HTMLAttributes {

}

export default (defaultProps: any = {}, props: any = {}, ignore?: string[])=> {
    let defaultPropsKeys: any = Object.keys(defaultProps)
    let others: any = {}

    console.log(Object.keys(props))

    Object.keys(props).forEach((key: string)=> {
        if (!_.includes(defaultPropsKeys, key) && !_.includes(ignore, key)) {
            others[key] = props[key]
        }
    })

    return others
}