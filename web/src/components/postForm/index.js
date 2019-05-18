import React, { useState } from "react";
import { Mutation } from "react-apollo";

import gql from "graphql-tag";
import { Box, Flex, Button, Input } from "../basics/styles";

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");

  const CREATE_POST = gql`
    mutation createPost($title: String!, $content: String!, $photo: String!) {
      createPost(input: { title: $title, content: $content, photo: $photo }) {
        title
        content
      }
    }
  `;

  return (
    <Mutation mutation={CREATE_POST}>
      {(createPost, { data, loading, error }) => {
        if (loading) {
          return <>Loading...</>;
        }

        if (data) {
          alert("Post criado");
          return (
            <>
              <Box>
                <Flex direction='column'>
                <h1>{data.createPost.title}</h1>
                <p>{data.createPost.content}</p>
                </Flex>
              </Box>
            </>
          );
        }
        return (
          <Box>
            <Flex direction="row">
              <Flex direction="column">
                <form
                  onSubmit={e => {
                    createPost({
                      variables: {
                        title: title,
                        content: content,
                        photo: photo
                      }
                    });
                  }}
                >
                  <Input
                    placeholder="Título"
                    required
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Input
                    placeholder="Conteúdo"
                    required
                    onChange={e => setContent(e.target.value)}
                  />
                  <Input
                    placeholder="Mais conteúdo"
                    required
                    onChange={e => setPhoto(e.target.value)}
                  />
                  <Button>Criar</Button>
                </form>
              </Flex>
              <div>
                <h1>{title === "" ? "Título" : title}</h1>
                <p>{content === "" ? "Parágrafo" : content}</p>
                <p>{photo === "" ? "Parágrafo" : photo}</p>
              </div>
            </Flex>
          </Box>
        );
      }}
    </Mutation>
  );
}

export default PostForm;
