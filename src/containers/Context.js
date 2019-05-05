import React from 'react'

export const AppContext = React.createContext()

export class ContextProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      message: 'Hello, world!',
    }
  }

  incrementCounter = () => {
    this.setState(prevState => { return {counter: prevState.counter + 1} })
  }

  render() {
    return (
      <AppContext.Provider value={ {...this.state, incrementCounter: this.incrementCounter} }>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export const withContext = Component => props => (
  <AppContext.Consumer>
    {context => <Component {...props} context={context} />}
  </AppContext.Consumer>
)
