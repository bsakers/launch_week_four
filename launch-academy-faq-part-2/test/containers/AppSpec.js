import App from '../../src/containers/App';
import Question from '../../src/components/Question';
import Data from '../../src/constants/data'

describe('App',()=>{
  let wrapper;

  beforeEach(() => {
    let response = new window.Response(
      JSON.stringify([
        {
          "id": 1,
          "question": "What is Launch Academy?",
          "answer": "Launch Academy is a 10-week, immersive bootcamp taking eager learners with little to no coding experience and giving them the tools to add value as a junior contributor to a software engineering team"
        }
      ]), {
        status: 200,
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json'}
      }
    )

    spyOn(global, 'fetch').and.returnValue(Promise.resolve(response))
    wrapper = mount(
      <App

      />
    )
  });


  it('should render a Question component', () => {
    setTimeout(() => {
      expect(wrapper.find(Question)).toBePresent();
    }, 0)
  });

  it('should should have the updated state (AFTER MOUNTING AND FETCHING)', () => {
    setTimeout(() => {
      expect(wrapper.state()).toEqual({ selectedQuestion: null, allQuestions: response });
    }, 0)
  });

  it('should render the Question Component with different props if we set selectedQuestion to a different id', () => {
    wrapper.setState({selectedQuestion: 1})
    setTimeout(() => {
      expect(wrapper.find(Question)).toHaveProp("selected", "true")
    },0)
  });

  // it('should have the specified inital state (PRIOR TO MOUNTING AND FETCHING)', () => {
  //   expect(wrapper.state()).toEqual({ selectedQuestion: null, allQuestions: [] });
  // });


})
