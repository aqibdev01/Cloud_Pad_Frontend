import React from "react";
import Notes from "./Notes";

const Home = () => {
  return (
    <>
      <div class="my-3">
        <h2>Create Note</h2>
        <label for="title" class="form-label">
          Title
        </label>
        <input class="form-control" id="title" placeholder="Title" />
        <label for="description" class="form-label">
          Description
        </label>
        <input
          class="form-control"
          id="description"
          placeholder="Description"
        />
        <label for="tag" class="form-label">
          Tag
        </label>
        <input class="form-control" id="tag" placeholder="Tag" />
      </div>
      <Notes/>
    </>
  );
};

export default Home;
