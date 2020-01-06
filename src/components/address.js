import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

const Address = ({ id, name, address, email, phoneNumber, website }) => (
  <div
    key={id}
    css={css`
      color: #fff;
    `}
  >
    <h4
      css={css`
        color: #fff;
        font-style: bold;
        margin: 1rem 0;
      `}
    >
      {name}
    </h4>
    <div
      css={css`
        display: flex;
        flex-direction: row;
      `}
    >
      <i
        css={css`
          margin-right: 1rem;
        `}
        className="fa fa-map-marker"
      />
      <address
        css={css`
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          font-style: normal;
          p {
            padding-bottom: 1rem;
          }
        `}
        dangerouslySetInnerHTML={{ __html: address }}
      />
    </div>
    {email && (
      <a
        href={`mailto:${email}`}
        css={css`
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 0;
          display: block;
        `}
      >
        <i
          css={css`
            margin-right: 1rem;
          `}
          className="fa fa-envelope"
        />
        <span>{email}</span>
      </a>
    )}
    {phoneNumber && (
      <a
        href={`tel:${phoneNumber}`}
        css={css`
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 0;
          display: block;
        `}
      >
        <i
          css={css`
            margin-right: 1rem;
          `}
          className="fa fa-phone"
        />
        <span>{phoneNumber}</span>
      </a>
    )}
    {website && (
      <a
        href={`${website}`}
        target="_blank"
        rel="noopener noreferrer"
        css={css`
          padding: 1rem 0;
          display: block;
        `}
      >
        <i
          css={css`
            margin-right: 1rem;
          `}
          className="fa fa-globe"
        />
        <span>{website}</span>
      </a>
    )}
  </div>
)

Address.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  phoneNumber: PropTypes.string,
  website: PropTypes.string,
}

export default Address
