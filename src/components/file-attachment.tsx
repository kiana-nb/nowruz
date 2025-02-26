"use client";
import { useModal } from "@/hooks/use-modal-hook";
import IconFileAdd from "@/icons/file-add";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { createPortal } from "react-dom";

export default function FileAttachment() {
  const { modalRef, isOpen, setIsOpen } = useModal<HTMLDivElement>();

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
                className="relative flex h-[300px] w-[335px] flex-col items-center justify-center rounded-[28px] border border-[#F5772D] bg-white px-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="p-3 max-w-[300px] flex gap-3 w-max items-center bg-[#FAC821] text-white text-sm font-semibold rounded-[20px] border-b-4 border-[#F19C25] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]
"
                  >
                    <span>ارسال تصویر</span>
                    <IconFileAdd />{" "}
                  </div>
                  <div
                    className="p-3 max-w-[300px] flex gap-3 w-max items-center bg-[#FAC821] text-white text-sm font-semibold rounded-[20px] border-b-4 border-[#F19C25] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]
"
                  >
                    <span>گرفتن تصویر</span>
                    <IconFileAdd />{" "}
                  </div>
                  <div
                    className="p-3 max-w-[300px] flex gap-3 w-max items-center bg-[#FAC821] text-white text-sm font-semibold rounded-[20px] border-b-4 border-[#F19C25] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]
"
                  >
                    <span> ارسال ویدیو</span>
                    <IconFileAdd />{" "}
                  </div>
                  <div
                    className="p-3 max-w-[300px] flex gap-3 w-max items-center bg-[#FAC821] text-white text-sm font-semibold rounded-[20px] border-b-4 border-[#F19C25] shadow-[inset_3px_3px_4px_0px_#FFFFFF26,inset_0px_-1px_4px_0px_#00000026]
"
                  >
                    <span> گرفتن ویدیو</span>
                    <IconFileAdd />{" "}
                  </div>
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
