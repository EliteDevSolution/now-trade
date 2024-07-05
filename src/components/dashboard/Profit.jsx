const Profit = () => {
  return (
    <div className={"flex sm:flex-col flex-row h-full min-w-[300px]"}>
      <div className={"sm:mb-[18px] flex justify-between items-center gap-x-3"}>
        <h1 className={"cardTitle"}>Profit</h1>
      </div>
      <div className="m-auto sm:pb-16">
        <p className={"dark:text-white text-base font-semibold sm:text-[45px]"}>
          $456.00
        </p>
      </div>
    </div>
  );
};

export default Profit;
