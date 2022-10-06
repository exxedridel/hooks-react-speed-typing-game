import React, {Component} from "react"
/**
 * Pop Quiz!
 * 
 * Refactor the class component below to use hooks instead
 */


class App extends Component {   
    state = {
        count: 0
    }
    
    increment = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    
    render() {
        return (
            <div>
                <h1>The count is {this.state.count}</h1>
                <button onClick={this.increment}>Add 1</button>
            </div>
        )
    }
}

export default App