import TextEditor from "./TextEditor";

const SideBar: React.FC = () => {
  return (
    <div className="max-w-[300px] flex-1 overflow-auto rounded-lg bg-gray-400 p-5 ">
      <TextEditor />
    </div>
  );
};

export default SideBar;
