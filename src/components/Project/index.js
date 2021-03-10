import React, { Component } from "react";

class App extends Component {
  // Setting this.state.projects to the projects json array
  state = {
    projects
  };

  // Map over this.state.project and render a projectCard component for each project object
  render() {
    return (
      <Wrapper>
        <Title>Project List</Title>
        {this.state.projects.map(project => (
        //   <FriendCard
        <>
            id={project.id}
            title = {project.title}
            image={project.image}
            GitHub={project.github}
            Deployed Link = {project.deployed}
            
            </>
        //   />
        ))}
      </Wrapper>
    );
  }
}

export default App;
