import Inferno from "inferno";
import Component from "inferno-component";

import "./style.scss";

const getHumanTime = time => {
  if (!time || time < 0) return;
  time = (time / 1000) >> 0;
  let seconds = time % 60;
  time = (time / 60) >> 0;
  let minutes = time % 60;
  time = (time / 60) >> 0;
  const hours = time % 24;
  const days = (time / 24) >> 0;
  return [
    days && `${days}d`,
    hours && `${hours}h`,
    minutes && `${minutes}m`,
    `${seconds}s`
  ]
    .filter(x => x)
    .join(" ");
};

const RELEASE = new Date("2019-01-07T23:00:00Z");

export default class Announcement extends Component {
  constructor(props) {
    super(props);
    this.state = { left: RELEASE - new Date() };
    // if (this.state.left > 0) setInterval(() => this.setState({ left: RELEASE - new Date() }), 333);
  }
  render() {
    return (
      <div className="Announcement">
        <div>
          Welcome to 2019, and happy new year! The{" "}
          <b>CSC January Monthly Pack</b> is out to reminisce about <b>2018</b>!{" "}
          <a href="https://www.youtube.com/watch?v=6UJSnXaokaA">
            Release video
          </a>{" "}
        </div>
        <div>
          The past is the past, and we shall look towards the future.{" "}
          <b>Redemption Arc</b> is out!{" "}
          <a href="https://www.youtube.com/watch?v=rzW4C9uQMv0">
            Release video
          </a>
        </div>
        <div>
          Looking for some... <b>CHARTS?</b> Here's 600 of them: the entire
          repertoire of charter extraordinaire: <b>Chezy</b>.{" "}
          <a href="https://www.youtube.com/watch?v=VDcxcRTH954">
            Release video
          </a>
        </div>
        <div>
          <a href="https://fightthe.pw/2019/01/10/1-year-of-chorus.html">
            1 year of chorus: a history of looking for charts
          </a>
          &nbsp;-&nbsp;
          <a href="https://www.reddit.com/r/CloneHero/comments/aeo35n/1_year_of_chorus_a_history_of_looking_for_charts/">
            Discuss on reddit
          </a>
        </div>
      </div>
    );
  }
}
