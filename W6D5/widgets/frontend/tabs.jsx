import React from "react";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tabnum: 0};
  }

  clickHandler(idx) {
    return () => {
      this.setState({tabnum: idx});
    };
  }

  render () {
    const tabs = this.props.tabs;
    const tabnum = this.state.tabnum;
    return (
      <div>
        <h1>Tabs</h1>
        <section className="widget-tabs">
          <ul>
            {tabs.map((tab, idx) => (
              <li key={tab.title} onClick={this.clickHandler(idx).bind(this)}
                  className={idx === tabnum ? "selected" : ""} >
                <h1>{tab.title}</h1>
              </li>
            ))}
          </ul>
          <article>
            <p>{tabs[tabnum].content}</p>
          </article>
        </section>
      </div>
    );
  }


}

export default Tabs;
