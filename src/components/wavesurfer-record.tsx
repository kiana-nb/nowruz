/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import IconPause from "@/icons/pause";
import IconPlay from "@/icons/play";
import { Component } from "react";
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
      progressColor: "#4385DB",
      url: this.props.url,
      barHeight: 5,
      hideScrollbar: true,
      waveColor: "#C1C1C1",
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
        progressColor: "#4385DB",
        url: this.props.url,
        barHeight: 2,
        hideScrollbar: true,
        waveColor: "#4385DB",
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
      <div className={`${this?.props?.className} flex flex-row gap-2 items-center justify-center`}>
        <div
          onClick={this.handlePlay}
          className="w-[56px] h-[46px] min-w-[56px] rounded-[20px] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]
 bprder-[3px] border-[#C1C1C1] bg-white flex justify-center items-center text-[#FAC821]"
        >
          {this.state.playing ? <IconPause/> : <IconPlay/>}
        </div>

        <div dir="ltr" className="flex-grow overflow-hidden text-center" id={`${this.props.selector}`}></div>

        {this.props?.duration && (
          <div className="text-xs hidden text-white font-light justify-start w-max h-full mt-0.5 items-center mr-3">
            <span>{this.props.duration}</span>
          </div>
        )}
      </div>
    );
  }
}

export default WaveSurferAudioRecord;
