import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import Description from 'src/helpers/Description';
import Headline from 'src/helpers/Headline';

interface iframeclass {
  fields: {
    IframeUrl: Field<string>;
  };
}
export type iframProps = {
  fields?: iframeclass;
};

const Iframe = (props: iframeclass): JSX.Element => {
  console.log('data is' + JSON.stringify(props.fields.IframeUrl.value));
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 xl:px-4">
        <div className="pt-14 pb-14 text-center">
          <Headline tag="h1" className="text-4xl leading-10 mb-4 font-semibold" {...props} />
          <div className="mb-4  text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto">
            <Description {...props} />
          </div>
        </div>
      </div>
      <div className="mx-auto w-full">
        <iframe
          className="mx-auto"
          src={props.fields.IframeUrl.value}
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};
export default Iframe;
