import React from 'react';
import Article from '../Article/Article';
import Header, { IHeader } from './modules/Header';
import Profile, { IProfile } from './modules/Profile';

export interface IPost {
  image: string;
  header: IHeader;
  article_url: string;
  table_of_content: boolean;
  authors: IProfile[];
}

export interface IState {
  parallaxScrolling: {
    backgroundImage: string;
    backgroundRepeat: string;
    backgroundSize: string;
    backgroundAttachment: string
    backgroundPosition: string
  };
}

class Post extends React.Component<IPost, IState> {
  constructor(props: IPost) {
    super(props);

    this.state = {
      parallaxScrolling: {
        backgroundImage: `url(${this.props.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
      },
    };
  }

  render() {
    return (
      <div style={this.state.parallaxScrolling}>
        {/* Header */}
        <Header {...this.props.header} />
        {/* Story */}
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,20%)',
            display: 'flex',
            minHeight: "100vh"
          }}
        >
          <Article article_url={this.props.article_url} table_of_content={this.props.table_of_content} />
          {/* Profile */}
          <div style={{display: 'block'}}>
            {
              this.props.authors.map((author) => {
                return <Profile {...author} />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
