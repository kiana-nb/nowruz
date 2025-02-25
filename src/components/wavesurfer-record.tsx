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

class WaveSurferAudioRecord extends Component<MyProps> {
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
      height: 10,
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
      <div className={`${this?.props?.className} max-w-[200px] flex flex-row-reverse gap-2 items-center py-2 px-2 justify-center bg-blue-500 rounded-full`}>
        <div onClick={this.handlePlay}>
          {this.state.playing ? <Pause variant="Bold" size="16" color="white" /> : <Play variant="Bold" size="20" color="white" />}
        </div>

        <div dir="ltr" className="flex-grow overflow-hidden text-center" id={`${this.props.selector}`}></div>

        {this.props?.duration && (
          <div className="text-xs text-white font-light flex justify-start w-max h-full mt-0.5 items-center mr-3">
            <span>{this.props.duration}</span>
          </div>
        )}
      </div>
    );
  }
}

export default WaveSurferAudioRecord;
