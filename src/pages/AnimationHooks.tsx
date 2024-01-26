import { animationHooks } from "../utils/animation";

const AnimationHooks = () => {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-3xl">This is AnimationHooks component</h1>

      <div className=" flex gap-2 flex-wrap">
        {animationHooks.map((animate) => (
          <a
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            href={animate.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {animate.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AnimationHooks;
