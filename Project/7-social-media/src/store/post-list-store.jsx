import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatcePostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userID, postTitle, postBody, reactions, tags) => {
    dispatcePostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reactions,
        userId: userID,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatcePostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai this week",
    body: "Hi frindes i am going to mumbai for my vactions.",
    reaction: 2,
    userId: "user-1",
    tags: ["#Vactions", "#Beach", "#Mumbai"],
  },
  {
    id: "2",
    title: "Learning new tech",
    body: "Hi frindes today i am learning DataBases like how to connect databases to frontend so ya  .",
    reaction: 40,
    userId: "user-2",
    tags: ["#Coding", "#Backend", "#MongoDB"],
  },
];

export default PostListProvider;
