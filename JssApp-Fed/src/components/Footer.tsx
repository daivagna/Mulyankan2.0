import React from 'react';
import { Field, LinkField, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
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
  //const id = props.params.RenderingIdentifier;
  //console.log(JSON.stringify(props.fields.));
  if (props.fields) {
    return (
      <>
        <div className="footer bg-indigo-300">
          <div className="container px-4 sm:px-8 text-center">
            <RichText fields={props.fields.Description?.value}></RichText>
            <div className="social-container">
              {props.fields?.SocialIcon.map((fields: any, index) => (
                <span className="fa-stack" key={index}>
                  <Link href={fields.fields.Link?.value.href}>
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className={fields.fields.FontAwesomeClass?.fields.ClassName.value}></i>
                    {fields.fields.Title?.value}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="copyright bg-indigo-300">
          <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-1">
            <p className="pb-2 p-small statement text-center">
              Copyright ©
              <a href="#your-link" className="no-underline text-black">
                {new Date().getFullYear()}
              </a>
            </p>
            <ul className="mb-4 list-unstyled p-small px-20 flex lg:grid-cols-2">
              <li className="mb-2 pr-2.5">
                <a
                  href={props.fields.TermsAndConditionLink?.value.href}
                  className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  {props.fields.TermsAndConditionTitle?.value}
                </a>
              </li>
              <li className="mb-2">
                <Link
                  href={props.fields.PrivarcyPolicyLink?.value.href}
                  className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
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
