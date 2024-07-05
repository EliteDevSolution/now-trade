
const Trading = () => {
  return (
    <div>
       <div className={'2xl:mb-6 md:flex block justify-between items-center'}>
            <h2 className={'cardTitle'}>Trading objectives</h2>
            <button className={'filterBtn md:w-auto mt-2 md:m-0 w-full'}>In Progress</button>
        </div>


        <div className={'h-full overflow-y-auto'}>
            <table className={'w-full table-auto'}>
                <tbody>
                    <tr className={'tableRow w-full'}>
                        <td className={'tableData w-1/3 text-ashColor2'}>
                            Maxim daily drawdown
                        </td>
                        <td className={'tableData w-2/3 dark:text-white'}>
                            <p className="dark:text-white font-semibold">
                                $0.00 / $10,022.80(12 hours, 1 minute beafore reset)
                            </p>
                            <div className="w-full mt-1 bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                                <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500 w-1/3" />
                            </div>
                        </td>
                    </tr>
                    <tr  className={'tableRow'}>
                        <td className={'tableData w-1/3 text-ashColor2'}>
                            Maxim lifetime drawdown
                        </td>
                        <td className={'tableData w-2/3 dark:text-white'}>
                            <p className="dark:text-white font-semibold">
                                $960.00 / $10,022.80
                            </p>
                            <div className="w-full mt-1 bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                                <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500 w-1/3" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Trading;
