import React, { createContext } from "react"

const defaultContextValue = {
  menuData: {
    // set your initial data shape here
    menuOpen: false,
    active: "/",
  },
  set: () => {},
}

const { Provider, Consumer } = createContext(defaultContextValue)

class ContextProviderComponent extends React.Component {
  constructor() {
    super()

    this.setData = this.setData.bind(this)
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    }
  }

  setData(newData) {
    this.setState(state => ({
      menuData: {
        ...state.menuData,
        ...newData,
      },
    }))
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { Consumer as default, ContextProviderComponent }
