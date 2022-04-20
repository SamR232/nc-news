import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://backend-nc-news-project.herokuapp.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then(({ data }) => data.articles);
};

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    //console.log(data);
  });
};
