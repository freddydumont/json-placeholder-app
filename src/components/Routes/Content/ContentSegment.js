import React from 'react';
import { Card, Header, Loader, Segment } from 'semantic-ui-react';

class ContentSegment extends React.Component {
  state = {};
  render() {
    const { contentType, loading, content, users } = this.props;
    return (
      <React.Fragment>
        <Header
          as="h3"
          color="teal"
          textAlign="left"
          attached="top"
          style={{ textTransform: 'capitalize' }}
        >
          {contentType}
        </Header>

        <Segment attached="bottom" className="content-segment">
          {/* Loader is active as long as both content and users are fetching */}
          <Loader
            active={loading[contentType] && loading.users}
            content="Loading"
          />

          {!loading[contentType] &&
            !loading.users && (
              <Card.Group centered>
                {content.map(item => (
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
        </Segment>
      </React.Fragment>
    );
  }
}

export default ContentSegment;
