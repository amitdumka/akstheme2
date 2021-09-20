import React, { useMemo } from "react";
import objectPath from "object-path";
import { useHtmlClassService } from "../../_core/Layout";
import { Topbar } from "./Topbar";
import { HeaderMenuWrapper } from "./header-menu/HeaderMenuWrapper";
import { AnimateLoading } from "../../../_partials/controls";

//import React, { Component, PropTypes } from "react";

export class HeaderUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerClasses: null,
      headerAttributes: null,
      headerContainerClasses: null,
      menuHeaderDisplay: null,
    };
    this.uiService = useHtmlClassService();
  }

  componentWillMount() {
    this.setState({
      headerClasses: uiService.getClasses("header", true),
      headerAttributes: uiService.getAttributes("header"),
      headerContainerClasses: uiService.getClasses("header_container", true),
      menuHeaderDisplay: objectPath.get(
        uiService.config,
        "header.menu.self.display"
      ),
    });
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        {/*begin::Header*/}
        <div
          className={`header ${this.state.headerClasses}`}
          id="kt_header"
          {...this.state.headerAttributes}
        >
          {/*begin::Container*/}
          <div
            className={` ${this.state.headerContainerClasses} d-flex align-items-stretch justify-content-between`}
          >
            <AnimateLoading />
            {/*begin::Header Menu Wrapper*/}
            {this.state.menuHeaderDisplay && <HeaderMenuWrapper />}
            {!this.state.menuHeaderDisplay && <div />}
            {/*end::Header Menu Wrapper*/}

            {/*begin::Topbar*/}
            <Topbar />
            {/*end::Topbar*/}
          </div>
          {/*end::Container*/}
        </div>
        {/*end::Header*/}
      </>
    );
  }
}

HeaderUI.propTypes = {
  headerClasses: string,
  headerAttributes: string,
  headerContainerClasses: string,
  menuHeaderDisplay: string,
};

export function Header() {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      headerClasses: uiService.getClasses("header", true),
      headerAttributes: uiService.getAttributes("header"),
      headerContainerClasses: uiService.getClasses("header_container", true),
      menuHeaderDisplay: objectPath.get(
        uiService.config,
        "header.menu.self.display"
      ),
    };
  }, [uiService]);

  return (
    <>
      {/*begin::Header*/}
      <div
        className={`header ${layoutProps.headerClasses}`}
        id="kt_header"
        {...layoutProps.headerAttributes}
      >
        {/*begin::Container*/}
        <div
          className={` ${layoutProps.headerContainerClasses} d-flex align-items-stretch justify-content-between`}
        >
          <AnimateLoading />
          {/*begin::Header Menu Wrapper*/}
          {layoutProps.menuHeaderDisplay && <HeaderMenuWrapper />}
          {!layoutProps.menuHeaderDisplay && <div />}
          {/*end::Header Menu Wrapper*/}

          {/*begin::Topbar*/}
          <Topbar />
          {/*end::Topbar*/}
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Header*/}
    </>
  );
}
