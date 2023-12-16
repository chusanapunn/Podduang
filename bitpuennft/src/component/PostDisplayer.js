import React,{useState,useEffect} from 'react';
import './componentStyle.css';
import PostCard from './PostCard.js';

const PostDisplayer = ({contract}) => {
    // const [inputValue, setInputValue] = useState('');
    // console.log('Submitted value:', inputValue,'. By Account: ',account);
    // You can call your contract function or perform other actions
      const [postList, setPostList] = useState([]);
      const [showpost, setShowpost] = useState(false);
      
      async function refreshPost(){
        try{
        if (contract){
          const posts = await contract.getAllPost();

        if (posts.length > 0) {
          setShowpost(true);
          setPostList(posts);
          console.log('Posts:', posts);
        } else {
          setShowpost(false);
          console.log('No Posts Yet');
        }
      } else {
        console.error('No Contract Yet');
      }
    } catch (error) {
      console.error('Error refreshing posts:', error);
    }
    }

    useEffect(()=>{
      refreshPost();
    },[contract]);

  return (
    <div className="PostDisplayerContainer">
      {showpost===true? (
        <PostCard postList={postList}>XXX</PostCard>
        )
      :(
        <label className= 'label'>
          No post here
        </label>
        )}
      <button className='button' onClick={refreshPost}> 
        refresh 
      </button>
    </div>
  );
};

export default PostDisplayer;