export const formDate = (dataString:string):string=>{
    const date = new Date(dataString)
    const options = {
        year: 'numeric',
        month: "long",
        day: 'numeric'
    }
    return date.toLocaleDateString('us-US', options)
}