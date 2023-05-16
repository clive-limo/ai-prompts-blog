import Feed from "@components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Get your creative juices flowing with our collection of AI prompts!
        Whether you're a developer, data scientist, or creative professional,
        we've got the prompts you need to generate innovative solutions and push
        the boundaries of what's possible.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
