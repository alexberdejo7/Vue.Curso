import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/counter'

describe('counter Component', () => {

    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })
//     test('debe de hacer match con el snapshot', () => {
        
//         const wrapper = shallowMount(Counter)

//         expect( wrapper.html() ).toMatchSnapshot()

//     })
// })

    test('h2 debe tener el valor por defecto "counter"', () => {
        
        expect(wrapper.find('h2').exists()).toBeTruthy()
        const h2Value = wrapper.find('.counter-title').text()
        expect(h2Value).toBe('Counter')
    })




    test ('el valor por defecto debe de ser 100 en el p', () => {


        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('100')

    })




    test('debe de incrementar y decremenar el valor del contador', async() => {
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const pValue = wrapper.find('[data-testid="counter"]').text()

        expect(pValue).toBe('101')

    })




    test('debe mostrar pop tittle', () => {
        const tittle = 'holi'

        const wrapper = shallowMount (Counter, {
            props: {
                tittle,
            }
            
        })

        expect(wrapper.find('h2').text() ).toBe(tittle)

        

    })


})