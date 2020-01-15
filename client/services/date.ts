const getFullMinutes = date => {
    const m = date.getMinutes()
    return m < 10 ? `0${m}` : m
}

export const format = (dateString: string | undefined | Date) => {
    if (!dateString) {
        return ''
    }
    const date = new Date(dateString)
    return `${date.getDate()}.${date.getMonth() + 1} ${date.getHours()}:${getFullMinutes(
        date
    )}`
}
