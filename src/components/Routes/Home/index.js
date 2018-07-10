import React from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Grid,
  Header,
  Icon,
  List,
  Message,
  Popup,
  Segment,
} from 'semantic-ui-react';

import { usernames } from '../../../static';
import { login } from '../../../redux/actions';

class Home extends React.Component {
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
      <main>
        <style>{`
      body > div,
      body > div > main {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Icon name="sign in" /> Log in to your account
            </Header>

            {/* LOGIN FORM */}
            <Form size="large" onSubmit={this.handleSubmit}>
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

            {/* MESSAGE WITH USERNAME LIST POPUP */}
            <Popup
              style={{ height: 'initial' }} // reset because of style tag in main
              on={['hover', 'click', 'focus']}
              hoverable
              trigger={
                <Message
                  info
                  header="Hover or tap here for a list of usernames"
                />
              }
            >
              <Popup.Content>
                <List>
                  {usernames.map(name => (
                    <List.Item key={name} content={name} />
                  ))}
                </List>
              </Popup.Content>
            </Popup>
          </Grid.Column>
        </Grid>
      </main>
    );
  }
}

export default connect()(Home);
