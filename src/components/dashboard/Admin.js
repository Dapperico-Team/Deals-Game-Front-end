/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../asset/logoLight";
import LogoText from "../../asset/logoTextLight.js";
import Button from "../button/Connect";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";

const navigation = [
  { name: "Lottery", href: "lottery", icon: HomeIcon, current: true },
  { name: "Price", href: "price", icon: UsersIcon, current: false },
  {
    name: "Status",
    href: "status",
    icon: FolderIcon,
    current: false,
  },
  {
    name: "Validator",
    href: "validate",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Compelete",
    href: "compelete",
    icon: InboxIcon,
    current: false,
  },
  {
    name: "Calculate",
    href: "calculate",
    icon: ChartBarIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { chains, provider } = configureChains(
    [chain.rinkeby],
    [infuraProvider({ infuraId: process.env.INFURA_ID })]
  );

  const { connectors } = getDefaultWallets({
    appName: "Deals Game",
    chains,
  });

  const wagmiClient = createClient({
    // autoConnect: true,
    connectors,
    provider,
  });
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-40 flex md:hidden"
                onClose={setSidebarOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </Transition.Child>
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <div className="relative flex flex-col flex-1 w-full max-w-xs bg-indigo-700">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 right-0 pt-2 -mr-12">
                        <button
                          type="button"
                          className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XIcon
                            className="w-6 h-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                      <div className="flex items-center flex-shrink-0 px-4">
                        <Logo theme={"dark"} />
                        <LogoText theme={"dark"} />
                      </div>
                      <nav className="px-2 mt-5 space-y-1">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? "bg-indigo-800 text-white"
                                : "text-white hover:bg-indigo-600 hover:bg-opacity-75",
                              "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                            )}
                          >
                            <item.icon
                              className="flex-shrink-0 w-6 h-6 mr-4 text-indigo-300"
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        ))}
                      </nav>
                    </div>
                    <div className="flex flex-shrink-0 p-4 border-t border-indigo-800">
                      <a href="#" className="flex-shrink-0 block group">
                        <div className="flex items-center">
                          <div>
                            <img
                              className="inline-block w-10 h-10 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-base font-medium text-white">
                              Balthazar
                            </p>
                            <p className="text-sm font-medium text-indigo-200 group-hover:text-white">
                              View profile
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 w-14" aria-hidden="true">
                  {/* Force sidebar to shrink to fit close icon */}
                </div>
              </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex flex-col flex-1 min-h-0 bg-indigo-700">
                <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                  <div className="flex items-center flex-shrink-0 px-4">
                    <Logo theme={"dark"} />
                    <LogoText theme={"dark"} />
                  </div>
                  <nav className="flex-1 px-2 mt-5 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-indigo-800 text-white"
                            : "text-white hover:bg-indigo-600 hover:bg-opacity-75",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className="flex-shrink-0 w-6 h-6 mr-3 text-indigo-300"
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="flex flex-shrink-0 p-4 border-t border-indigo-800">
                  <a href="#" className="flex-shrink-0 block w-full group">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block rounded-full h-9 w-9"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-white">
                          Balthazar
                        </p>
                        <p className="text-xs font-medium text-indigo-200 group-hover:text-white">
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 md:pl-64">
              <div className="sticky top-0 z-10 pt-1 pl-1 bg-gray-100 md:hidden sm:pl-3 sm:pt-3">
                <button
                  type="button"
                  className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <main className="flex-1">
                <div className="py-6">
                  <div className="flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                    <h1 className="text-2xl font-semibold text-gray-900">
                      Dashboard
                    </h1>
                    <Button />
                  </div>
                  <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                    {/* Replace with your content */}
                    <Outlet />
                    {/* /End replace */}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
