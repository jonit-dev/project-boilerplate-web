import React from "react";

export const CTASection: React.FC = () => {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-inner section-inner">
          <h3 className="section-title mt-0">Still not convinced on buying?</h3>
          <div className="cta-cta">
            <a className="button button-primary button-wide-mobile" href="#">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
