import { appWindow } from "@tauri-apps/api/window";
import CloseButtonIcon from "../icons/CloseButtonIcon";

const CloseButton: React.FC = () => {
  const onClick = async () => {
    await appWindow.close();
  };

  return (
    <div
      onClick={onClick}
      className="flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-md border-[3px] border-black transition-all hover:bg-gray-200"
    >
      <CloseButtonIcon />
    </div>
  );
};

export default CloseButton;
