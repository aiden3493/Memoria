import { appWindow } from "@tauri-apps/api/window";
import MinimizeButtonIcon from "../icons/MinimizeButtonIcon";

const MinimizeButton: React.FC = () => {
  const onClick = async () => {
    await appWindow.minimize();
  };

  return (
    <div
      onClick={onClick}
      className="flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-md border-[3px] border-black transition-all hover:bg-gray-200"
    >
      <MinimizeButtonIcon />
    </div>
  );
};

export default MinimizeButton;
