import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <h1 className="m-0">
              <Link href="/">
                <a>
                  <img
                    className="header-logo-image"
                    src="/landing/images/logo.svg"
                    alt="Logo"
                  />
                </a>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};
