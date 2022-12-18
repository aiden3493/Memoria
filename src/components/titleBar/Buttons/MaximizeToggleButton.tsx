import { appWindow } from "@tauri-apps/api/window";
import { useEffect, useState } from "react";
import MaximizeToggleButtonIcon from "../icons/MaximizeToggleButtonIcon";

const MaximizeToggleButton: React.FC = () => {
  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  const onClick = async () => {
    await appWindow.toggleMaximize();
    setIsMaximized(await appWindow.isMaximized());
  };

  useEffect(() => {
    appWindow.onResized(async () => {
      setIsMaximized(await appWindow.isMaximized());
    });
  }, []);

  return (
    <div
      onClick={onClick}
      className="flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-md border-[3px] border-black transition-all hover:bg-gray-200"
    >
      <MaximizeToggleButtonIcon isMaximized={isMaximized} />
    </div>
  );
};

export default MaximizeToggleButton;
