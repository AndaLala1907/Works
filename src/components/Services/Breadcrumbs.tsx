"use client";

import { usePathname } from "next/navigation";
import { HeroSection } from "@/data/serviceData";

interface HeroSectionProps {
  data: HeroSection;
}

const Breadcrumbs: React.FC<HeroSectionProps> = ({ data }) => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb" className="breadcrumb-container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">
            <i className="fa-solid fa-house"></i> Home
          </a>
        </li>
        {pathnames.map((value, index) => {
          const href = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li
              className="breadcrumb-item active"
              aria-current="page"
              key={href}
            >
              {data.title || value.charAt(0).toUpperCase() + value.slice(1)}
            </li>
          ) : (
            <li className="breadcrumb-item" key={href}>
              <a href={href}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
