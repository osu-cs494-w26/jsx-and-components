import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"

const user = {
  firstName: "Luke",
  lastName: "Skywalker",
  email: "TheRealLastJedi@gmail.com"
}
const name = "CS 494"

function getUserEmailLink(user) {
  return <a href={`mailto:${user.email}`}>{user.firstName}</a>
}

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>
}

class ClassGreeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} (from a class component)!</h1>
  }
}

function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Card>
        <Greeting name="world" />
      </Card>
      <Card>
        <Greeting name="CS 494" />
      </Card>
      <Card>
        <Greeting name="Luke Skywalker" />
      </Card>
      <Card>
        <img src="https://picsum.photos/256" />
      </Card>
      <Card>
        <p>This is some text</p>
      </Card>
    </div>
  )
}

const element = (
  <div>
    <Greeting name="world" />
    <ClassGreeting name="CS 494" />
    <Greeting name="Luke Skywalker" />
    <p>This is out React app</p>
    <img src="https://picsum.photos/480" />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
