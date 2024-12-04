/** @format */

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const LogOutHandler = () => {
  const navigate = useNavigate();
  localStorage.clear();
  navigate("/");
};

const returnFullName = (item) => {
  if (item?.fullName) {
    return item.fullName;
  } else {
    return (item?.firstName || "") + " " + (item?.lastName || "");
  }
};

const debouncedSetQuery = (term, setQuery) => {
  clearTimeout(debouncedSetQuery.timeoutId);
  debouncedSetQuery.timeoutId = setTimeout(() => {
    setQuery(term);
  }, 500);
};

export { ScrollToTop, LogOutHandler, returnFullName, debouncedSetQuery };
