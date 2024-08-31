
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-300 bg-transparent bg-opacity-20 rounded-[4px] w-[400px]">
      <div className="flex flex-col items-center gap-[]">
        <p className="text-[80px] text-[#02026fd7] m-0 p-0 tracking-[10px] font-semibold">Error</p>
        <h1 className="text-[30px] text-[#6f1414] relative bottom-[20px]">404</h1>
      </div>
      <h1 className="text-[40px] text-gray-800 font-semibold">Page Not Found</h1>
    </div>
  );
};

export default ErrorPage;
