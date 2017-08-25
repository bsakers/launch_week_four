import React, { Component } from 'react';
import RandomSprout from '../components/RandomSprout';
import SproutsIndex from '../components/SproutsIndex';
import LongestSprout from '../components/LongestSprout';

class SproutsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: "",
      recipes: [],
      longestRecipe: ""
    }
  }

  getRandomRecipe(){
    fetch('http://localhost:4567/api/v1/random-recipe')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        let randomRecipe = body
        this.setState({ recipe: randomRecipe });
        this.setState({ recipes: [] })
        this.setState({ longestRecipe: ""})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  getAllRecipes(){
    fetch('http://localhost:4567/api/v1/recipes')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        let allRecipes = body
        this.setState({ recipes: this.state.recipes.concat(allRecipes) });
        this.setState({recipe: "",})
        this.setState({ longestRecipe: ""})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  getLongestRecipe(){
    fetch('http://localhost:4567/api/v1/longest-recipe')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        let longestRecipe = body
        this.setState({longestRecipe: longestRecipe });
        this.setState({recipe: "",})
        this.setState({recipes: []})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    let handleRandomClick = () => {
      this.getRandomRecipe();
    }

    let handleIndexClick = () => {
      this.getAllRecipes();
    }

    let handleLongestClick = () => {
      this.getLongestRecipe();
    }

    return(
      <div className="container">
        <h1>Sprout Fetcher</h1>
        <RandomSprout
          recipe={this.state.recipe}
          handleClick = {handleRandomClick}
        />
        <SproutsIndex
          recipes={this.state.recipes}
          handleClick={handleIndexClick}
        />

        <LongestSprout
          longestRecipe={this.state.longestRecipe}
          handleClick={handleLongestClick}
        />

        <div className="buttons">
          <button onClick={handleRandomClick} className="btn">Get Random Recipe</button>

          <button onClick={handleIndexClick} className="btn">See All Recipes</button>

          <button onClick={handleLongestClick} className="btn">See Longest Recipe</button>
        </div>
      </div>
    )
  }
}

export default SproutsContainer;
