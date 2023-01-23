import { useRef } from "react";

const FileImport = ({ children, onFileRead }) => {
  const inputRef = useRef(null);
  const handleImport = () => {
    inputRef.current.click();
  };
  const onFileChange = (event) => {
    var file = event.target.files[0],
      read = new FileReader();

    read.readAsBinaryString(file);

    read.onloadend = function () {
      onFileRead(read.result)
      inputRef.current.value = "";
    };
  };
  return (
    <div onClick={handleImport}>
      {children}
      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        accept=".txt"
        onChange={onFileChange}
      />
    </div>
  );
};

export default FileImport;
