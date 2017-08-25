import Question from '../../src/components/Question'

describe('Question', () => {
  let wrapper,
      onClickSpy,
      selected;

  beforeEach(() => {
    onClickSpy= jasmine.createSpy('onClick Spy')
    wrapper = mount(
      <Question
        question='What is your camp like?'
        answer='Warrior PVP'
        selected= {true}
        handleClick={onClickSpy}
      />
    )
  })

  it('receives props', ()=>{
    expect(wrapper.find(Question).props()).toEqual({
      question:'What is your camp like?',
      answer:'Warrior PVP',
      selected: true,
      handleClick:onClickSpy
    })
  })

  it('should render a Question component that has an h5 with question text', () => {
    expect(wrapper.find('h5')).toBePresent()
    expect(wrapper.find('h5').text()).toEqual('What is your camp like?')
  })

  it('should render a Question component that has an p with question text', () => {
    expect(wrapper.find('p')).toBePresent()
    expect(wrapper.find('p').text()).toEqual('Warrior PVP')
  })

  it('should render a Question component when selected prop is set to true', () => {
    expect(wrapper.find('i')).toHaveProp("className", "fa fa-minus-square fa-2x green")
  })

  it('should invoke the handleClick function from props when clicked', () => {
    wrapper.find('h5').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  })

})
