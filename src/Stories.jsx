import React from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const { hits, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="loading-message">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="stories-div">
      {hits.length === 0 ? (
        <p>No stories available. Please try again later.</p>
      ) : (
        hits.map((curPost) => {
          const { title, author, objectID, url, num_comments } = curPost;

          return (
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> | <span>{num_comments}</span> comments
              </p>
              <div className="card-button">
                {url && url !== "" ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                  >
                    Read More
                  </a>
                ) : (
                  <button className="read-more" onClick={() => alert("No URL available.")} disabled>
                    No link available
                  </button>
                )}
              </div>
            </div>
          );
        })
      )}
      <p>
        Made with ❤️ by{" "}
        <a
          href="https://www.linkedin.com/in/choudhury-mehbub-alam-b6b191219/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DevLeo
        </a>
      </p>
    </div>
  );
};

export default Stories;
