import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import PageLayout from 'src/Layout';
import {
  SitecoreContext,
  ComponentPropsContext,
  handleEditorFastRefresh,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecorePageProps } from 'lib/page-props';
import { sitecorePagePropsFactory } from 'lib/page-props-factory';
import { componentBuilder } from 'temp/componentBuilder';

const SitecorePage = (
  { componentProps, layoutData }: SitecorePageProps,
  props: SitecorePageProps
): JSX.Element => {
  useEffect(() => {
    // Since Sitecore editors do not support Fast Refresh, need to refresh EE chromes after Fast Refresh finished
    handleEditorFastRefresh();
  }, []);

  return (
    <ComponentPropsContext value={componentProps}>
      <SitecoreContext componentFactory={componentBuilder.getComponentFactory()}>
        <PageLayout layoutData={layoutData} headLinks={props.headLinks} />
      </SitecoreContext>
    </ComponentPropsContext>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation (or fallback) is enabled and a new request comes in.
export const getStaticProps: GetStaticProps<any> = async (context) => {
  const path = '/_404';

  // Update the layout from Sitecore
  const props = await sitecorePagePropsFactory.create({
    ...context,
    params: { ...context.params, path: path },
  });

  return {
    props,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5, // In seconds
  };
};

export default SitecorePage;
