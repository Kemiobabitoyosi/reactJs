import React, { Component } from 'react'

class ErroBoundary extends Component {

constructor(props) {
  super(props)

  this.state = {
     hasError: false
  }
}

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
}

  render() {
    if (this.state.hasError) {
        return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}

export default ErroBoundary

// So basically even after di=oing the error boundary and wrapping it in App.js it would still show an error until you close the tab and the react team mentioned that this is because they would like you to take note of all the errors possible. All you need do  is close the tab and viola!
// Not a good idea for ecommerce website has it would hide other products, hence it should be wrapped individually in app.js
// Error boundaries are SpeechRecognitionAlternative components that catch Javascript error in their chikd somponent TreeWalker, log those errors and disply a flall-back UI
// They do not catch errors inside event handlers