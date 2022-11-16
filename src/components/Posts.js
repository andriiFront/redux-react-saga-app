import Post from "./Post"
import { connect } from 'react-redux'

const Posts = ({ syncPosts }) => {
  console.log(syncPosts)
  if(!syncPosts.length) {
    return (
      <p className="text-center">There is no posts yet..</p>
    )
  }
  
  return (
    syncPosts.map(post => <Post post={post} key={post} />)
  )
}

const mapStateToProps = state => {
  return {
    syncPosts: state.postsReducer.posts
  }
}

export default connect(mapStateToProps)(Posts)
