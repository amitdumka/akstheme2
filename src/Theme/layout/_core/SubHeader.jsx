import React, { createContext, useState, useContext } from "react";

const SubheaderContext = createContext();
export function useSubheader() {
    return useContext(SubheaderContext);
  }

export  class SubheaderProvider extends React.Component {
    constructor(props){
        super(props);
        this.state={title: '', breadcrumbs:[]};
    }
    render() {
        //const value = { title, setTitle, breadcrumbs, setBreadcrumbs };
        return (
            <SubheaderContext.Provider value={this}>
            {this.props.children}
          </SubheaderContext.Provider>
        )
    }
}


export function getBreadcrumbsAndTitle(menuId, pathName) {
    const result = {
      breadcrumbs: [],
      title: "",
    };
  
    const menu = document.getElementById(menuId);
    if (!menu) {
      return result;
    }
  
    const activeLinksArray = Array.from(
      menu.getElementsByClassName("active") || []
    );
    const activeLinks = activeLinksArray.filter((el) => el.tagName === "A");
    if (!activeLinks) {
      return result;
    }
  
    activeLinks.forEach((link) => {
      const titleSpans = link.getElementsByClassName("menu-text");
      if (titleSpans) {
        const titleSpan = Array.from(titleSpans).find(
          (t) => t.innerHTML && t.innerHTML.trim().length > 0
        );
        if (titleSpan) {
          result.breadcrumbs.push({
            pathname: link.pathname.replace(process.env.PUBLIC_URL, ""),
            title: titleSpan.innerHTML,
          });
        }
      }
    });
    result.title = getTitle(result.breadcrumbs, pathName);
    return result;
  }
  
  export function getTitle(breadCrumbs, pathname) {
    if (!breadCrumbs || !pathname) {
      return "";
    }
  
    const length = breadCrumbs.length;
    if (!length) {
      return "";
    }
  
    return breadCrumbs[length - 1].title;
  }
  