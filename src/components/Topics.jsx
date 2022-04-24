import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const Topics = () => {
  const [error, setError] = useState();
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics()
      .then((topics) => {
        setTopics(topics);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <main>
        <ul>
          {topics.map((topic) => {
            return (
              <>
                <li className="topicItems" key={topic.slug}>
                  <Link to={`/topics/${topic.slug}`}>
                    <h2>{topic.slug.toUpperCase()}</h2>
                  </Link>
                  <p>{topic.description}</p>
                </li>
              </>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Topics;
