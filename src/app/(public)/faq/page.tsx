'use client';
import { useLanguage } from "@/app/context/LanguageContext";
import { useTranslations } from "@/app/hooks/useTranslations";
import { useEffect, useState } from "react";
import { AccordionOpen } from "@/app/components/icons/AccordionOpen";
import { AccordionClose } from "@/app/components/icons/AccordionClose";
import { getFAQs } from "@/_redux/actions/public";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/_redux/store";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { faq } = useSelector((state: any) => state.public);
  const dispatch = useDispatch<AppDispatch>();
  const { lang } = useLanguage();
  const t = useTranslations();

  useEffect(() => {
    dispatch(getFAQs());
  }, []);

  const toggle = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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
        <div className="container space-y-4 ">
          {faq.map((item: any, index: number) => {
            const isOpen = openItems.includes(index);
            return (
              <div
                key={index}
                className={`rounded-lg bg-bg shadow-custom border transition-all duration-300 ease-in-out
                ${isOpen ? 'border-1 border-gold' : 'border border-bg-lighter hover:border-gold focus-within:border-gold'}`}
              >
                <button
                  onClick={() => toggle(index)}
                  className={`flex w-full flex-row items-center justify-between p-4 text-lg font-semibold focus:outline-none`}
                >
                  <span className={`flex-1 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    {lang === 'ar' ? item.questionAr : item.questionEn}
                  </span>
                  <div dir="ltr" className="relative w-8 h-8 shrink-0">
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
                  <div className="p-4 pt-0 text-md text-typography-dark">
                    {lang === 'ar' ? item.responseAr : item.responseEn}
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