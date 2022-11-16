import Post from "./Post"

export default ({ posts }) => {
  if(!posts.length) {
    return (
      <button className="btn btn-primary">Load posts..</button>
    )
  }

  return (
    <div>
      <h1>Fetched Posts</h1>
    </div>
  )
}
