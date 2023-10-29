//console.log('data is' + props);

import {
  Field,
  ImageField,
  Image as JssImage,
  NextImage,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

export type CardFields = {
  fields?: {
    CardIcon: ImageField;
    CardText: Field<string>;
    CardDescription: Field<string>;
  };
};
interface Cards {
  fields: CardFields[];
}
type CardListProps = {
  fields: Cards[];
};

const CardList = (props: CardListProps): JSX.Element => {
  console.log('data is ' + JSON.stringify(props.rendering.fields.Cards));

  const list = props.rendering.fields.Cards;
  console.log('list is ' + JSON.stringify(list[0]));

  return (
    <>
      {/* <!-- This is an example component --> */}

      <div className="px-3 lg:max-w-6xl mx-auto">
        <div className="text-4xl sm:text-5xl text-center my-10">
          {props.rendering.fields.Heading.value}
        </div>
        <div className="md:grid md:grid-cols-3 gap-3 auto-rows-max">
          {list.map((fields: any, index) => {
            console.log('FIeld name' + JSON.stringify(fields.fields.CardImage.value));

            return (
              <div key="1" className=" max-w-5xl m-auto ">
                <div className="bg-white">
                  <div>
                    <JssImage
                      field={fields.fields.CardImage}
                      width={50}
                      height={50}
                      className="m-auto"
                    />
                  </div>
                  <div className="px-10 py-6 mb-10 text-center flex flex-col">
                    <div className="text-2xl font-bold text-purple-500 mb-4 mt-auto">
                      {fields.fields.Heading.value}
                    </div>
                    <RichText field={fields.fields.BodyCopy} className="text-sm" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CardList;
