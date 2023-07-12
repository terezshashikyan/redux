import { createSelector } from "reselect";



const postsSelector = (state) => state.posts;

const postsListSelector = createSelector(
  [postsSelector],
  (posts) => posts.postsList
);

const postSelector = createSelector(
  [postsSelector],
  (posts) => posts.post
);

export const postsSel = {
  postsSelector,
  postsListSelector,
  postSelector,
};