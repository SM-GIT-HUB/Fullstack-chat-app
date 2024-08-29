import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center">
      <div className="max-w-lg w-full">
        <div className="h-[180px] mb-8">
          <h1 className="font-montserrat absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[224px] font-bold text-blue-900 uppercase tracking-[-0.05em] text-shadow-lg">
            404
          </h1>
          <h2 className="font-montserrat absolute top-[110px] left-0 right-0 text-[42px] font-bold text-white uppercase tracking-[0.3em] text-shadow-md">
            Page not found
          </h2>
        </div>
        <Link to={'/'}
          className="font-montserrat inline-block uppercase text-blue-400 border-2 border-current bg-transparent px-10 py-2 text-sm font-bold transition-colors duration-200 hover:text-blue-600"
        >
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
