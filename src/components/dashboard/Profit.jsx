import {Flat, Heat, Nested} from '@alptugidin/react-circular-progress-bar'

import 'react-circular-progressbar/dist/styles.css';



const Profit = () => {


  return (
    <>
      <div className={"sm:mb-[18px] flex sm:mx-6 justify-between items-center gap-x-3"}>
        <span className={"cardTitle"}>Profit</span>
        <span className={"cardTitle"}>8000$</span>
      </div>
      <div className={"flex sm:flex-col py-5 flex-row sm:items-center justify-center"}>
        <div className="max-w-[200px] min-w-[200px] z-20 hidden dark:block">
          <Flat
            progress={100}
            range={{ from: 0, to: 100 }}
            sign={{ value: '%', position: 'end' }}
            text={'8000$'}
            showMiniCircle={false}
            showValue={false}
            sx={{
              strokeColor: 'blue',
              barWidth: 7,
              bgStrokeColor: '#ffffff',
              bgColor: { value: '#000000', transparency: '20' },
              shape: 'full',
              strokeLinecap: 'round',
              valueFamily: 'Trebuchet MS',
              textSize: 17,
              textWeight: 'bold',
              textColor: 'white',
              textFamily: 'Trebuchet MS',
              loadingTime: 1000,
              valueAnimation: true,
              intersectionEnabled: true
            }}
          />
        </div>
        <div className="max-w-[200px] min-w-[200px] z-20 dark:hidden">
          <Flat
            progress={100}
            range={{ from: 0, to: 100 }}
            sign={{ value: '%', position: 'end' }}
            text={'8000$'}
            showMiniCircle={false}
            showValue={false}
            sx={{
              strokeColor: 'blue',
              barWidth: 7,
              bgStrokeColor: '#ffffff',
              shape: 'full',
              strokeLinecap: 'round',
              valueFamily: 'Trebuchet MS',
              textSize: 17,
              textWeight: 'bold',
              textColor: 'black',
              textFamily: 'Trebuchet MS',
              loadingTime: 1000,
              valueAnimation: true,
              intersectionEnabled: true
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Profit;
