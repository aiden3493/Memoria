import TextEditor from "./TextEditor";

const SideBar: React.FC = () => {
  return (
    <div className="relative flex max-h-full max-w-[300px] flex-1 flex-col items-center justify-center space-y-5 overflow-hidden rounded-lg border-[3px] border-black bg-white">
      <TextEditor />
      {/* </div> */}
    </div>
  );
};

export default SideBar;
