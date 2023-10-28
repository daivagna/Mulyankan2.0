import React from 'react';
import { Field, LinkField, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Description: Field<string>;
  PrivacyTitle: Field<string>;
  TermsTitle: Field<string>;
  PrivacyLink: LinkField;
  TermsLink: LinkField;
  SocialIcons: [];
}

type FooterProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const FooterDefaultComponent = (): JSX.Element => (
  <div className="component promo">
    <div className="component-content">
      <span className="is-empty-hint">Promo</span>
    </div>
  </div>
);

export const Default = (props: FooterProps): JSX.Element => {
  //const id = props.params.RenderingIdentifier;
  console.log(JSON.stringify(props.fields.SocialIcons));
  if (props.fields) {
    return (
      <>
        <div className="footer bg-indigo-300">
          <div className="container px-4 sm:px-8 text-center">
            <RichText field={props.fields.Description}></RichText>
            <div className="social-container">
              {props.fields.SocialIcons.map((fields: any) => (
                <span className="fa-stack">
                  <Link href={fields.fields.LinkUrl?.value.href}>
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className={fields.fields.FontAwesomeClass?.fields.Class.value}></i>
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
                  href={props.fields.TermsLink.value.href}
                  className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  {props.fields.TermsTitle.value}
                </a>
              </li>
              <li className="mb-2">
                <Link
                  href={props.fields.PrivacyLink.value.href}
                  className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  {props.fields.PrivacyTitle.value}
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
