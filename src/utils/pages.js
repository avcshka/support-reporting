export const getPageCount = (responseLength, limitRows) => {
    return Math.ceil(responseLength / limitRows)
}