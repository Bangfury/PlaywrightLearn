const {test,expect} =require('@playwright/test')

test('My Fisrt Test',async ({page})=>{
    expect(12).toBe(12);
}) 
test('My Second Test',async ({page})=>{
    expect(3).toBe(4); 
})
test('My Third Test',async ({page})=>{
    expect(5.0).toBe(5.0);
    expect(true).toBeTruthy();
})  
test('My Fourth Test',async ({page})=>{
    expect("Chad K").toContain("Chad")
})
test('My Fifth Test',async ({page})=>{
    expect(false).toBeFalsy();
})
test('My Sixth Test',async ({page})=>{
    expect("Chad K".includes("K")).toBeTruthy()
})