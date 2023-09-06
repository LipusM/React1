const c = console.log.bind(document);

import "./style.scss";
import episodes from "./data";

const Episode = ({ num, title, guest }) => {
  return (
    <>
      {episodes.map((episode) => (
        <div key={episode.num} className="episodes-list">
          <div className="episode">
            <div className="episode__num">{episode.num}</div>
            <div className="episode__body">
              <div className="episode__title">{episode.title}</div>
              <div className="episode__guest">host: {episode.guest}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Episode;
