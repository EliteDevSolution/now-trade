
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown({childrens}) {
  return (
    <Menu as="div" className="m-3 p-2 relative z-50">
      <div>
        <Menu.Button className="h-[50px] dark:text-white text-black focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center bg-lightPrimaryColor dark:bg-darkPrimaryColor border-solid border-2 dark:border-gray-100">
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Account 80876399</div>
                <div className="font-medium truncate">name@flowbite.com</div>
            </div>
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-left absolute left-2 mt-1 w-[225px] rounded-md shadow-lg py-1 bg-lightPrimaryColor dark:bg-slate-700 ring-1 ring-black ring-opacity-5 focus:outline-none z-40 divide-y divide-gray-500">
          {childrens.map((item, index) => {
            return (
              <Menu.Item key={`menu_${index}`} className="">
                {({ active }) => (

                    <div className="px-4 py-3 text-sm dark:text-white ">
                        <div>Account 80876399</div>
                        <div className="font-medium truncate">name@flowbite.com</div>
                    </div>
                )}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}