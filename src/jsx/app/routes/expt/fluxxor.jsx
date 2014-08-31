/** @jsx React.DOM */

var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React);
var FluxChildMixin = Fluxxor.FluxChildMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var constants = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  CLEAR_TODOS: 'CLEAR_TODOS'
};

var TodoStore = Fluxxor.createStore({
  initialize: function() {
    this.todos = [];

    this.bindActions(
      constants.ADD_TODO, this.onAddTodo,
      constants.TOGGLE_TODO, this.onToggleTodo,
      constants.CLEAR_TODOS, this.onClearTodos
    );
  },
  onAddTodo: function(payload) {
    this.todos.push({text: payload.text, complete: false});
    this.emit('change');
  },
  onToggleTodo: function(payload) {
    payload.todo.complete = !payload.todo.complete;
    this.emit('change');
  },
  onClearTodos: function() {
    this.todos = this.todos.filter(function(todo) {
      return !todo.complete;
    });
    this.emit('change');
  },
  getState: function() {
    return {
      todos: this.todos
    };
  }
});

var actions = {
  addTodo: function(text) {
    this.dispatch(constants.ADD_TODO, {text: text});
  },
  toggleTodo: function(todo) {
    this.dispatch(constants.TOGGLE_TODO, {todo: todo});
  },
  clearTodos: function() {
    this.dispatch(constants.CLEAR_TODOS);
  }
};

var stores = {
  TodoStore: new TodoStore()
};

var flux = new Fluxxor.Flux(stores, actions);

var FluxxorTests = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin('TodoStore')],
  getDefaultProps: function() {
    return {
      flux: flux
    };
  },
  getInitialState: function() {
    return {
      newTodoText: ''
    };
  },
  getStateFromFlux: function() {
    var flux = this.getFlux();
    return flux.store('TodoStore').getState();
  },
  render: function() {
    return (
      <Container>
        <Grid>
          <Row>
            <Col xs={12}>
              <ul>
                {this.state.todos.map(function(todo, i) {
                  return <li key={i}><TodoItem todo={todo} /></li>;
                })}
              </ul>
              <Form onSubmit={this.onSubmitForm}>
                <FormGroup>
                  <Input type='text' size='30' placeholder='New Todo' value={this.state.newTodoText} onChange={this.handleTodoTextChange} />
                </FormGroup>
                <Button type='submit'>Add Todo</Button>
              </Form>
              <Button onClick={this.clearCompletedTodos}>Clear Completed</Button>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  },
  handleTodoTextChange: function(e) {
    this.setState({newTodoText: e.target.value});
  },
  onSubmitForm: function(e) {
    e.preventDefault();
    if(this.state.newTodoText.trim()) {
      this.getFlux().actions.addTodo(this.state.newTodoText);
      this.setState({newTodoText: ''});
    }
  },
  clearCompletedTodos: function(e) {
    this.getFlux().actions.clearTodos();
  }
});

var TodoItem = React.createClass({
  mixins: [FluxChildMixin],
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },
  render: function() {
    var style = {
      textDecoration: this.props.todo.complete ? 'line-through' : ''
    };

    return <span style={style} onClick={this.onClick}>{this.props.todo.text}</span>;
  },
  onClick: function() {
    this.getFlux().actions.toggleTodo(this.props.todo);
  }
});

module.exports = FluxxorTests;
