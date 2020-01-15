export const EnumToOptions = (type: any) => {
    const keys = Object.keys(type)
    const realKeys = keys.splice(keys.length / 2, keys.length / 2)
    return realKeys.map(n => ({ value: type[n], label: type[n] }))
}
