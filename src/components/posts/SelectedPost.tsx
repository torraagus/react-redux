import React, { FC } from "react";
import { useSelector } from "react-redux";
import { IState } from "./interfaces";
import Post from "./Post";
import { Container } from "./styles";

interface RootState {
  postReducer: IState;
}

const SelectedPost: FC<any> = () => {
  const { selected: post } = useSelector(
    (state: RootState) => state.postReducer
  );

  return (
    <>
      <p>
        <b style={{ textAlign: "left", letterSpacing: 3 }}>Selected post</b>
      </p>
      {!post ? (
        <p>No post selected yet...</p>
      ) : (
        <Container>
          <Post post={post} />
        </Container>
      )}
    </>
  );
};

export default SelectedPost;
