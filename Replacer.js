var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var style_purple = {
  position: "absolute",
  backgroundColor: "purple",
  width: "100px",
  height: "100px"
}

var style_red = {
  position: "absolute",
  backgroundColor: "red",
  width: "100px",
  height: "100px"
}

var gray_box = {
  backgroundColor: "gray",
  width: "100px",
  height: "200px"
}

var placement = {
  width: "100px",
  height: "100px"
}
class Replacer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    }
  }

  switch() {
    this.setState({ index: (this.state.index === 0) ? 1 : 0 })
  }

  render() {
    var output = this.state.index === 0 ?
      <div key="foo1" style={style_purple}></div>
      :
      <div key="foo2" style={style_red}></div>;
    return <div>
      <button onClick={this.switch.bind(this)}>Switch</button>
      <div style={gray_box} />
      <div style={placement}>
        <ReactCSSTransitionGroup
        transitionName='example'
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
          {output}
        </ReactCSSTransitionGroup>
      </div>
      <div style={gray_box} />
    </div>
  }
}