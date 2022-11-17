import { CREATE_POST } from "../redux/types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}
