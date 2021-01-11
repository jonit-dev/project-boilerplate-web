import Head from "next/head";
import React from "react";

import { FeaturesSection } from "../components/landing/FeaturesSection";
import { Footer } from "../components/landing/Footer";
import { Header } from "../components/landing/Header";
import { HeroSection } from "../components/landing/HeroSection";
import { NewsletterSection } from "../components/landing/NewsletterSection";
import { TestimonialsSection } from "../components/landing/TestimonialsSection";
import { app } from "../constants/env";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{app.general.name}</title>

        <script src="https://unpkg.com/animejs@2.2.0/anime.min.js"></script>
        <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
        <script src="/landing/js/main.js"></script>
      </Head>

      <div className="body-wrap boxed-container">
        <Header variant="relative" />
        <main>
          <HeroSection />
          <FeaturesSection />
          <TestimonialsSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
