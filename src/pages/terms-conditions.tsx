import { Hero, Section } from '@/components';
import { NextSeo } from 'next-seo';

const termsAndConditions = [
  {
    id: crypto.randomUUID(),
    title: 'Terms of website use',
    content: `This page, in conjunction with the referenced documents, delineates the terms under which you are granted permission to access and utilize our website, available at https://frontdock.com/ ("our site"). Your use of our site encompasses activities such as browsing, accessing, or registering for site usage. Prior to commencing your use of our site, we kindly request that you thoroughly review and consider these terms of use. They will govern your interactions with our site. By proceeding to use our site, you affirmatively acknowledge your acceptance Of these terms of use, demonstrating your commitment to adhere to them. Should you not concur with these terms of use, we regretfully inform you that you should refrain from using our site.`,
  },
  {
    id: crypto.randomUUID(),
    title: 'Cognizance and Agreement to Terms',
    content: `By utilizing the services provided by Front Dock or visiting our website, users acknowledge their understanding of and consent to comply with the terms and conditions delineated on this webpage. This agreement reflects the user's commitment to adhere to the established guidelines and regulations.`,
  },
  {
    id: crypto.randomUUID(),
    title: 'Intellectual Property Ownership and Usage',
    content: `Within this website, you will find content that is either owned by us or licensed to us. This encompasses various elements, such as the design, layout, visual aesthetics, and overall appearance of the website. It is crucial to understand that any form of reproduction or utilization of this material is strictly prohibited, except as explicitly permitted by the copyright notice, which constitutes an integral component of these terms and conditions.`,
  },
  {
    id: crypto.randomUUID(),
    title: 'Terms & Conditions',
    content: `Accessibility to Our Website: Our website is offered to you without any associated charges. We cannot ensure uninterrupted availability or constant accessibility of our website, along with its content. Access to our website is granted on a temporary basis. We reserve the right to suspend, withdraw, discontinue, or modify any part or the entirety of our website without prior notice. We shall not be held liable if, for any reason, our website becomes unavailable temporarily or for an extended period. Moreover, it is your responsibility to ensure that all individuals accessing our website through your internet connection are well-informed about these terms of use, as well as any other relevant terms and conditions, and that they adhere to them diligently. Our expertise lies in maintaining the website's availability and functionality to the best of our ability, and we appreciate your understanding in this regard.`,
  },
  {
    id: crypto.randomUUID(),
    title: 'Responsibility and Liability Terms for Merchandise Ownership',
    content: `The responsibility for the merchandise remains with its owner. We disclaim any liability associated with illegal merchandise or the condition of the goods. Levering our expertise, we ensure a clear delineation of responsibilities in these matters.`,
  },
  {
    id: crypto.randomUUID(),
    title: 'Exercising Caution in Information Utilization',
    content: `We want to emphasize that your utilization of any information or materials found on this website is solely and entirely at your own discretion and risk. We shall not assume any liability for the consequences of such usage.`,
  },
  {
    id: crypto.randomUUID(),
    title: 'Viruses',
    content: `It's important to note that we cannot provide an absolute guarantee regarding the security of our site or its immunity from bugs or viruses. To optimize your experience and minimize any potential risks, the responsibility falls on you to configure your information technology, computer programs, and platform for seamless access to our site. We strongly recommend that you employ your own reliable virus protection software, thus adding an extra layer of security to your online interactions with us.`,
  },
];

export default function TermsConditionsPage() {
  return (
    <>
      <NextSeo title='Terms & Conditions | Front Dock' />
      <Hero image='bg-home-hero'>Terms & Conditions</Hero>
      <Section
        id='terms-conditions'
        className='space-y-8 bg-white !py-14 text-primary lg:space-y-12'
      >
        {termsAndConditions.map(({ id, title, content }) => (
          <div key={id} className='space-y-2 lg:px-16'>
            <h2 className='text-left text-lg !font-bold capitalize sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl'>
              {title}:
            </h2>
            <p className='text-justify'>{content}</p>
          </div>
        ))}
      </Section>
    </>
  );
}
