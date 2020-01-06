import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"

import useLogo from "../hooks/use-logo"

const Header = ({ siteTitle }) => {
  const image = useLogo()
  return (
    <header>
      <div
        id="header-contact-details"
        css={css`
          background-color: #ee7810;
          display: flex;
          flex-flow: column nowrap;
          padding: 0.5rem;
          justify-content: space-between;
          color: #fff;

          @media (min-width: 600px) {
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-around;
          }
        `}
      >
        <span
          css={css`
            margin: 0.4rem 0;
            font-size: 1.2rem;

            @media (min-width: 600px) {
              font-size: 1rem;
            }
          `}
        >
          Sie haben Fragen?
        </span>
        <span
          css={css`
            margin: 0.4rem 0;
            a {
              text-decoration: none;
              color: #fff;
            }
            i {
              padding-right: 0.5rem;
            }
            :hover,
            :focus {
              cursor: pointer;
              text-decoration: underline;
            }
          `}
        >
          <i className="fas fa-phone-alt"></i>
          <a href="tel:07052930930">07052 930930</a>
        </span>
        <span
          css={css`
            margin: 0.4rem 0;
            a {
              text-decoration: none;
              color: #fff;
            }
            i {
              padding-right: 0.5rem;
            }
            :hover,
            :focus {
              cursor: pointer;
              text-decoration: underline;
            }
          `}
        >
          <i className="fas fa-envelope"></i>
          <a href="mailto:kontakt@praxis-geelhaar.de">
            kontakt@praxis-geelhaar.de
          </a>
        </span>
      </div>
      <div
        id="header-logo"
        css={css`
          padding: 0.5rem;
          margin: 1.5rem 0;
          max-width: 350px;
        `}
      >
        <Link to="/">
          <Image
            fluid={image}
            alt="Praxis Logo"
            style={{ minWidth: "100px" }}
          />
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
