import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import ShowMore from '@/components/ShowMore.vue'

describe('ShowMore', () => {
    let wrapper 

    beforeEach(() => {
        wrapper = mount(ShowMore, {
            slots: {
                default: '<div style="width: 80px;">test ewfwejfwiejfw jfewijf wjeifjewijfiowejofjweiojfwei jfwiej fowijef wieojfiowjefiowefio wejfiowejf iowejf ioewjfiwe foiewj foiewjfio wefioew fiowejfiowejfiowe jfeiowjfieo wjfiwje fewiofweoif ewiofe wjfewiojfoiewjfoiewj fiojweifj weijfweo jfwejf weijfw ejfojweiofj wfjiweiojfwoef wefjweoijfw eiojfew few weofwiejfoweijfiwjeofijweoifjwe test ewfwejfwiejfw jfewijf wjeifjewijfiowejofjweiojfwei jfwiej fowijef wieojfiowjefiowefio wejfiowejf iowejf ioewjfiwe foiewj foiewjfio wefioew fiowejfiowejfiowe jfeiowjfieo wjfiwje fewiofweoif ewiofe wjfewiojfoiewjfoiewj fiojweifj weijfweo jfwejf weijfw ejfojweiofj wfjiweiojfwoef wefjweoijfw eiojfew few weofwiejfoweijfiwjeofijweoifjwe test ewfwejfwiejfw jfewijf wjeifjewijfiowejofjweiojfwei jfwiej fowijef wieojfiowjefiowefio wejfiowejf iowejf ioewjfiwe foiewj foiewjfio wefioew fiowejfiowejfiowe jfeiowjfieo wjfiwje fewiofweoif ewiofe wjfewiojfoiewjfoiewj fiojweifj weijfweo jfwejf weijfw ejfojweiofj wfjiweiojfwoef wefjweoijfw eiojfew few weofwiejfoweijfiwjeofijweoifjwe  test ewfwejfwiejfw jfewijf wjeifjewijfiowejofjweiojfwei jfwiej fowijef wieojfiowjefiowefio wejfiowejf iowejf ioewjfiwe foiewj foiewjfio wefioew fiowejfiowejfiowe jfeiowjfieo wjfiwje fewiofweoif ewiofe wjfewiojfoiewjfoiewj fiojweifj weijfweo jfwejf weijfw ejfojweiofj wfjiweiojfwoef wefjweoijfw eiojfew few weofwiejfoweijfiwjeofijweoifjwe</div>'
            },
        })
    })

    it('will show more text when button clicked', () => {
        wrapper.setData({ actualHeight: 100 })
        wrapper.setProps({ initialHeight: 100 })

        expect(wrapper.contains('button')).to.be.true

        expect(wrapper.find('button').text()).to.include('more')
        wrapper.find('button').trigger('click')
        expect(wrapper.find('button').text()).to.include('less')
    })

})
