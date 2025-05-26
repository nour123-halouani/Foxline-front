'use client';
import { useLanguage } from "@/app/context/LanguageContext";
import { useTranslations } from "@/app/hooks/useTranslations";
import cn from "@/app/utils/classNames";
import Image from "next/image";
import operation1 from '../../../../public/home-media/operation-1.png';
import operation2 from '../../../../public/home-media/operation-2.png';
import operation3 from '../../../..//public/home-media/operation-3.png';
import { Button } from "rizzui";
import Link from "next/link";

export default function AboutUs() {
  const t = useTranslations();
  const { lang } = useLanguage();

  return (
    <main className="container py-4">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug text-black">
          {t("aboutUs")}
        </h1>
        <p className="text-typography-dark text-sm md:px-60">
          {t("aboutUsDescription")}
        </p>

        <div className="mt-8 rounded-md p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "5", label: t("warehouse") },
            { number: "3", label: t("country") },
            { number: "100+", label: t("employee") },
            { number: "4+", label: t("yearsOfExperience") },
          ].map((item, index) => (
            <div
              key={index}
              className={cn("h-20 flex flex-col justify-center",
                lang === "ar"
                  ? "border-r-2 border-gold text-right pr-5"
                  : "border-l-2 border-gold text-left pl-5"
              )}
            >
              <h2 className="text-3xl font-semibold text-black">
                {item.number.includes("+") ? (
                  <>
                    {item.number.replace("+", "")}
                    <span className="text-gold font-bold">+</span>
                  </>
                ) : (
                  item.number
                )}
              </h2>
              <p className="text-sm text-typography-lighter">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-24 sm:py-20 w-full">
        <div className="flex md:flex-row flex-col-reverse sm:gap-16 w-full justify-center items-center">
          <div className={cn("flex flex-col gap-2 sm:w-1/2 text-center", lang === "ar" ? "sm:text-right" : "sm:text-left")}>
            <h2 className="text-xl font-semibold">
              {t("visionTitle")}
            </h2>
            <p className="text-sm text-typography-dark">
              {t("visionDescription")}
            </p>
            <Link href="/contact-us">
              <Button className="bg-gold text-white px-4 py-2 rounded w-32 mt-2" size="sm">
                {t("contactUs")}
              </Button>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center sm:w-1/2">
            <Image
              src={operation1}
              alt="operation1"
              className="w-48 h-48 sm:w-72 sm:h-72"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-16 w-full justify-center items-center">
          <div className="flex flex-col justify-center items-center sm:w-1/2">
            <Image
              src={operation2}
              alt="operation2"
              className="w-48 h-48 sm:w-72 sm:h-72"
            />
          </div>
          <div className={cn("flex flex-col gap-2 sm:w-1/2 text-center", lang === "ar" ? "sm:text-right" : "sm:text-left")}>
            <h2 className="text-xl font-semibold text-black mb-2">
              {t("provideTitle")}
            </h2>
            <p className="text-sm text-typography-dark mb-4">
              {t("provideDescription")}
            </p>
            <Link href="/contact-us">
              <Button className="bg-gold text-white px-4 py-2 rounded w-32 mt-2" size="sm">
                {t("contactUs")}
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse gap-16 w-full justify-center items-center">
          <div className={cn("flex flex-col gap-2 sm:w-1/2 text-center", lang === "ar" ? "sm:text-right" : "sm:text-left")}>
            <h2 className="text-xl font-semibold">
              {t("differenceTitle")}
            </h2>
            <p className="text-sm text-typography-dark">
              {t("differenceDescription")}
            </p>
            <Link href="/contact-us">
              <Button className="bg-gold text-white px-4 py-2 rounded w-32 mt-2" size="sm">
                {t("contactUs")}
              </Button>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center sm:w-1/2">
            <Image
              src={operation3}
              alt="operation3"
              className="w-48 h-48 sm:w-72 sm:h-72"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
