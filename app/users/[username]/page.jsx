export const SingleProfile=async(props)=>
{
    const username=props.params.username;
    
    return (
      
        <h1>
            Hello {username}
        </h1>
   
    );
}
export default SingleProfile;