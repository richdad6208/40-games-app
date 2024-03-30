"use client";

import { Accordion, AccordionItem, NextUIProvider } from "@nextui-org/react";
import { useState } from "react";

export default function Page() {
  const [toggle1, setToggle1] = useState<boolean>(false);
  const itemClasses = {
    titleWrapper: "bg-white px-3",
    base: "bg-white w-[500px] rounded-md px-3",
  };

  return (
    <div className="flex flex-col justify-center items-center bg-blue-100 h-full">
      <NextUIProvider>
        <h2 className="italic text-5xl mb-10">General Question</h2>
        <div className="space-y-5">
          <div className="w-full">
            <Accordion itemClasses={itemClasses} variant="light">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Do You Accept All Major Credit Cards?"
              >
                <div className="w-1/2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  sequi inventore rem magnam quia atque illum quisquam eligendi
                  quibusdam explicabo quaerat qui repudiandae quis, enim nemo
                  odit nam. Provident, omnis?
                </div>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion itemClasses={itemClasses} variant="light">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Do You Accept All Major Credit Cards?"
              >
                <div className="w-1/2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  sequi inventore rem magnam quia atque illum quisquam eligendi
                  quibusdam explicabo quaerat qui repudiandae quis, enim nemo
                  odit nam. Provident, omnis?
                </div>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion itemClasses={itemClasses} variant="light">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Do You Accept All Major Credit Cards?"
              >
                <div className="w-1/2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  sequi inventore rem magnam quia atque illum quisquam eligendi
                  quibusdam explicabo quaerat qui repudiandae quis, enim nemo
                  odit nam. Provident, omnis?
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </NextUIProvider>
    </div>
  );
}
