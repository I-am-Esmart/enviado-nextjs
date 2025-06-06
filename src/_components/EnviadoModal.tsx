import { libre, spaceGrotesk } from "@/utilities/customFonts";
import { LiaTimesSolid } from "react-icons/lia";
type EnviadoModalProps = {
  isEnviadoModalOpen: boolean;
  modalWidth?: number;
  onClose: () => void;
  children: React.ReactNode;
};

export default function EnviadoModal({
  isEnviadoModalOpen,
  onClose,
  modalWidth,
  children,
}: EnviadoModalProps) {
  // If the modal is not open, return null to avoid rendering anything
  if (!isEnviadoModalOpen) return null;

  return (
    <div className={`fixed z-50 inset-0 flex justify-center items-center`}>
      {/* Backdrop */}
      <div className="w-full absolute inset-0 bg-[#101010] opacity-75 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div
        className={`relative bg-white w-[${modalWidth}%] py-3 px-5 rounded-lg z-10`}
      >
        {/* <div className={`flex items-center justify-end`}>
          <span onClick={onClose} className="cursor-pointer">
            X
          </span>
        </div> */}

        <div className={`w-full flex justify-end`}>
          <button
            onClick={onClose}
            className={`${libre.className} bg-[#93002A] flex items-center gap-1 p-2 text-white`}
          >
            <span>Cancel</span>
            <LiaTimesSolid />
          </button>
        </div>

        <section>{children}</section>
      </div>
    </div>
  );
}
