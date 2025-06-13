import { libre, spaceGrotesk } from "@/utilities/customFonts";
import { LiaTimesSolid } from "react-icons/lia";
type EnviadoModalProps = {
  isEnviadoModalOpen: boolean;
  modalMdWidth?: number;
  modalWidth?: number;
  onClose: () => void;
  children: React.ReactNode;
};

export default function EnviadoModal({
  isEnviadoModalOpen,
  onClose,
  modalMdWidth,
  modalWidth,
  children,
}: EnviadoModalProps) {
  // If the modal is not open, return null to avoid rendering anything
  if (!isEnviadoModalOpen) return null;

  return (
    <div className={`fixed z-50 inset-0 flex justify-center items-center`}>
      <div className="w-full absolute inset-0 bg-[#101010] opacity-75 backdrop-blur-sm"></div>

      <div
        className={`relative bg-white w-[${modalWidth}%] md:w-[${modalMdWidth}%] py-3 px-5 rounded-lg z-10`}
      >
        <div className={`w-full relative z-50 flex justify-end`}>
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
