import React from "react"
import PropTypes from "prop-types"

const Footer = ({ authorLink, githubLink }) => (
  <footer
    style={{
      marginTop: `1.45rem`,
    }}
  >
    ©{" "}
    <a href={authorLink} target="_blank" rel="noreferrer">
      chakrakan
    </a>{" "}
    {new Date().getFullYear()}, Find the source code
    {` `}
    <a href={githubLink} target="_blank" rel="noreferrer">
      here
    </a>
  </footer>
)

Footer.propTypes = {
  author: PropTypes.string,
  githubLink: PropTypes.string,
}

Footer.defaultProps = {
  authorLink: `https://github.com/chakrakan`,
  githubLink: `https://github.com/chakrakan/discordbot-servercheck`,
}

export default Footer
