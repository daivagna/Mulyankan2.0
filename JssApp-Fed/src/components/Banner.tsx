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
  console.log(props);
  if (props.fields) {
    return (
      <>
        <header
          id="header"
          className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32"
        >
          <div className="container mx-auto px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
              <Headline tag="h1" className="h1-large mb-5" {...props} />
              <Description className="p-large mb-8" {...props} />
              <JssLink field={props.fields?.PrimaryCTA} className="btn-solid-lg">
                <i className="fab fa-apple"></i>
                {props.fields?.PrimaryCTAText.value}
              </JssLink>
              <JssLink field={props.fields?.SecondaryCTA} className="btn-solid-lg secondary">
                <i className="fab fa-google-play"></i>
                {props.fields?.SecondaryCTAText.value}
              </JssLink>
            </div>
            <div className="xl:text-right">
              <JssImage className="inline" field={props.fields?.Image} />
            </div>
          </div>
        </header>
      </>
    );
  }

  return <BannerDefaultComponent {...props} />;
};
