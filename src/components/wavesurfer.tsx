/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Pause, Play } from "iconsax-react";
import React, { Component } from "react";
import WaveSurfer from "wavesurfer.js";

type MyProps = {
  url: any;
  theme?: string;
  selector: string;
  duration?: string;
  className?: string;
};

class WaveSurferAudio extends Component<MyProps> {
  waveform: any;
  state = {
    playing: false,
  };

  componentDidMount() {
    this.waveform?.destroy();

    this.waveform = WaveSurfer.create({
      container: `#${this.props.selector}`,
      barWidth: 2,
      cursorWidth: 0,
      backend: "WebAudio",
      height: 20,
      progressColor: "#3f6212",
      url: this.props.url,
      barHeight: 5,
      hideScrollbar: true,
      waveColor: "#ACBEC6",
      minPxPerSec: 20,
      normalize: true,
      barGap: 3,
    });

    this.waveform.on("finish", function () {});
  }
  componentDidUpdate(prevProps: any) {
    if (prevProps.url !== this.props.url) {
      this.waveform.destroy();
      this.waveform = WaveSurfer.create({
        container: `#${this.props.selector}`,
        barWidth: 2,
        cursorWidth: 0,
        backend: "WebAudio",
        height: 40,
        progressColor: "#3b82f6",
        url: this.props.url,
        barHeight: 2,
        hideScrollbar: true,
        waveColor: "#3b82f6",
        minPxPerSec: 20,
        normalize: true,
        barGap: 3,
      });

      this.waveform.on("finish", function () {});
    }
    this.waveform.on("finish", () => {
      this.setState({ playing: false });
    });
  }

  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };

  render() {
    return (
      <div className={` ${this?.props?.className} bg-blue-50 rounded-3xl w-[200px] flex flex-col items-center p-2 gap-1 justify-center`}>
        <div className="flex items-center w-full flex-row-reverse">
          <div
            onClick={this.handlePlay}
            className={`flex justify-center cursor-pointer z-10 items-center bg-[#3b82f6] shadow size-10 min-w-10 rounded-full`}
          >
            {this.state.playing ? <Pause variant="Bold" size="20" color="white"/> :<Play variant="Bold" size="24" color="white"/>}
          </div>

          <div dir="ltr" className="flex-grow -ml-2 overflow-hidden text-center" id={`${this.props.selector}`}></div>
        </div>

        {this.props?.duration && (
          <div className="text-xs ml-28 w-full -mt-1 flex justify-end text-gray-700/50">
            <span>{this.props.duration}</span>
          </div>
        )}
      </div>
    );
  }
}

export default WaveSurferAudio;
