import React, { createContext, useContext } from "react";
import { HtmlClassService } from "./HTMLClassService";
import { getInitLayoutConfig } from "./LayoutConfig";


const LAYOUT_CONFIG_KEY =
  process.env.REACT_APP_LAYOUT_CONFIG_KEY || "LayoutConfig";

function getConfig() {
  const ls = localStorage.getItem(LAYOUT_CONFIG_KEY);
  if (ls) {
    try {
      return JSON.parse(ls);
    } catch (er) {
      console.error(er);
    }
  }
  return getInitLayoutConfig();
}

// Side effect
export function setLayoutConfig(config) {
  localStorage.setItem(LAYOUT_CONFIG_KEY, JSON.stringify(config));
  window.location.reload();
}

const HtmlClassServiceContext = createContext();
export const HtmlClassServiceConsumer = HtmlClassServiceContext.Consumer;
/**
 *
 *
 * @export
 * @returns Layout context from 'localStorage'
 */
export function useHtmlClassService() {
  return useContext(HtmlClassServiceContext);
}

export function withHtmlClassService(Component) {

  return (
    <div>

    </div>
  )
}

export class WithHtmlClassService extends React.Component {

  static displayName = `WithHtmlClassService(${this.Component.displayName ||
    this.Component.name})`;

  static contextType = HtmlClassServiceContext;

  render() {
    return <this.props.Component {...this.props} htmlClassService={this.context} />;
  }
}


export default class LayoutProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lc: [], hcs: null };

  }
  componentWillMount() {
    this.setState({ lc:getConfig() });

    const service = new HtmlClassService();
    service.setConfig(this.state.lc);
    this.setState({ hcs: service });
  }


  render() {
    //const lc = useMemo(getConfig, []);
    //const hcs = useMemo(() => {
    //const service = new HtmlClassService(); service.setConfig(lc); return service;  }, [lc]);
    return (
      <HtmlClassServiceContext.Provider value={this.state.hcs}>
        {this.props.children}
      </HtmlClassServiceContext.Provider>
    );
  }
}
