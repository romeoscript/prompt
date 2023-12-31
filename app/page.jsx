import Feeds from "@components/Feeds";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center ">
        Discover and share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI- Powered Prompts</span>
      </h1>

      <p className="desc text-center">
        promptopia is an open-source AI powered prompting tool for mordern world
        to discover, create and share prompts
      </p>
      <Feeds />
    </section>
  );
};

export default Home; 
