import React from 'react';
import { Image as JssImage, Link as JssLink } from '@sitecore-jss/sitecore-jss-nextjs';
import { CrossTraining } from '../.generated/templates/models/Feature.CrossTraining.Model';
import Headline from 'src/helpers/Headline';
import Description from 'src/helpers/Description';

type BannerProps = CrossTraining.Banner.Fields.Banner;

const BannerDefaultComponent = (props: BannerProps): JSX.Element => (
  <div className={`component promo`}>
    <div className="component-content">
      <span className="is-empty-hint">Banner</span>
    </div>
  </div>
);

export const Default = (props: BannerProps): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <div className=" bg-cyan-100">
          <header
            id="header"
            className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32"
          >
            <div className="container mx-auto px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
              <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
                <Headline
                  tag="h1"
                  className="text-[46px] lg:text-[3.125rem] font-bold mb-5 -tracking-[0.5px]"
                  {...props}
                />
                <Description className="text-lg mb-8  font-normal text-[#6b747b]" {...props} />
                <div className="flex flex-col md:flex-row lg:justify-content-lg-start">
                  <div className="btn-solid-lg  bg-[#594cda] border py-[0.65rem] px-[1.75rem] mb-0.5 rounded-[32px] lg:mb-0 lg:mr-0.5 hover:bg-[#eb427e]">
                    <JssLink field={props.fields?.PrimaryCTA} className="text-white">
                      <i className="fab fa-apple"></i>
                      {props.fields?.PrimaryCTAText.value}
                    </JssLink>
                  </div>
                  <div className=" bg-[#eb427e] border py-[0.65rem] px-[1.75rem] rounded-[32px] mt-0.5 lg:mt-0 lg:ml-0.5 hover:bg-[#594cda]">
                    <JssLink
                      field={props.fields?.SecondaryCTA}
                      className="btn-solid-lg secondary text-white"
                    >
                      <i className="fab fa-google-play"></i>
                      {props.fields?.SecondaryCTAText.value}
                    </JssLink>
                  </div>
                </div>
              </div>
              <div className="xl:text-right">
                <JssImage className="inline" field={props.fields?.Image} />
              </div>
            </div>
          </header>
        </div>
      </>
    );
  }

  return <BannerDefaultComponent {...props} />;
};
