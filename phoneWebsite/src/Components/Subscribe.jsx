const Subscribe = () => {
  return (
    <div className="subscribe-container w-full h-auto mt-[16rem] px-[10rem]">
      <div className="w-full h-[17rem] px-[4rem] flex justify-center items-center gap-[5rem] bg-primary rounded-xl">
        <div className="w-2/3 h-full flex justify-center items-start flex-col text-white pl-10 mt-8">
          <h2 className="font-bold text-5xl">Subscribe to get updated</h2>
          <p className="py-8 text-xl">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque .
          </p>
        </div>
        <div className="w-1/3 h-auto flex justify-center items-center">
          <button className="bg-none border-2 text-white border-white text-xl font-semibold px-20 tracking-wide py-5 rounded-md">
            Get start
          </button>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
