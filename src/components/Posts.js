import Post from "./Post"

export default ({ posts }) => {
  if(!posts.length) {
    return (
      <p className="text-center">There is no posts yet..</p>
    )
  }
  
  return (
    posts.map(post => <Post post={post} key={post} />)
  )
}
