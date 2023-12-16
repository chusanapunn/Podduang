import React from 'react';
import './componentStyle.css';

const PostCard = ({postList}) => {
    // const [inputValue, setInputValue] = useState('');
    // console.log('Submitted value:', inputValue,'. By Account: ',account);
    // You can call your contract function or perform other actions

    // async function displayPost(){

    //     if (postList){
    //         for (let i=0;i<postList.length;i++){
    //         console.log("Check Post: ",postList[i].content);
    //         }
    //     }
    //     console.error("No Post Yet");
    // }



  return (
    <div className="PostCardContainer">
        <label>{postList ? (postList.content):("No Post")} XXXX</label>  
        
        <div>
          <button className='button' > UpVote </button> 
          <button className='button' > DownVote </button>  
        </div>
        
    </div>
  );
};

export default PostCard;