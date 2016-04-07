export default (defaultProps:any = {}, props:any = {})=> {
    let defaultPropsKeys:any = Object.keys(defaultProps)
    let others:any = {}
    Object.keys(props).forEach((key:string)=> {
        if (!defaultPropsKeys.includes(key)) {
            others[key] = props[key]
        }
    })
    return others
}