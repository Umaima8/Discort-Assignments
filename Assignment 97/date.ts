function getDate (): string {

    const now = new Date() 
    const day = String(now.getDate()).padStart(2,'0')
    const month = String(now.getMonth()).padStart(2,'0')
    const year = String(now.getFullYear())

    return `${day}-${month}-${year}`

}


console.log(getDate())