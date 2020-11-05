import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: data,
          isLoaded: true
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) return <h1>Loading</h1>;

    return (
      <div className="App">
        <ul>
          {items.map((item) => (
            <li key={item.id}>Nameeeeeee: {item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
