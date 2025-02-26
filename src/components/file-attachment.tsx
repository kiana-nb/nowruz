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
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { JSX } from "react";
import { createPortal } from "react-dom";

type ButtonProps = {
  onClick: () => void;
  icon?: React.ComponentType;
  label: string;
};

const Button = ({ onClick, icon: Icon, label }: ButtonProps) => (
  <button
    onClick={onClick}
    className="p-3 max-w-[300px] flex gap-2 w-max items-center bg-[#FAC821] text-white text-sm font-semibold rounded-[20px] border-b-4 border-[#F19C25] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]"
  >
    <span>{label}</span>
    {Icon && <Icon />}
  </button>
);

export default function FileAttachment() {
  const { modalRef, isOpen, setIsOpen } = useModal<HTMLDivElement>();
  const { inputRef, openFileDialog, handleFileChange, files, setFiles } = useUploadFile();
  const { capturedImage, captureImage } = useCaptureImage();
  const { capturedVideo, captureVideo } = useCaptureVideo();

  return (
    <>
      <Button onClick={() => setIsOpen(true)} icon={IconFileAdd} label="ارسال فایل" />
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
                className="relative flex min-h-[300px] py-16 pb-8 w-[335px] flex-col items-center justify-center rounded-[25px] border-y-4 border-[#F5772D] bg-white p-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="size-[30px] absolute top-4 left-4 min-w-[30px] bg-[#FF450D] rounded-[10px] border-b-[3px] flex justify-center items-center border-[#B11E1E] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]"
                >
                  <IconCross />
                </button>

                <div className="grid grid-cols-2 gap-4 pb-4">
                  <Button onClick={openFileDialog} icon={IconImage} label="ارسال تصویر" />
                  <input type="file" ref={inputRef} accept="image/*,video/*" multiple className="hidden" onChange={handleFileChange} />
                  <Button onClick={captureImage} icon={IconCamera} label="گرفتن تصویر" />
                  <Button onClick={openFileDialog} icon={IconVideo} label="ارسال ویدیو" />
                  <Button onClick={captureVideo} icon={IconFilmCamera} label="گرفتن ویدیو" />
                </div>

                <FileList files={files} />

                {capturedImage && <Image src={capturedImage} width={100} height={100} alt="Captured" className="mt-4 rounded-md" />}
                {capturedVideo && <video src={capturedVideo} controls className="mt-4 rounded-md"></video>}

                {files.length > 0 && (
                  <button
                    onClick={() => {setFiles([]); setIsOpen(false)}}
                    className="p-3 px-6 mt-6 max-w-[300px] flex gap-2 w-max items-center bg-[#FAC821] text-white text-sm font-semibold rounded-[20px] border-b-4 border-[#F19C25] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]"
                  >
                    <span>ارسال فایل‌ها</span>
                  </button>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

type FileItemProps = {
  file: { type: string; previewUrl?: string | null; file: File };
};

type FileListProps = {
  files: { type: string; previewUrl?: string | null; file: File }[];
};

function FileList({ files }: FileListProps) {
  if (files.length === 0) return null;

  return (
    <div className="mt-4 max-h-[300px] overflow-y-auto w-full border rounded-md">
      {files.map((file, index) => (
        <FileItem key={index} file={file} />
      ))}
    </div>
  );
}

const fileRenderers: Record<string, (file: FileItemProps["file"]) => JSX.Element> = {
  image: (file) => <ImageFile src={file.previewUrl || ""} alt="Uploaded Image" />,
  video: (file) => <VideoFile src={file.previewUrl || ""} />,
  default: (file) => <FileLink file={file.file} />,
};

function FileItem({ file }: FileItemProps) {
  const Renderer = fileRenderers[file.type] || fileRenderers.default;

  return (
    <div className="flex items-center p-2 gap-2 border-b pb-2 mb-2 last:border-none">
      <Renderer {...file} />
      <span className="text-sm truncate self-start mt-1">{file.file.name}</span>
    </div>
  );
}

function ImageFile({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} width={50} height={50} alt={alt} className="rounded-md aspect-square object-cover" />;
}

function VideoFile({ src }: { src: string }) {
  return <video src={src} controls width={80} className="rounded-md" />;
}

function FileLink({ file }: { file: File }) {
  return (
    <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
      {file.name}
    </a>
  );
}
