import { useRef } from "react";
import { useSelector } from "react-redux";

const FileExport = ({ children, onFileRead }) => {
  const inputRef = useRef(null);
  const cells = useSelector((state) => state.cells);

  const handleExport = () => {
    var output = "";
    cells.forEach((row) => {
      output += `${
        row.results[row.selectedResultIndex]?.question || row.value
      }\n`;
    });
    const blob = new Blob([output]);
    const fileDownloadUrl = URL.createObjectURL(blob);
    inputRef.current.href = fileDownloadUrl
    inputRef.current.click()
    
  };
  return (
    <div onClick={handleExport}>
      {children}
      <a
        style={{ display: "none" }}
        href="www."
        ref={inputRef}
        download
      >
      </a>
    </div>
  );
};

export default FileExport;
