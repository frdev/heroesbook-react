import React, { Component } from 'react';

import './PostList.css';

import Post from '../Post/Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Batman',
          avatar: 'https://image.flaticon.com/icons/svg/1674/1674453.svg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Deadpool',
              avatar: 'https://image.flaticon.com/icons/svg/1674/1674298.svg'
            },
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            id: 2,
            author: {
              name: 'Spider man',
              avatar: 'https://image.flaticon.com/icons/svg/1674/1674456.svg'
            },
            content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Wolverine',
          avatar: 'https://image.flaticon.com/icons/svg/1674/1674455.svg'
        },
        date: '02 Jun 2019',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        comments: [
          {
            id: 3,
            author: {
              name: 'Pirate',
              avatar: 'https://image.flaticon.com/icons/svg/1674/1674427.svg'
            },
            content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          },
          {
            id: 4,
            author: {
              name: 'Harry Potter',
              avatar: 'https://image.flaticon.com/icons/svg/136/136311.svg'
            },
            content: "On the other hand."
          }
        ]
      }
    ]
  };

  

  render() {
    return (
      <div style={{width: '60%', margin: '0 auto'}}>
        {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
      </div>
    );
  }
}

export default PostList;