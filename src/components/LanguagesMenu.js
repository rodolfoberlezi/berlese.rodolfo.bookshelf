import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

const LanguagesMenu = ({ title }) => {
  const { languages, originalPath } = useI18next();

  return (
    <header className="main-header">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {title}
        </Link>
      </h1>
      <ul className="languages">
        {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default LanguagesMenu;
