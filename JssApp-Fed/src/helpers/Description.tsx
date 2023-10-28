import { CrossTraining } from '../.generated/templates/models/Foundation.CrossTraining.Model';
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';

type DescriptionProps = CrossTraining.Base.Fields.Description & {
  className?: string;
};

const Description = ({ fields, className }: DescriptionProps): JSX.Element => {
  return (
    <>
      <RichText className={className} field={fields?.BodyCopy} />
    </>
  );
};

export default Description;
