export const transformParse = <T,>(data:unknown) => {
    if (typeof data === 'string') {
        return JSON.parse(data) as T
    }
    return null
}