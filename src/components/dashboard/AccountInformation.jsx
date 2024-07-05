
const AccountInformation = ({ children }) => {
  return (
      <div>
        <div className={'2xl:mb-6 flex justify-between items-center'}>
            <p className={'cardTitle md:text-md text-[11px]'}>Account information</p>
        </div>
          <button className={'w-full md:text-md text-[11px] py-2 mt-2 rounded-xl border-solid border-2 dark:border-white'}>
              VIEW CREDEMTIALS
        </button>
        <div className={'h-full overflow-y-auto mt-1'}>
            <table className={'w-full table-auto'}>
                <tbody>
                    <tr className={'tableRow w-full'}>
                        <td className={'tableData w-1/2 font-semibold text-white'}>
                            Start date
                        </td>
                        <td className={'tableData w-1/2 text-white font-semibold'}>
                            26 Jun 2024
                        </td>
                    </tr>
                    <tr  className={'tableRow'}>
                        <td className={'tableData w-1/2 text-white font-semibold'}>
                            End date
                        </td>
                        <td className={'tableData w-1/2 text-white font-semibold'}>
                            N/A
                        </td>
                      </tr>
                      <tr  className={'tableRow'}>
                        <td className={'tableData w-1/2 text-white font-semibold'}>
                            Initial Balance
                        </td>
                        <td className={'tableData w-1/2 text-white font-semibold'}>
                            $200,000.00
                        </td>
                      </tr>
                      <tr  className={'tableRow'}>
                        <td className={'tableData w-1/2 text-white font-semibold'}>
                            Platform
                        </td>
                        <td className={'tableData w-1/2 text-white font-semibold'}>
                            <span className="flex gap-1">
                                DXT
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default AccountInformation;
