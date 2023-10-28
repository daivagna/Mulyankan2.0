import React from 'react';
import {
  Image as JssImage,
  RichText as JssRichText,
  ImageField,
  Field,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  PromoIcon: ImageField;
  PromoText: Field<string>;
  PromoLink: LinkField;
  PromoText2: Field<string>;
}

type PromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const PromoDefaultComponent = (props: PromoProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Promo</span>
    </div>
  </div>
);

export const Default = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  console.log(id);
  if (props.fields) {
    return (
      <>
        <div className="relative overflow-hidden bg-white">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {props.fields.PromoText2.value}
                </h1>
                <p className="mt-4 text-xl text-gray-500">{props.fields.PromoText.value}</p>
              </div>
              <div>
                <div className="mt-10 my-8 md:max-w-screen-xl xl:mx-auto">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <JssImage field={props.fields.PromoIcon} />
                    </div>
                  </div>

                  <Link
                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                    href={props.fields.PromoLink.value.href as string}
                  >
                    {props.fields.PromoLink.value.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      // <div className={`component promo ${props.params.styles}`} id={id ? id : undefined}>
      //   <div className="text-sm component-content">
      //     <div className="field-promoicon">
      //       <h1 className="text-3xl font-bold underline">testing</h1>
      //       <JssImage field={props.fields.PromoIcon} />
      //     </div>
      //     <div className="promo-text">
      //       <div>
      //         <div className="field-promotext">
      //           <JssRichText className="text-sm bg-red-500" field={props.fields.PromoText} />
      //         </div>
      //       </div>
      //       <div className="field-promolink">
      //         <JssLink field={props.fields.PromoLink} />
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};

export const WithText = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component promo ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-promoicon">
            <JssImage field={props.fields.PromoIcon} />
          </div>
          <div className="promo-text">
            <div>
              <div className="field-promotext">
                <JssRichText className="promo-text" field={props.fields.PromoText} />
              </div>
            </div>
            <div className="field-promotext">
              <JssRichText className="promo-text" field={props.fields.PromoText2} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <PromoDefaultComponent {...props} />;
};
