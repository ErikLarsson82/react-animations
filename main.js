var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

console.log('React.addons.CSSTransitionGroup',
    React &&
    React.addons &&
    React.addons.CSSTransitionGroup);

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: ['hello', 'world', 'click', 'me'] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([prompt('Enter some text')]);
    this.setState({ items: newItems });
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  render() {
    const items = this.state.items.map((item, i) => React.createElement(
      'div',
      { key: item, onClick: () => this.handleRemove(i) },
      item
    ));

    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: this.handleAdd },
        'Add Item'
      ),
      React.createElement(
        ReactCSSTransitionGroup,
        {
          transitionName: 'example',
          transitionAppear: true,
          transitionAppearTimeout: 500,
          transitionEnterTimeout: 500,
          transitionLeaveTimeout: 300 },
        items
      )
    );
  }
}