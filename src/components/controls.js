import React from 'react';
import "./icons.css"


const Controls = function (props) {
  const { running, setRunning, index, setIndex, maxIndex, speed, setSpeed } = props;

  const play = () => {
    setRunning(!running);
  };
  const pause = () => {
    setRunning(false);
  };
  const step = (offset) => {
    // pause();
    setIndex(index => index + offset);
  };
  const stepPrev = () => {
    step(-1);
  };
  const stepNext = () => {
    step(1);
  };
  const stepStart = () => {
    setIndex(-1);
  };
  const stepEnd = () => {
    setIndex(maxIndex);
  };

  const atStart = index === -1;
  const atEnd = index === maxIndex;

  const backwardsButton = (
    <button type="button" className="btn btn-controls" onClick={stepStart} disabled={atStart} aria-disabled={atStart}>
      <i className="gg-play-backwards" />
    </button>
  );
  const prevButton = (
    <button type="button" className="btn btn-controls" onClick={stepPrev} disabled={atStart} aria-disabled={atStart}>
      <i className="gg-play-track-prev" />
    </button>
  );
  const playButton = (
    <button type="button" className="btn btn-controls" onClick={play} disabled={maxIndex === -1} aria-disabled={maxIndex === -1}>
      {running ? <i className="gg-play-pause" /> : <i className="gg-play-button" />}
    </button>
  );
  const nextButton = (
    <button type="button" className="btn btn-controls" onClick={stepNext} disabled={atEnd} aria-disabled={atEnd}>
      <i className="gg-play-track-next" />
    </button>
  );
  const forwardsButton = (
    <button type="button" className="btn btn-controls" onClick={stepEnd} disabled={atEnd} aria-disabled={atEnd}>
      <i className="gg-play-forwards" />
    </button>
  );

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };


  return (
    <div className="controls">
      <div className="btn-group" role="group" aria-label="tiling controls">
        {backwardsButton}
        {prevButton}
        {playButton}
        {nextButton}
        {forwardsButton}
      </div>
      <div className="speed-control">
        <small className="text-muted">slow</small>
        <input type="range" className="slider" min="1" max="15" step="0.5" value={speed} onChange={handleSpeedChange}/>
        <small className="text-muted">fast</small>
      </div>
    </div>
  );
}

export default Controls;
