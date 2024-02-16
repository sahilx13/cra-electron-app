const btn = document.getElementById("btn");
const filePathElement = document.getElementById("filePath");
const btn2 = document.getElementById("btn2");
const folderPathElement = document.getElementById("folderPath");
const folderFilesElement = document.getElementById("folderFiles");

btn.addEventListener("click", async () => {
  const filePath = await window.electronAPI.openFile();
  filePathElement.innerText = filePath;
});

btn2.addEventListener("click", async () => {
  const folderPath = await window.electronAPI.openFolder();
  folderPathElement.innerText = folderPath[0];
  folderFilesElement.innerText = folderPath[1];
});
