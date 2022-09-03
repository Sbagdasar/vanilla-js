import {sum} from "./first";

let a:number;
let b:number;
let c:number;

beforeEach(()=>{
    a = 1
    b = 2
    c = 3
})


test('sum should be correct', ()=>{
    const result = sum(a,b)
    const result1 = sum(b,c)
    expect(result).toBe(3)
    expect(result1).toBe(5)
})