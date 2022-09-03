export {};
const sentense = 'Hello my friends!'

export function sum(a: number, b: number) {
    return a + b
}

export function mult(a: number, b: number) {
    return a * b
}

export function splitIntoWords(sentesne: string) {
    return
}
type UsersType = {
    [key: string]: {id: number, name: string}
}
 export const usersq:UsersType = {
    '102': {id: 102, name: "Sam"},
    '323': {id: 323, name: "lsod"},
    '10432': {id: 10432, name: "Sasfms"},
    '101232': {id: 101232, name: "Sfvscwam"},
}
/*const usersArray = [
    {id: 102, name: "Sam"},
    {id: 323, name: "lsod"},
    {id: 10432, name: "Sasfms"},
    {id: 101232, name: "Sfvscwam"}
]*/
var item = {id: 13, name: "Savm"}

usersq[item.id] = item
