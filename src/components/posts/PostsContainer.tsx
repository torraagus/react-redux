import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import { IState } from "./interfaces";
import { Container } from "./styles";

interface RootState {
  postReducer: IState;
}

const PostsContainer: FC<any> = (): JSX.Element => {
  const { posts, error } = useSelector((state: RootState) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "POSTS_FETCH_REQUESTED" });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return error ? (
    <p>{error}</p>
  ) : (
    <>
      <p style={{ letterSpacing: 3 }}>
        <b>All posts</b>
      </p>
      <Container>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Container>
    </>
  );
};

export default PostsContainer;
