import React from "react";
import logo from "../../components/assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = ({ CartItem }) => {
  // Fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search' />
            <span>All</span>
          </div>

          <div className='icon f_flex width'>
            <Link to='/login'>
              <i className='fa fa-user icon-circle'></i>
            </Link>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem && CartItem.length ? CartItem.length : ""}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
