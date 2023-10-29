import React from 'react';
import { CrossTraining } from '../.generated/templates/models/Feature.CrossTraining.Model';
import Headline from 'src/helpers/Headline';
import Description from 'src/helpers/Description';


type  ContentBlockProps = CrossTraining.ContentBlock.Fields.ContentBlock

const ContentBlock = (props: ContentBlockProps): JSX.Element => (
  <div className={`component promo`}>
    <div className="component-content">
      <span className="is-empty-hint">ContentBlock</span>
    </div>
  </div>
);

export const Default = (props: ContentBlockProps): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <div className="container mx-auto px-4 sm:px-8 xl:px-4">
          <div className="pt-14 pb-14 text-center">
            <Headline tag='h1' className="text-4xl leading-10 mb-4 font-semibold"{...props}/>
            <div className="mb-4  text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto">
              <Description {...props}/>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <ContentBlock {...props} />;
};
