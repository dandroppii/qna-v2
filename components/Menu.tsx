'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Props {
  navData: {
    id: number;
    label: string;
    icon: JSX.Element | null;
    children: {
      key: number;
      icon: JSX.Element | null;
      label: string;
    }[];
  }[];
}

const Menu = ({ navData }: Props) => {
  const { id: categoryId, questionId } = useParams();
  const [activeMenu, setActiveMenu] = useState<any>();
  const [activeMenuMobile, setActiveMenuMobile] = useState(false);
  const router = useRouter()

  const toggle = (id: string, active: boolean) => {
    const newAct = { ...activeMenu, [`${id}`]: active } as any;
    setActiveMenu(newAct);
    localStorage.setItem('menu', JSON.stringify(newAct));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/qna/search?q=${e.target.search.value}`);
  };

  useEffect(() => {
    const act: any = {};
    let localAct: any;
    try {
      localAct = JSON.parse(localStorage.getItem('menu') ?? '{}');
    } catch (error) {
      localAct = {};
    }
    navData.forEach((item) => {
      act[`${item.id}`] = !!item.children.find((i) => `${i.key}` === categoryId) || localAct[`${item.id}`];
    });
    setActiveMenu(act);
  }, [categoryId, navData]);

  useEffect(() => {
    setActiveMenuMobile(false);
  }, [categoryId, questionId]);

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={() => setActiveMenuMobile(!activeMenuMobile)}
                type="button"
                className="mr-5 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2
                  focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
              >
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link href="/">
                <Image alt="logo" src="/logo.svg" width={105} height={36} />
              </Link>
            </div>

            <form className="w-[30%] max-w-xl" onSubmit={onSubmit} method="none">
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  name="search"
                  className="block w-full rounded-full border border-gray-300 bg-gray-50 py-2 !pr-[60px] pl-8 text-sm text-gray-900
                    focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white
                    dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Tìm theo câu hỏi, chủ đề"
                  required
                />
                <button
                  type="submit"
                  className="absolute end-0 top-0 h-full rounded-e-full border border-blue-700 bg-blue-700 p-2.5 pr-4 text-sm font-medium text-white
                    hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                    dark:focus:ring-blue-800"
                >
                  <svg
                    className="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={classNames(
          `fixed left-0 top-0 z-40 h-screen w-full border-r border-gray-200 bg-white pt-20 transition-transform
          dark:border-gray-700 dark:bg-gray-800 sm:!w-[320px] sm:translate-x-0`,
          {
            '-translate-x-full': !activeMenuMobile,
          }
        )}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-white px-3 pb-4 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {navData.map(({ id, label, icon, children }) => {
              return (
                <li key={id}>
                  {children.length ? (
                    <>
                      <button
                        type="button"
                        className={`not-clicked group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75
                          hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${id}`}
                        onClick={() => toggle(`${id}`, !activeMenu?.[`${id}`])}
                      >
                        {icon}
                        <span className="ms-3 flex-1 whitespace-nowrap text-left rtl:text-right">{label}</span>
                        <svg
                          className="h-3 w-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      <ul
                        className={classNames('space-y-2 py-2', {
                          hidden: !activeMenu?.[`${id}`],
                        })}
                      >
                        {children.map(({ key, icon, label }) => (
                          <Link
                            key={key}
                            href={`/qna/${key}`}
                            className={classNames(
                              `group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-100
                              dark:text-white dark:hover:bg-gray-700`,
                              {
                                '!bg-[#e6f4ff]': `${key}` === categoryId,
                              }
                            )}
                          >
                            {icon} &nbsp; {label}
                          </Link>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href="#"
                      className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      {icon}
                      <span className="ms-3 flex-1 whitespace-nowrap">{label}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Menu;
