const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className=" pt-[10%] md:pt-[25%] px-12 absolute bg-gradient-to-r from-black
  w-screen aspect-video "
    >
      <h1 className="text-xl md:text-3xl font-bold  text-white text-left">
        {title}
      </h1>
      <p className="text-xs py-3 md:text-lg w-1/2 text-white text-left">
        {overview}
      </p>
      <div className="flex">
        <button
          className="bg-white bg-opacity-80 text-black px-6 py-1 mr-3 text-xs
          rounded-md font-medium hover:bg-opacity-50
          md:text-xl
          md:px-12 
          md:py-2 
          sm:text-[90%]
          sm:px-8
          sm:py-1
          
        "
        >
          ▷ Play
        </button>
        <button
          className="bg-slate-600 ¿ text-white mr-3 px-6 py-1 text-xs
          rounded-md
        hover:bg-opacity-50
          md:text-xl
          md:px-12 
          md:py-2 
          sm:text-[90%]
          sm:px-8
          sm:py-1
        "
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
