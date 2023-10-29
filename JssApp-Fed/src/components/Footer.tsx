import React from 'react';
import { RichText as JssRichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { CrossTraining } from '../.generated/templates/models/Feature.CrossTraining.Model';
import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
type FooterProps = CrossTraining.Navigation.Footer.Fields.Footer;

const FooterDefaultComponent = (): JSX.Element => (
  <div className="component promo">
    <div className="component-content">
      <span className="is-empty-hint">Footer</span>
    </div>
  </div>
);

export const Default = (props: FooterProps): JSX.Element => {
  console.log(JSON.stringify(props.fields?.SocialIcon[0].fields.ClassName.value));
  if (props.fields) {
    return (
      <>
        <div className="footer bg-cyan-100">
          {/* <FontAwesomeIcon icon={props.fields.SocialIcon[0].fields.ClassName.value} /> */}
          <div className="px-4 sm:px-8 text-center">
            <JssRichText
              className="text-[1.5rem] mb-8 font-bold "
              field={props.fields.Description}
            ></JssRichText>
            <div className="social-container flex justify-around pb-1 ">
              {props.fields?.SocialIcon.map((fields: any, index) => (
                <span className="fa-stack " key={index}>
                  <Link className="text-black font-medium" href={fields.fields.Link?.value.href}>
                    {/* <i className="fas fa-circle fa-stack-2x"></i> */}
                    {/* <i className={props.fields?.SocialIcon[0].fields.ClassName.value}></i> */}
                    {/* <FontAwesomeIcon className='h-9' icon={props.fields?.SocialIcon[0].fields.ClassName.value}/> */}
                    {fields.fields.Title?.value}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="copyright bg-cyan-100">
          <div className="px-4 sm:px-8 lg:grid lg:grid-cols-1">
            <p className="pb-2 p-small statement text-center">
              {props.fields.CopyRightText?.value.replace(
                '{year}',
                new Date().getFullYear().toString()
              )}
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
