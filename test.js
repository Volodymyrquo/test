//test task

let logged = false;

class Main extends React.Component {
  render() {
    return <img href='/' alt='title' />;
  }
}
class Profile extends React.Component {
  render() {
    if (logged) return <h2>Your profile</h2>;
    return <Redirect to='/login' />;
  }
}
class Login extends React.Component {
  render() {
    logged = true;
    return <h2>Login</h2>;
  }
}

ReactDOM.render(
  <Router>
    <div>
      <nav>
        <Link to='/'>Main</Link> |<Link to='/login'>Login</Link>
        <Link to='/profile'>Profile</Link>
      </nav>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
