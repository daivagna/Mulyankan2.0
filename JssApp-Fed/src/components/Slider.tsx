import React from 'react';
import { CrossTraining } from '../.generated/templates/models/Feature.CrossTraining.Model';
import Headline from 'src/helpers/Headline';
import Slider from 'react-slick';
import {
  Image as JssImage,
  RichText as JssRichText,
  Text,
  ImageField,
  Field,
  LinkField,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { log } from 'console';

type SliderProps = CrossTraining.Slider.Fields.Slider;

const SliderComp = (props: SliderProps): JSX.Element => (
  <div className={`component promo`}>
    <div className="component-content">
      <span className="is-empty-hint">Slider</span>
    </div>
  </div>
);
const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
};

export const Default = (props: SliderProps): JSX.Element => {
  console.log(JSON.stringify(props.fields?.SliderCards[0].fields.Heading.value));

  if (props.fields) {
    return (
      <>
        <div className="slider py-36 bg-[#f1f9fc]">
          <div className="container mx-auto slider-heading">
            <Headline
              tag="h2"
              className="text-4xl text-center leading-10 mb-12  font-semibold"
              {...props}
            />
          </div>
          <div className="slick-slider">
            <div className="container mx-auto">
              <Slider {...settings}>
                {props.fields.SliderCards.map((Card: any, index: number) => {
                  console.log(Card);

                  return (
                    <div>
                      <div className="w-[80px] h-[80px] mb-5 text-center mx-auto">
                        <JssImage field={Card.fields.Image.value} />
                      </div>
                      <div className="slider-content text-center">
                        <div className="italic font-medium text-[20px] mx-2 mb-3 text-[#6b747b]">
                          <RichText field={Card.fields.BodyCopy} />
                        </div>
                        <div className="font-semibold text-[18px]">
                          <Text tag="p" field={Card.fields.Heading} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <SliderComp {...props} />;
};
