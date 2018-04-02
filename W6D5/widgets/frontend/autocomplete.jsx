import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "" };
  }

  

  render() {
    return (
      <div>
        <h1>Autocomplete</h1>
        <section className="search">
          <input type="text"
                 name="name"
                 placeholder="Search..."
                 value={this.state.inputVal} />
        </section>
        <section className="names">
          <ul>
            {this.props.names.map((name) => (
              <li>{name}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default Autocomplete;
