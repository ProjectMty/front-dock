import Service from '@/components/service';
import { Tab } from '@headlessui/react';

const titles = [
  'Consolidate',
  'Repackage and ship',
  'Resale',
  'Donate',
  'Dispose',
];

export default function Services() {
  return (
    <section className='bg-accent pb-8 pt-2 text-base text-primary lg:pb-10 lg:pt-4 lg:text-xl 2xl:pb-20 2xl:pt-14 2xl:text-2xl'>
      <Tab.Group>
        <Tab.List className='max-w-full overflow-hidden py-1'>
          <div className='mx-10 flex space-x-5 overflow-x-scroll py-1 md:justify-evenly md:space-x-0 md:overflow-x-hidden'>
            {titles.map((title) => (
              <Tab
                key={title}
                className='inline-block select-none scroll-smooth whitespace-nowrap py-1 text-lg font-black text-white ui-selected:text-primary md:p-4 lg:text-xl 2xl:text-2xl'
              >
                {title}
                <div className='hidden h-1 w-full bg-secondary ui-selected:block' />
              </Tab>
            ))}
          </div>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Service
              processing={
                "You want your customer's returns but you just don't want it back one by one. No problem! Your customers return their items to us. We receive the merchandise, check the merchandise into inventory, and report it to you. We consolidate your shipments until you are ready to receive the batch at your warehouse. We'll send them when you're ready! No storage fees!"
              }
              costs={{
                cost: {
                  limit: 'N/A',
                  receiving: 1.5,
                  type: 'Consolidate',
                  typeFee: new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(0.5),
                },
                shipping: `At seller's expense, you can schedule LTL or carrier pickup, or you can provide us with shipping labels.`,
                info: 'Your customer returns an 8lb lamp in a box. We receive it, check it into inventory, and advise you it has been received. You ask us to hold it and return to your warehouse once we have 30 returned lamps. So here, we will charge you $1.50 to receive, verify, and check into inventory. We will charge you $0.50 to label with a new box ID, store, consolidate, and prepare for shipping. Shipping to the next destination is at your expense.',
              }}
              time={{
                checkin: 'Same day as arrival',
                ship: '2 business days',
              }}
            />
          </Tab.Panel>
          <Tab.Panel>
            <Service
              processing={
                "So it didn't work out for this guy! But your item will work out for the next guy who buys it! If the item meets your standards for sellable quality, then we can repackage the item and ship as per your instructions. We can consolidate until you are ready to receive the batch at your warehouse, or we can ship one by one to another point of sale, or we can ship to the next buyer. No storage fees!"
              }
              costs={{
                cost: {
                  limit: 'N/A',
                  receiving: 1.5,
                  type: 'Repackage',
                  typeFee: (
                    <div className='space-y-2'>
                      <p>$1.00 for items less than 5 lbs</p>
                      <p>$2.00 for items less than 10 lbs</p>
                      <p>$4.00 for items less than 25 lbs</p>
                      <p>$5.00 for items less than 50 lbs</p>
                      <p>$7.00 for items greater than 50 lbs</p>
                    </div>
                  ),
                },
                shipping: `At seller's expense, you can schedule LTL or carrier pickup, or you can provide us with shipping labels.`,
                info: 'Your customer returns an 8lb lamp in a box. We receive it, check it into inventory, and advise you it has been received. You ask us to repackage the item and send it to a new buyer. So here, we will charge you $1.50 to receive, verify, and check into inventory. We will charge you $2.00 to repackage the items into a new box, prepare a package, apply a new shipping label, and dispatch the package out with the carrier.',
              }}
              time={{
                checkin: 'Same day as arrival',
                ship: '3 business days',
              }}
            />
          </Tab.Panel>
          <Tab.Panel>
            <Service
              processing={
                'Forget the hassle of the returns all together. We receive the returns, check the merchandise into inventory, and consolidate the merchandise into pallets for sale to sellers in Mexico and Canada. Our buyers team will work with you to coordinate liquidation prices.'
              }
              costs={{
                cost: {
                  limit: 'N/A',
                  receiving: 1.5,
                  type: 'Resale',
                  typeFee: new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(1.5),
                },
                shipping: `N/A`,
                info: `Your customer returns an 8lb lamp in a box. We receive it, check it into inventory, and advise you it has been received. You inform us you are interested in liquidating the lamp . So here, we will charge you $1.50 to receive, verify, and check into inventory. We will charge you $1.50 to assess the item's condition, research market value, verify it can be sold in a marketplace in Canada or Mexico, and complete the sales process. Our buyer's team will provide you with a purchase offer. If we are unable to purchase your merchandise or you are not interested in  our offer, you will not be charged $1.50. We must accumulate 10 units of a SKU before considering a purchase.`,
              }}
              time={{
                checkin: 'Same day as arrival',
                ship: '5-7 business for purchase offer',
              }}
            />
          </Tab.Panel>
          <Tab.Panel>
            <Service
              processing={
                'Make your returns tax deductible by donating your merchandise to your charity of choice. We handle the logistics!'
              }
              costs={{
                cost: {
                  limit: 'N/A',
                  receiving: 1.5,
                  type: 'Processing',
                  typeFee: 'N/A',
                },
                shipping: `At the seller's expense, you can schedule LTL or carrier pickup, or you can provide us with shipping labels. Oftentimes, sellers already have shipment agreements with charities and the receiver provides the shipping labels. If the charity is local and you would like us to deliver or coordinate delivery, we will quote out transport on a case by case basis.`,
                info: 'Your customer returns an 8lb lamp in a box. We receive it, check it into inventory, and advise you it has been received. You inform us you are interested in donating the lamp . So here, we will charge you $1.50 to receive, verify, and check into inventory. Shipping to the next destination is at your expense. We can provide shipping quotes for local or LTL deliveries.',
              }}
              time={{
                checkin: 'Same day as arrival',
                ship: '2 business days',
              }}
            />
          </Tab.Panel>
          <Tab.Panel>
            <Service
              processing={`If the item doesn't stand a chance, needs to be discarded due to health and safety reasons or your company policy, we will destroy or dispose of the product. We dispose of products in the most eco-responsible manner, avoiding landfills or dumping.`}
              costs={{
                cost: {
                  limit: 'N/A',
                  receiving: 1.5,
                  type: 'Dispose',
                  typeFee: (
                    <div className='space-y-2'>
                      <p>$0.50 for items less than 5 lbs</p>
                      <p>$1.00 for items less than 10 lbs</p>
                      <p>$2.00 for items less than 25 lbs</p>
                      <p>$4.00 for items less than 50 lbs</p>
                      <p>$5.50 for items greater than 50 lbs</p>
                    </div>
                  ),
                },
                shipping: `N/A`,
                info: 'Your customer returns an 8lb lamp in a box. We receive it, check it into inventory, and advise you it has been received. You inform us you are interested in disposing of the lamp . So here, we will charge you $1.50 to receive, verify, and check into inventory.In addition, we will charge you $1.00 to dispose of the lamp.',
              }}
              time={{
                checkin: 'Same day as arrival',
                ship: '3 business days',
              }}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
