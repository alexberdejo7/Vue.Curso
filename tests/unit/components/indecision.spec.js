import { shallowMount } from "@vue/test-utils";
import Indecision from '@/components/indecision.vue'



describe ('Indecision component', () => {

    let wrapper
    let clgSpy

    // implementacion comun
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: "yes",
            forced: false,
            image: "https://yesno.wtf/assets/yes/2.gif"

        })
    }))

    beforeEach( () => {
        

        wrapper = shallowMount(Indecision)

        clgSpy = jest.spyOn( console,'log')

        jest.clearAllMocks()
    })

    test('debe de hacer match con snapshot', () => {

        expect(wrapper.html() ).toMatchSnapshot()

    })





    test('escrbir no debe disparar nda ', async() => {
        const getAsnwerSpy = jest.spyOn(wrapper.vm, 'getAnswer') 
        
        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')

        expect (clgSpy).toHaveBeenCalled()
        expect (getAsnwerSpy).not.toHaveReturnedTimes//(0)

    })



    test('escrbir el simbolo ? debe disparar getanswer', async () => {
        const getAsnwerSpy = jest.spyOn(wrapper.vm, 'getAnswer') 
        
        const input = wrapper.find('input')
        await input.setValue('Holi')

        // // expect (clgSpy).toHaveBeenCalled()
        expect (getAsnwerSpy).toHaveReturnedTimes//(0)

    })


    


    test ('pruebas getanswer ', async() => {

        await wrapper.vm.getAnswer()

    
        // console.log( wrapper.vm.img)
        // console.log( wrapper.vm.answer)
        const img = wrapper.find('img')

        expect (img.exists() ).toBeCalled
        expect( wrapper.vm.img ).toBe("https://yesno.wtf/assets/yes/2.gif")
        expect (wrapper.vm.answer).toBe('si')

    })


    test('fallo en api', async() => {

        fetch.mockImplementationOnce( () => Promise.reject('API down '))

        await wrapper.vm.getAnswer()

        const image = wrapper.find('image')
        expect(image.exists() ).toBeFalsy()
        expect (wrapper.vm.answer).toBe('No cargo API')






    })




})

