import React from 'react';
import { connect } from 'react-redux';
import { Grid, Header, Icon, Menu } from 'semantic-ui-react';

import ContentSegment from './ContentSegment';
import { logout } from '../../../redux/actions';

class Content extends React.Component {
  state = { activeItem: 'posts' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = () => this.props.logout(this.props.history);

  render() {
    const { activeItem } = this.state;
    const { login, loading, posts, albums, users } = this.props;

    return (
      <main className="h-100">
        <Grid
          textAlign="center"
          className="h-100"
          verticalAlign="middle"
          padded="vertically"
        >
          <Grid.Column style={{ maxWidth: '90vw' }}>
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

            {/* POSTS SEGMENT */}
            {activeItem === 'posts' && (
              <ContentSegment
                contentType="posts"
                loading={loading}
                content={posts}
                users={users}
              />
            )}

            {/* ALBUMS SEGMENT */}
            {activeItem === 'albums' && (
              <ContentSegment
                contentType="albums"
                loading={loading}
                content={albums}
                users={users}
              />
            )}
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
