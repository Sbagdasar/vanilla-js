import {
    addNewBooksToUser,
    changeBook, CompaniesType,
    makeHairStyle,
    moveUser, updateCompanyName,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./second";


test('inc user age . reference type', () => {
    const user: UserType = {
        id:1,
        name: "sam",
        hair: 26,
        address: {
            city: 'Minsk',
            title: "Hero city"
        }
    }

    const awesomeUser = makeHairStyle(user, 2)
    expect(user.hair).toBe(26)
    expect(awesomeUser.hair).toBe(13)
})

test('change address', () => {
    const user: UserWithLaptopType = {
        id:1,
        name: "sam",
        hair: 26,
        address: {
            city: 'Minsk',
            title: "Hero city"
        },
        laptop: {
            title: "macAir"
        }
    }

    const movedUser = moveUser(user, 'Yerevan')
    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Yerevan')
    expect(movedUser.address.title).toBe(user.address.title)
})

test('user with laptop & books', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        id:1,
        name: "sam",
        hair: 26,
        address: {
            city: 'Minsk',
            title: "Hero city"
        },
        laptop: {
            title: "macAir"
        },
        books:[
            'Js',
            'Css',
            'HTML',
            'react'
        ]
    }

    const userWithNewBooks = addNewBooksToUser(user, ['ts','rest api'])
    expect(user).not.toBe(userWithNewBooks)
    expect(user.address).toBe(userWithNewBooks.address)
    expect(user.laptop).toBe(userWithNewBooks.laptop)
    expect(userWithNewBooks.books).not.toBe(user.books)
    expect(userWithNewBooks.books[4]).toBe('ts')
})

test('change book', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        id:1,
        name: "sam",
        hair: 26,
        address: {
            city: 'Minsk',
            title: "Hero city"
        },
        laptop: {
            title: "macAir"
        },
        books:[
            'HTML',
            'Css',
            'js',
            'react'
        ]
    }

    const userWithNewBooks = changeBook(user, 'js', 'ts')
    expect(user).not.toBe(userWithNewBooks)
    expect(user.address).toBe(userWithNewBooks.address)
    expect(user.laptop).toBe(userWithNewBooks.laptop)
    expect(userWithNewBooks.books).not.toBe(user.books)
    expect(userWithNewBooks.books[2]).toBe('ts')
})


test('companies', ()=>{
    const user: UserWithLaptopType & UserWithBooksType = {
        id:1,
        name: "sam",
        hair: 26,
        address: {
            city: 'Minsk',
            title: "Hero city"
        },
        laptop: {
            title: "macAir"
        },
        books:[
            'HTML',
            'Css',
            'js',
            'react'
        ]
    }
    const companies:CompaniesType={
        '1':[{id: 3, title:"VTB"}],
        '2':[{id: 1, title:"red"}],
    }


    const userWithNewBooks = updateCompanyName(companies, "1", 3, 'DOM')
    expect(companies).not.toBe(userWithNewBooks)
    expect(companies[1]).not.toBe(userWithNewBooks[1])

})