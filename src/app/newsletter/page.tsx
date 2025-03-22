import HeroNewsletter from "@/components/Newsletter/HeroNewsletter";
import NewsPage from "@/components/Newsletter/MainContainer";
import NewsletterSlider from "@/components/Newsletter/NewsletterSlider";
import NewsletterSub from "@/components/Newsletter/NewsletterSub";
import React from "react";

const NewsletterPage = () => {
  return (
    <div>
      <HeroNewsletter />
      <NewsPage />
      <NewsletterSlider />
      <NewsletterSub />
    </div>
  );
};

export default NewsletterPage;
