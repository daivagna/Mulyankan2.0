import React from 'react';
import { RichText as JssRichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { CrossTraining } from '../.generated/templates/models/Feature.CrossTraining.Model';
import Link from 'next/link';
type FooterProps = CrossTraining.Navigation.Footer.Fields.Footer;

const FooterDefaultComponent = (): JSX.Element => (
  <div className="component promo">
    <div className="component-content">
      <span className="is-empty-hint">Footer</span>
    </div>
  </div>
);

export const Default = (props: FooterProps): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <div className="footer bg-cyan-100">
          <div className="px-4 sm:px-8 text-center">
            <JssRichText
              className="text-[1.5rem] mb-8 font-bold "
              field={props.fields.Description}
            ></JssRichText>
            <div className="social-container flex justify-around pb-1 ">
              {props.fields?.SocialIcon.map((fields: any, index) => (
                <span
                  className="fa-stack rounded-full flex items-center justify-center p-[35px] bg-white hover:bg-black"
                  key={index}
                >
                  <Link className="text-black font-medium" href={fields.fields.Link?.value.href}>
                    <span
                      className={`fa ${fields.fields.ClassName.value} text-4xl hover:text-white`}
                      aria-hidden="true"
                    ></span>
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="copyright bg-cyan-100">
          <div className="px-4 sm:px-8 lg:grid lg:grid-cols-1">
            <p className="pb-2 p-small statement text-center font-normal">
              Copyright ©
              <a href="#your-link" className="no-underline text-black font-normal">
                {new Date().getFullYear()}
              </a>
            </p>
            <ul className="mb-0 list-unstyled p-small px-20 flex md:justify-center font-semibold lg:grid-cols-2">
              <li className="mb-2 pr-2.5">
                <a
                  href={props.fields.TermsAndConditionLink?.value.href}
                  className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  {props.fields.TermsAndConditionTitle?.value}
                </a>
              </li>
              <li className="h-[25px] bg-black w-[1px] mr-2.5"></li>
              <li className="mb-2">
                <Link
                  href={props.fields.PrivarcyPolicyLink?.value.href}
                  className="text-blue-600 hover:text-blue-800 visited:text-purple-600 no-underline"
                >
                  {props.fields.PrivarcyPolicyTitle?.value}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
  return <FooterDefaultComponent {...props} />;
};
