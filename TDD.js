//react 에서 TDD
// "@testing-library/jest-dom"
// "@testing-library/react"
// "@testing-library/user-event"
// npm run test
//test파일 만들때
//<파일명>.test.js
describe('테스트 모음',()=>{
    it('IsThree',()=>{
    expect(1+2).toBe(3);    
    });
    it('IsFour',()=>{
        expect(5-1).toBe(4);    
    })
})