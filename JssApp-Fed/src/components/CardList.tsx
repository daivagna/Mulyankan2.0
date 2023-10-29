//console.log('data is' + props);

import { Field, ImageField, Image as JssImage, NextImage } from '@sitecore-jss/sitecore-jss-nextjs';

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
        <div className="text-4xl sm:text-5xl text-center my-10">What type of food do you like?</div>
        <div className="grid grid-cols-3 gap-3 auto-rows-max">
          {list.map((fields: any, index) => {
            console.log('FIeld name' + JSON.stringify(fields.fields.CardIcon.value));

            return (
              <div key="1" className=" max-w-5xl m-auto ">
                <div className="bg-white">
                  <div>
                    <NextImage
                      field={fields.fields.CardIcon}
                      width={50}
                      height={50}
                      className="m-auto"
                    />
                  </div>
                  <div className="px-10 py-6 mb-10 text-center flex flex-col">
                    <div className="text-2xl font-bold text-purple-500 mb-4 mt-auto">
                      {fields.fields.CardText.value}
                    </div>
                    <span className="text-sm">{fields.fields.CardDescription.value}</span>
                  </div>
                </div>
              </div>
            );
          })}
          ;
        </div>
      </div>
    </>
  );
};
export default CardList;
