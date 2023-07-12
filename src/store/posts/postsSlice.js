import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {initialPosts } from "./initialState";


export const postsSlice = createSlice({
  name: "posts",
  initialState: initialPosts,
  reducers: {
    setPosts(state, action) {
      state.postsList = action.payload;
    },

    setPost(state, action) {
        state.post = action.payload;
      },

  },
});