import { VisibilityFilters } from "../actions";
import React from "react";
import FilterLink from "../containers/FilterLink";

// presentational comp.
// render several filter links (3, 1 for each visibilty Filter type) -> import
// FilterLink (filter prop.), each will hve child text component desc. filter type.

const Footer = () => {
  return (
    <div>
      Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>{" "}
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>{" "}
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </div>
  );
};

export default Footer;
