import React from 'react';
import Datasort from 'react-data-sort';
import { Card, Header, Icon, Loader, Menu, Segment } from 'semantic-ui-react';

class ContentSegment extends React.Component {
  state = {
    sortBy: 'id',
    direction: 'asc',
  };

  handleSort = newSortBy => {
    this.setState(prevState => {
      let { direction, sortBy } = prevState;
      if (sortBy === newSortBy) {
        direction = direction === 'asc' ? 'desc' : 'asc';
      } else {
        sortBy = newSortBy;
      }

      return { direction, sortBy };
    });
  };

  render() {
    const { sortBy, direction } = this.state;
    const { contentType, loading, content, users } = this.props;
    return (
      <React.Fragment>
        <Menu attached="top" borderless>
          <Menu.Item>
            <Header
              as="h3"
              color="teal"
              textAlign="left"
              style={{ textTransform: 'capitalize' }}
            >
              {contentType}
            </Header>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item icon onClick={() => this.handleSort('title')}>
              <Icon
                aria-label={`sort alphabet ${direction}ending`}
                name={`sort alphabet ${direction}ending`}
                size="large"
                color={sortBy === 'title' ? 'teal' : 'black'}
              />
            </Menu.Item>
            <Menu.Item icon onClick={() => this.handleSort('id')}>
              <Icon
                aria-label={`sort numeric ${direction}ending`}
                name={`sort numeric ${direction}ending`}
                size="large"
                color={sortBy === 'id' ? 'teal' : 'black'}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment attached="bottom" className="content-segment">
          {/* Loader is active as long as both content and users are fetching */}
          <Loader
            active={loading[contentType] && loading.users}
            content="Loading"
          />

          {!loading[contentType] &&
            !loading.users && (
              <Datasort
                data={content}
                sortBy={sortBy}
                direction={direction}
                render={({ data }) => (
                  <Card.Group centered>
                    {data.map(item => (
                      <Card key={item.id}>
                        <Card.Content>
                          <Card.Header textAlign="left" content={item.title} />
                          <Card.Meta
                            textAlign="left"
                            content={users[item.userId].name}
                          />
                          {/* if body exists, add it as card desciption */}
                          {item.body && (
                            <Card.Description
                              textAlign="left"
                              content={item.body}
                            />
                          )}
                        </Card.Content>
                      </Card>
                    ))}
                  </Card.Group>
                )}
              />
            )}
        </Segment>
      </React.Fragment>
    );
  }
}

export default ContentSegment;
