import Image from "next/image";
import Link from "next/link";
import React from "react";

import { appEnv } from "../../../constants/appEnv";
import { TS } from "../../../libs/TranslationHelper";
import { Footer__ } from "../../../styles/components/footer.styles";
import { Logo } from "../../theme/Logo";

export const Footer: React.FC = (props) => {
  return (
    <Footer__.Container className="site-footer">
      <div className="container">
        <div className="site-footer-inner has-top-divider">
          <div className="brand footer-brand">
            <Logo />
          </div>
          <ul className="footer-links list-reset">
            <li>
              <Link href={`mailto:${appEnv.general.adminEmail}`}>
                {TS.translate("global", "contact")}
              </Link>
            </li>
            <li>
              <Link href={`/legal/terms/${appEnv.general.language}`}>
                {TS.translate("global", "termsOfUse")}
              </Link>
            </li>
            <li>
              <Link href={`/legal/privacy/${appEnv.general.language}`}>
                {TS.translate("global", "privacyPolicy")}
              </Link>
            </li>
          </ul>
          <ul className="footer-social-links list-reset">
            <li>
              <a
                href={appEnv.social.facebookUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="screen-reader-text">Facebook</span>
                <Image src="/social/facebook.svg" width={16} height={16} />
              </a>
            </li>
            <li>
              <a
                href={appEnv.social.twitterUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="screen-reader-text">Twitter</span>
                <Image src="/social/twitter.svg" width={16} height={16} />
              </a>
            </li>
            <li>
              <a
                href={appEnv.social.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="screen-reader-text">Instagram</span>
                <Image src="/social/instagram.svg" width={16} height={16} />
              </a>
            </li>
          </ul>
          <div className="footer-copyright">
            © {new Date().getFullYear()} {appEnv.general.name}, all rights
            reserved
          </div>
        </div>
      </div>
    </Footer__.Container>
  );
};
