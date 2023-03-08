// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })


describe ( 'example Component', () => {

  test ('Debe ser mayor a 10', () => {
    // arreglar
    const value = 5;
    // estimulo 
    value = value + 2



    // obsevar
    if( value > 10) {

    } else {
      throw `${value} no es mayor a 10`
    }

  })

} )