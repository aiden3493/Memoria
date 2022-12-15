import TextEditor from "./TextEditor";

const SideBar: React.FC = () => {
  return (
    <div className="max-w-[300px] flex-1 overflow-auto rounded-lg border-[3px] border-black bg-white p-5 ">
      <TextEditor />
    </div>
  );
};

export default SideBar;
