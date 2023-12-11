import React, { Component } from 'react'

class UserGreeting extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        isLoggedIn: true
     }
   }
   
  render() {
    // SHORT CIRCUIT OPERATOR APPROACH (usually used when you want to render euther a vale or nothing)
    return this.state.isLoggedIn && <div>Welcome Toyosi</div>

    // TENARY OPERATIONS APPROACH
    //  return (
    //   this.state.isLoggedIn ? 
    //   <div>Welcome Toyosi</div> :
    //   <div>Welcome Guest</div>
    //  )

    // ELEMENT BLOCKs variable approach
    // let message 
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Toyosi</div>
    // } else {
    //    message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    // If ELSE approach
    // if (this.state.isLoggedIn) {
    //     return (
    //         <div>Welcome Toyosi</div>
    //     )
    // } else {
    //    return <div>Welcome Guest</div>
    // }
    // return (
    //   <div>
    //       <div>Welcome Toyosi</div>
    //       <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting