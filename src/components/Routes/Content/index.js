import React from 'react';
import { connect } from 'react-redux';
import { Grid, Header, Icon, Menu } from 'semantic-ui-react';

import { logout } from '../../../redux/actions';

class Content extends React.Component {
  state = { activeItem: 'posts' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = () => this.props.logout(this.props.history);

  render() {
    const { activeItem } = this.state;
    const { login } = this.props;

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
          <Grid.Column style={{ maxWidth: 600 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Icon name="server" /> Content
            </Header>
            <Menu pointing>
              <Menu.Item
                name="posts"
                active={activeItem === 'posts'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="albums"
                active={activeItem === 'albums'}
                onClick={this.handleItemClick}
              />
              <Menu.Menu position="right">
                {login && (
                  <Menu.Item onClick={this.handleLogout}>
                    <Icon name="log out" color="teal" /> Log out
                  </Menu.Item>
                )}
              </Menu.Menu>
            </Menu>
          </Grid.Column>
        </Grid>
      </main>
    );
  }
}

export default connect(
  ({ loading, errors, login, posts, albums, users }) => ({
    loading,
    errors,
    login,
    posts,
    albums,
    users,
  }),
  { logout }
)(Content);
