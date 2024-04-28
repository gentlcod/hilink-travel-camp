import Link from "next/link";
import Image from "next/image";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";

const Footer = () => {
  return (
    <section className='flexCenter mb-24 mt-15'>
      <div className="paddingContainer max-container w-full flex-full gap-14">
        <div className="flex flex-col items-start justify-center gap-10 md:flex-row">
          <Link href="/" className="mb-10">
            <Image
              src="/hilink-logo.svg"
              alt="logo"
              width={74}
              height={29}
              className="ml-7"
            />
          </Link>

          <div className="ml-7 flex flex-wrap gap-10 md:flex-1 sm:justify-between">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <li key={link}>
                      <Link href="/">{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <Link href="/" key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                  <p className="whitespace-nowrap">{link.label}:</p>
                  <p className="medium-14 whitespace-nowrap text-blue-70">{link.value}</p>
                </Link>
              ))}
            </FooterColumn>

            <FooterColumn title={SOCIALS.title}>
              <ul className="regular-14 flex gap-4 text-gray-30 mr-7">
                {SOCIALS.links.map((link) => (
                  <li key={link}>
                    <Link href="/">
                      <Image src={link} alt="logo" height={24} width={24} />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>

        <div className="border bg-gray-20 h-[.5px] mt-9" />

        <p className="regular-14 w-full text-center text-gray-30 pt-9">
          &copy;2024 Hilink | All Rights Reserved
        </p>
      </div>
    </section>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-16 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
