import React from 'react';
import Post from './components/Post';
import './App.css';
import likeButton from './images/like.svg'
import commentButton from './images/comment.svg'
import shareButton from './images/share.svg'
import downloadButton from './images/download.svg'

const NATURE_IMAGE =
  'https://static.vecteezy.com/system/resources/previews/022/448/291/original/save-earth-day-poster-environment-day-nature-green-ai-generative-glossy-background-images-tree-and-water-free-photo.jpg';

const NATURE_POST =
  'https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fHww&w=1000&q=80';


const App = () => {
  return (
    <div className="app">
      <Post
        author={{
          name: 'Nature',
          photo: NATURE_IMAGE,
          nickname: '@the_nature',
        }}
        content="Enjoy the World"
        image={NATURE_POST}
        date={'01-Aug-23'}
        like={'53'}
        comment={'13'}
        share={'4'}
        buttons={{
          likeButton: likeButton,
          commentButton: commentButton,
          shareButton: shareButton,
          downloadButton: downloadButton,
        }}
      />
    </div>
  );
};

export default App;