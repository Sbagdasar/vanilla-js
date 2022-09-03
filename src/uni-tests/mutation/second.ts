export type UserType = {
    id: number
    name: string
    hair: number
    address: {
        city: string
        title: string
    }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export const makeHairStyle = (u: UserType, power: number) => {
    const copyUser = {...u, hair: u.hair / power}
    //copyUser.hair = u.hair / power;
    return copyUser
}
export const moveUser = (u: UserWithLaptopType, sity: string) => {

    const copy = {...u, address: {...u.address, city: sity}}

    return copy
}


/// array

export type UserWithBooksType = UserType & {
    books: Array<string>
}


export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBooksType, books: Array<string>) => {

    const copy = {...u, books: [...u.books, ...books]}

    return copy
}
export const changeBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => {
    return ({
        ...u,
        books: u.books.map(el=>el ===oldBook? newBook:el)
    })
}

//

export  type CompanyType = { id:number, title:string }
export type CompaniesType = {
    [key:string]:Array<CompanyType>
}

export const updateCompanyName = (c:CompaniesType, userID:string, compID:number, title: string) => {
    let copy = {...c}
    copy[userID] = c[userID].map(el => el.id === compID? {...el, title}:el)
    return copy
}