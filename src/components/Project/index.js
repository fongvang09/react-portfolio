import React, { Component } from "react";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    project
  };

  removeFriend = id => {
    // Filter this.state.project for project with an id not equal to the id being removed
    const project = this.state.project.filter(friend => friend.id !== id);
    // Set this.state.project equal to the new project array
    this.setState({ project });
  };

  // Map over this.state.project and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Project List</Title>
        {this.state.project.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
