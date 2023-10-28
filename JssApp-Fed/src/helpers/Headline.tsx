import { CrossTraining } from '../.generated/templates/models/Foundation.CrossTraining.Model';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';

type HeadlineProps = CrossTraining.Base.Fields.Headline & {
  tag?: string;
  className?: string;
};

const Headline = ({ fields, tag, className }: HeadlineProps): JSX.Element => {
  const defaultTag = 'h2';
  return (
    <>
      <Text tag={tag ?? defaultTag} encode={true} field={fields?.Heading} className={className} />
    </>
  );
};

export default Headline;
