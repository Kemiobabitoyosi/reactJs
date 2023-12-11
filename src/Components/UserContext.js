import React from "react";

const UserContext = React.createContext("Codevolution");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;

// Context provides a way to pass data through the component tree without having to pass props down manually at every level
// Steps to use a useContext
// 1. Create the Context
// 2. Provide a context Value
// 3. Consume the context value

// Limitations with using Context Types which is the sceond export
// 1. It only works with Class Components 
// 2. You can only subscribe to a single context
