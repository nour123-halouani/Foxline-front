'use client';
import { useLanguage } from "@/app/context/LanguageContext";
import { useTranslations } from "@/app/hooks/useTranslations";
import { useState } from "react";
import { Dropdown } from "@/app/components/icons/Dropdown";
import { AccordionOpen } from "@/app/components/icons/AccordionOpen";
import { AccordionClose } from "@/app/components/icons/AccordionClose";

export default function FAQ() {
  const t = useTranslations();
  const { lang } = useLanguage();

  type AccordionItem = {
    title: string;
    content: string;
  };

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  const data: AccordionItem[] = [
    {
      title: 'Option A',
      content: 'Contenu pour Option A...',
    },
    {
      title: 'Option B',
      content: 'Contenu pour Option B...',
    },
    {
      title: 'Option C',
      content: 'Contenu pour Option C...',
    },
  ];


  return (
    <main className="pt-4">
      <div className="flex flex-col gap-5 text-center container">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug text-black">
          {t("FAQTitle")}
        </h1>
        <p className="text-typography-dark text-sm md:px-60">
          {t("FAQDescription")}
        </p>
      </div>
      <div className="bg-bg-dark py-16 mt-10">
        <div className="space-y-4 container">
          {data.map((item, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div
                key={index}
                className={`rounded-lg bg-bg shadow-custom border transition-all duration-300 ease-in-out
                ${isOpen ? 'border-1 border-gold' : 'border border-bg-lighter hover:border-gold focus-within:border-gold'}`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-4 text-lg font-semibold focus:outline-none"
                >
                  {item.title}
                  <div className="relative w-8 h-8">
                    <div
                      className={`absolute inset-0 rounded-full shadow-custom transition-all duration-300 ease-in-out
                      ${isOpen ? 'bg-gold' : 'bg-bg-lighter'}`}
                    />
                    <AccordionOpen
                      lang={lang}
                      className={`absolute inset-0 m-auto transition-all duration-300 ease-in-out
                      ${isOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
                    />
                    <AccordionClose
                      className={`absolute inset-0 m-auto transition-all duration-300 ease-in-out
                      ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                    />
                  </div>
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-sm text-typography-dark">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}