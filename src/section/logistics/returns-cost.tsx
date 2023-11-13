import { Section } from '@/components';
import { useState } from 'react';
import returnCostsData from './return-cost-data';

type ReturnCostKeys = 'consolidate' | 'repackageShip' | 'resale' | 'donate' | 'dispose';

export default function ReturnsCost() {
  const [selectedData, setSelectedData] = useState<ReturnCostKeys>('consolidate');

  return (
    <>
      <Section id='returns-cost' className='space-y-8'>
        <div className='space-y-8 md:mx-auto md:w-3/4'>
          <p className='text-center text-white'>
            We work with RMA,inner-border RGA forms, or any other form of integration to update your
            returns in real time.
          </p>
          <h3 className='text-center text-secondary'>How much do returns cost?</h3>
          <p className='text-center text-white'>
            While Front Dock offers several options for returns management, our most popular is the
            consolidate and return to seller model. We receive your returns on a daily basis, inform
            you of the inventory status, and consolidate. We ship back to you when you&apos;re
            ready!
          </p>
        </div>
      </Section>
      <div className='overflow-x-auto bg-logistics-banner bg-cover bg-fixed bg-center px-4 py-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-[4.5rem] xl:px-20 xl:py-[5.5rem] 2xl:px-24 2xl:py-[6.5rem]'>
        <table className='table bg-white text-primary shadow'>
          <thead className='text-sm uppercase text-primary lg:text-base'>
            <tr>
              <th className='inner-border table-break-headings table-center-content w-1/5 p-4'>
                Service
              </th>
              <th className='inner-border table-break-headings table-center-content w-1/5 p-4'>
                Size or Weight Limit
              </th>
              <th className='inner-border table-break-headings table-center-content w-1/5 p-4'>
                Receiving Fee
              </th>
              <th className='inner-border table-break-headings table-center-content w-1/5 p-4'>
                {returnCostsData[selectedData].type} Fee
              </th>
              <th className='inner-border table-break-headings table-center-content w-1/5 p-4'>
                Shipping Fee
              </th>
            </tr>
          </thead>
          <tbody className='text-sm text-primary lg:text-base'>
            <tr className='table-row border-none'>
              <td className='inner-border table-center-content w-1/5 p-4'>
                <select
                  className='select select-ghost w-full max-w-xs'
                  onChange={(e) => setSelectedData(e.target.value as ReturnCostKeys)}
                >
                  {Object.keys(returnCostsData).map((key) => {
                    return (
                      <option key={key} value={key}>
                        {returnCostsData[key].title}
                      </option>
                    );
                  })}
                </select>
              </td>
              <td className='inner-border table-center-content w-1/5 p-4'>
                {returnCostsData[selectedData].limit}
              </td>
              <td className='inner-border table-center-content w-1/5 p-4'>
                {returnCostsData[selectedData].receiving}
              </td>
              <td className='inner-border table-center-content w-1/5 p-4'>
                {returnCostsData[selectedData].typeFee}
              </td>
              <td className='inner-border table-center-content w-1/5 p-4'>
                {returnCostsData[selectedData].shipping}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
