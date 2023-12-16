import React,{useState,useEffect} from 'react';
import './componentStyle.css';

const PostCard = ({post,contract}) => {
    const [vote, setVoteValue] = useState(0);
    // console.log('Submitted value:', inputValue,'. By Account: ',account);
    // const updateVote= useCallback(async ()=>{
    //   try{
    //     setVoteValue(post.degreeofappreciation);
        
    //   }
    //   catch(error){
    //     console.error("Can't read vote value: ", error);
    //   }
    // },[post]);
    useEffect(()=>{
      try{
        if(post){
          setVoteValue(post.DegreeOfAppreciation.toString());  
          console.log("Updated vote value",vote);
        }
        }catch (err) {
          console.error("No vote value or post yet:", err);
        }
    },[post,vote]);  
    // async function displayPost(){

    //     if (post){
    //         for (let i=0;i<post.length;i++){
    //         console.log("Check Post: ",post[i].content);
    //         }
    //     }
    //     console.error("No Post Yet");
    // }
    
    async function upVote(){
      await contract.upVote(post.author,post.id,{gasLimit:120000});
      console.log("Upvote Clicked!");
    }
    async function downVote(){
      await contract.downVote(post.author,post.id,{gasLimit:120000});
      console.log("DownVote Clicked!");
    }
    

  
  return (
    <div className="PostCardContainer">
        <label className="contentText">
          {post.content}
          
          
          </label>  
        <div className='postInfo'>
          <button className='button' onClick={upVote}> UP Vote </button> 
          <label className="voteDisplay">{vote!==0
          ?(vote)
          :
          (0)}
          </label>
          <button className='button' onClick={downVote}> DOWN Vote</button>  
          </div>
          
    </div>
  );
};

export default PostCard;