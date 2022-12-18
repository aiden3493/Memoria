import dynamic from "next/dynamic";
import Image from "next/image";

const MaximizeToggleButton = dynamic(
  () => import("./Buttons/MaximizeToggleButton"),
  {
    ssr: false,
  }
);
const MinimizeButton = dynamic(() => import("./Buttons/MinimizeButton"), {
  ssr: false,
});
const CloseButton = dynamic(() => import("./Buttons/CloseButton"), {
  ssr: false,
});

const TitleBar: React.FC = () => {
  return (
    <div
      data-tauri-drag-region
      className="flex h-[65px] max-h-[65px] w-full items-center justify-between rounded-lg border-[3px] border-black px-2"
    >
      <div className="flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-md transition-all hover:bg-gray-200">
        <Image src="/icon.png" width={512} height={512} alt="Memoria" />
      </div>
      <div className="flex items-center justify-center space-x-1">
        <MinimizeButton />
        <MaximizeToggleButton />
        <CloseButton />
      </div>
    </div>
  );
};

export default TitleBar;
