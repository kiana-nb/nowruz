"use client";

import VectorFish from "@/vectors/fish";
import { useEffect, useRef, ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface ModalProps {
  children: ReactNode;
}

export const FinishModal = ({ children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <div onClick={() => setIsModalOpen(true)}>{children}</div>
      {createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                ref={modalRef}
                className="relative flex h-[491px] w-[335px] flex-col items-center justify-center rounded-[28px] border border-[#F5772D] bg-white px-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="absolute -top-12 w-fit">
                  <VectorFish />
                </div>
                <div className="flex h-full flex-col items-center justify-center gap-8">
                  <div>
                    <h2 className="text-center text-base font-bold text-[#15509D]">آفرین</h2>
                    <p className="text-center text-base font-medium text-[#6A6A6A]">فردا منتظرت هستیم</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-center text-sm font-medium text-[#6A6A6A]">آخرین نشان های کسب شده</p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
                      <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
                      <div className="h-10 w-10 rounded-full border-b-2 bg-[#AAD59F]"></div>
                      <div className="h-10 w-10 rounded-full border-b-2 bg-[#F26C63]"></div>
                    </div>
                    <div className="rounded-full bg-[#FDD849] px-3 py-1.5 text-xs text-center">گزارش عملکرد</div>
                  </div>
                </div>
                <div className="mb-3 flex w-full items-center gap-2">
                  <Link href="/overview" className="w-full rounded-full bg-[#F5772D] py-3 px-4 whitespace-nowrap text-sm font-normal text-white">
                    تسک های انجام شده
                  </Link>
                  <button className="w-full rounded-full bg-[#4385DB] py-3 text-sm font-normal text-white">
                    صفحه اصلی
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
