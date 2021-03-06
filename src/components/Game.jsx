import React from 'react';
import StoryDiv from './StoryDiv';
// let story =  //button choice
//choiceOne='' will change on click of every button
//story =''
// I need a way to make it so that when the user click a button(choice) 
//the div from 
//choice disappears and new scene/prompt in story progresses
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: true,
    }
  }
  displayGame = () => {
    this.setState({
      displayGame: true
    })
  }
 
  render() {

    return (

      <>
        {this.state.gameStart ?
          <StoryDiv
            prompt={this.state.prompt}
            gameData={this.props.gameData}
            selectedPrompt={this.props.selectedPrompt}
            endGame={this.props.endGame}
          />
          :
          <button onClick={this.displayGame}>
          </button>

        }
      </>

      // .........................



    )
  }
}
export default Game;