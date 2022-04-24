import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://backend-nc-news-project.herokuapp.com/api",
});

export const getArticles = (topic_slug) => {
  return newsApi
    .get("/articles", {
      params: {
        topic: topic_slug,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => data.topics);
};

export const patchVotes = (article_id, dataObject) => {
  return newsApi.patch(`/articles/${article_id}`, dataObject);
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postComment = (article_id, commentObject) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, commentObject)
    .then(({ data }) => data.comment);
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};

export const getUsers = (username) => {
  return newsApi.get(`/users/${username}`).then(({ data }) => {
    return data.user;
  });
};
