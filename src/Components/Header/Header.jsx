import React from "react";
import styled from "styled-components";
import Button from "../button";
const menuLinks = [
  {
    url: "/#",
    title: "Home",
  },
  {
    url: "/#",
    title: "Blog",
  },
  {
    url: "/#",
    title: "Contact",
  },
];
const HeaderStyles = styled.div`
  display: flex;
  .header-nav-left {
    display: flex;
    text-decoration: none;
  }
  .logo {
    display: block;
    max-width: 50px;
  }
  .header-menu {
    display: flex;
    align-items: center;
  }
  .menu {
    display: flex;
    gap: 20px;
    margin-left: 40px;
    list-style: none;
    justify-content: center;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  .search {
    margin-left: auto;
    padding: 15px 25px;
    border: 1px solid #cccc;
    border-radius: 8px;
    width: 100%;
    width: 320px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .search-input {
    flex: 1;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 25px;
  }
  .header-button {
    margin-left: 20px;
    width: 200px;
    height: 50px;
  }
`;
const Header = () => {
  return (
    <HeaderStyles>
      <div className="header-nav-left">
        <a href="/" className="header-logo">
          <img className="logo" srcSet="/logo.png 6x" alt="monkey-blogging" />
        </a>
        <div className="header-menu">
          <ul className="menu">
            {menuLinks.map((item) => {
              return (
                <li className="menu-item">
                  <a href={`${item.url}`} className="menu-link">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Search posts...."
        />
        <span className="search-icon">
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="7.66669"
              cy="7.05161"
              rx="6.66669"
              ry="6.05161"
              stroke="#999999"
              strokeWidth="1.5"
            />
            <path
              d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
              stroke="#999999"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
              stroke="#999999"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
      <Button className="header-button">Sign Up</Button>
    </HeaderStyles>
  );
};

export default Header;
