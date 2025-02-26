"use client";
import { useCaptureImage } from "@/hooks/use-capture-image";
import { useCaptureVideo } from "@/hooks/use-capture-video";
import { useModal } from "@/hooks/use-modal-hook";
import { useUploadFile } from "@/hooks/use-upload-file";
import IconCamera from "@/icons/camera";
import IconCross from "@/icons/cross";
import IconFileAdd from "@/icons/file-add";
import IconFilmCamera from "@/icons/film-camera";
import IconImage from "@/icons/image";
import IconVideo from "@/icons/video";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { createPortal } from "react-dom";

export default function FileAttachment() {
  const { modalRef, isOpen, setIsOpen } = useModal<HTMLDivElement>();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // File Upload Hooks
  const { inputRef: imageInputRef, openFileDialog: uploadImage } = useUploadFile("image/*", (file) => setSelectedImage(URL.createObjectURL(file)));

  const { inputRef: videoInputRef, openFileDialog: uploadVideo } = useUploadFile("video/*", (file) => setSelectedVideo(URL.createObjectURL(file)));

  // Capture Image Hook
  const { capturedImage, captureImage } = useCaptureImage();

  // Capture Video Hook
  const { capturedVideo, captureVideo } = useCaptureVideo();

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="p-3 max-w-[300px] flex gap-3 w-max items-center bg-[#FAC821] text-white text-sm font-semibold rounded-[20px] border-b-4 border-[#F19C25] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]
"
      >
        <span>رسال فایل</span>
        <IconFileAdd />{" "}
      </div>
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                ref={modalRef}
                className="relative flex h-[300px] w-[335px] flex-col items-center justify-center rounded-[25px] border-y-4 border-[#F5772D] bg-white px-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div
                  onClick={() => setIsOpen(false)}
                  className="size-[30px] absolute top-4 left-4 min-w-[30px] bg-[#FF450D] rounded-[10px] border-b-[3px] flex justify-center items-center border-[#B11E1E] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]"
                >
                  <IconCross />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    onClick={uploadImage}
                    className="p-3 max-w-[300px] flex gap-2 w-max items-center bg-[#FAC821] text-white text-sm font-semibold rounded-[20px] border-b-4 border-[#F19C25] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]
"
                  >
                    <span>ارسال تصویر</span>
                    <IconImage />{" "}
                  </div>
                  <input type="file" ref={imageInputRef} accept="image/*" className="hidden" />

                  <div
                    className="p-3 max-w-[300px] flex gap-2 w-max items-center bg-[#FAC821] text-white text-sm font-semibold rounded-[20px] border-b-4 border-[#F19C25] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]
"
                    onClick={captureImage}
                  >
                    <span>گرفتن تصویر</span>
                    <IconCamera />{" "}
                  </div>
                  <div
                    onClick={uploadVideo}
                    className="p-3 max-w-[300px] flex gap-2 w-max items-center bg-[#FAC821] text-white text-sm font-semibold rounded-[20px] border-b-4 border-[#F19C25] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]
"
                  >
                    <span> ارسال ویدیو</span>
                    <IconVideo />{" "}
                  </div>
                  <input type="file" ref={videoInputRef} accept="video/*" className="hidden" />

                  <div
                    className="p-3 max-w-[300px] flex gap-2 w-max items-center bg-[#FAC821] text-white text-sm font-semibold rounded-[20px] border-b-4 border-[#F19C25] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]
"
                    onClick={captureVideo}
                  >
                    <span> گرفتن ویدیو</span>
                    <IconFilmCamera />{" "}
                  </div>
                </div>

                <div>
                  {selectedImage && <Image src={selectedImage} alt="Uploaded" className="mt-4 rounded-md" />}

                  {/* Display Captured Image */}
                  {capturedImage && <Image src={capturedImage} alt="Captured" className="mt-4 rounded-md" />}

                  {/* Display Selected Video */}
                  {selectedVideo && <video src={selectedVideo} controls className="mt-4 rounded-md"></video>}

                  {/* Display Captured Video */}
                  {capturedVideo && <video src={capturedVideo} controls className="mt-4 rounded-md"></video>}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
