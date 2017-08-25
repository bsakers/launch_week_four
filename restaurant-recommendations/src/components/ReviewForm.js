import React, { Component } from 'react'

class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      rating: "",
      content: "",
    }
    this.handleFormSubmit=this.handleFormSubmit.bind(this)
    this.handleNameChange=this.handleNameChange.bind(this)
    this.handleRatingChange=this.handleRatingChange.bind(this)
    this.handleReviewChange=this.handleReviewChange.bind(this)
    this.clearForm=this.clearForm.bind(this)
  }
  clearForm(){
    this.setState({name: ""});
    this.setState({rating: ""});
    this.setState({content: ""});
  }
  handleFormSubmit(event) {
    event.preventDefault()
    let payload={
      restaurant_id: this.props.restaurant_id,
      name: this.state.name,
      rating: this.state.rating,
      content: this.state.content
    }
    console.log(payload)

    this.props.addReview(payload)
    this.clearForm()
  }

  handleNameChange(event){
    this.setState({name: event.target.value})
  }
  handleRatingChange(event){
    this.setState({rating: event.target.value})
  }
  handleReviewChange(event){
    this.setState({content: event.target.value})
  }

  render (){
    return(
      <div>
        <label>Your Name
          <input
            value={this.state.name}
            name='userName'
            type='text'
            onChange={this.handleNameChange}
          />
        </label>

        <label>Your Rating
          <select name="rating" onChange={this.handleRatingChange} value={this.state.rating}>
            <option value={0}></option>
            <option value={20}>1 Star</option>
            <option value={40}>2 Star</option>
            <option value={60}>3 Star</option>
            <option value={80}>4 Star</option>
            <option value={100}>5 Star</option>
          </select>
        </label>

        <label>Your Review
          <input
            value={this.state.content}
            name="review"
            type='text'
            onChange={this.handleReviewChange}
          />
        </label>

        <input onClick={this.handleFormSubmit} type="submit" className="button" value="Submit "/>

      </div>
    )
  }
}

export default ReviewForm
