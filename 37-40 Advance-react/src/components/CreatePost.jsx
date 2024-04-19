import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIDElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userID = userIDElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIDElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userID, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter your user ID here
        </label>
        <input
          placeholder="your id "
          type="text"
          ref={userIDElement}
          className="form-control "
          id="userID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          placeholder="How are you feeling today..."
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Your Writings
        </label>
        <textarea
          rows="4"
          placeholder="Tell us more about it "
          type="text"
          ref={postBodyElement}
          className="form-control"
          id="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Number of reactions
        </label>
        <input
          placeholder="Total reactions.. by people "
          type="text"
          ref={reactionsElement}
          className="form-control "
          id="reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Hastag
        </label>
        <input
          placeholder="Enter Hastags #"
          type="text"
          ref={tagsElement}
          className="form-control "
          id="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
