import React from 'react';

const Post = ({ author, content, image, date, like, comment, share, buttons }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={author.photo} alt={author.name} className="author-photo" />
        <div className="author-info">
          <p className="author-name">{author.name}</p>
          <div className="author-detalis">
				<p className="author-nickname">{author.nickname}</p>
				<span className="post-date">{date}</span>
			 </div>
        </div>
      </div>
      <div className="post-container">
			<p className="post-content">{content}</p>
					<div className="post-items">
						<img src={image} alt="Post" className="post-image" />
						<div className="post-actions">
							<div className="like icons-container">
								<img className='post-icons' src={buttons.likeButton} alt="Like" />
								<span className='post-like'>{like}</span>
							</div>
							<div className="comment icons-container">
								<img className='post-icons' src={buttons.commentButton} alt="Like" />
								<span className='post-comment'>{comment}</span>
							</div>
							<div className="share icons-container">
								<img className='post-icons' src={buttons.shareButton} alt="Like" />
								<span className='post-share'>{share}</span>
							</div>
							<img className='post-icons' src={buttons.downloadButton} alt="Like" />
						</div>
					</div>
		</div>
    </div>
  );
};

export default Post;