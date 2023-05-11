import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category = "default category") => {
    const eventTracker = (action = "default action", label = "default label") => {
      ReactGA.event({category, action, label});
    }
    return eventTracker;
  }
  export default useAnalyticsEventTracker;