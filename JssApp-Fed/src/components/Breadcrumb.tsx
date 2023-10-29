import Link from 'next/link';
import React from 'react';

type BreadcrumbProps = {
  fields: {
    data: {
      item: Breadcrumb & {
        ancestors: Breadcrumb[];
      };
    };
  };
};

type Breadcrumb = {
  name: string;
  url: {
    path: string;
  };
};

const BreadcrumbDefaultComponent = (props: BreadcrumbProps): JSX.Element => (
  <div className={`component promo`}>
    <div className="component-content">
      <span className="is-empty-hint">Breadcrumb</span>
    </div>
  </div>
);

export const Default = (props: BreadcrumbProps): JSX.Element => {
  if (props.fields.data.item) {
    return (
      <>
        <nav className="flex absolute px-[10px] py-[20px]" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            {props.fields.data.item.ancestors
              ?.slice()
              .reverse()
              .map((b: Breadcrumb) => {
                return (
                  <li className="flex items-center">
                    <Link
                      href={b.url?.path}
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      {b.name}
                    </Link>
                    <svg
                      className="w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </li>
                );
              })}
            <li aria-current="page">
              <div className="flex items-center">
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  {props.fields.data.item?.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </>
    );
  }

  return <BreadcrumbDefaultComponent {...props} />;
};
