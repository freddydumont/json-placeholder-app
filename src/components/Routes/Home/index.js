import React from 'react';
import { connect } from 'react-redux';
import { Form, Grid, Header, Icon, Segment } from 'semantic-ui-react';

import { login } from '../../../redux/actions';

export class Home extends React.Component {
  state = { username: '', password: '' };

  handleSubmit = () => {
    this.props.dispatch(login(this.props.history));
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <main className="h-100">
        <Grid textAlign="center" verticalAlign="middle" className="h-100">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Icon name="sign in" /> Log in to your account
            </Header>

            {/* LOGIN FORM */}
            <Form size="large" onSubmit={this.handleSubmit} data-testid="form">
              <Segment>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange('username')}
                  required
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  required
                />

                <Form.Button color="teal" fluid size="large" content="Log In" />
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </main>
    );
  }
}

export default connect()(Home);
