'use client';
import { useTranslations } from "@/app/hooks/useTranslations";
import Image from "next/image";
import contactUs from '../../../../public/home-media/contact-us.png';
import ContactUsForm from "../../components/pages/publicPages/ContactUs/ContactUsForm";
import { Phone } from "@/app/components/icons/Phone";
import { Email } from "@/app/components/icons/Mail";
import { Location } from "@/app/components/icons/Location";
import Description from '../../../../public/home-media/Description.png';

export default function ContactUs() {
  const t = useTranslations();

  return (
    <main className="container py-4">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug text-black">
          {t("contactUs")}
        </h1>
        <p className="text-typography-dark text-sm md:px-60">
          {t("contactUsDescription")}
        </p>
      </div>

      <div className="px-4 md:px-8 flex justify-center pb-6 md:pb-8 sm:mt-20 mt-10">
        <div className="flex flex-col lg:flex-row bg-bg-lighter shadow-custom backdrop-blur-sm p-4 rounded-lg max-w-4xl w-full gap-6">
          <div className="hidden lg:flex lg:w-1/2 relative">
            <Image
              src={contactUs}
              alt="contact-us"
              className="object-contain"
            />
            <div className="absolute inset-0 flex p-8 flex-col gap-2 justify-between">
              <div className="text-white text-xl font-medium">
                {t("contactInfoTitle")}
              </div>
              <div className="text-white text-sm font-normal flex flex-col gap-7">
                <span className="flex flex-row gap-4 items-start">
                  <Phone className="w-5 h-5" />
                  <span className="flex flex-col font-light">
                    <span>+218 28 255555</span>
                    <span>+218 28 255555</span>
                  </span>
                </span>

                <span className="flex flex-row gap-4 items-start">
                  <Email className="w-5 h-5" />
                  <span className="flex flex-col font-light">
                    info@foxline.ly
                  </span>
                </span>

                <span className="flex flex-row gap-4 items-start">
                  <Location className="w-5 h-5" />
                  <span className="flex flex-col font-light">
                    <span>Lybia </span>
                    <span>Germany</span>
                  </span>
                </span>
              </div>
              <div>
                <div>
                  <Image src={Description} alt="" />
                </div>
              </div>
            </div>
          </div>
          <section className="w-full lg:w-1/2 flex items-center">
            <ContactUsForm />
          </section>
        </div>
      </div>
    </main>
  );
}
