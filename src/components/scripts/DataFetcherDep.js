export const fetchDataDep = async (fileName) => {
  try {
    const sanitizedFileName = fileName.replace(/\s/g, ""); // Remove whitespace from the fileName
    const response = await fetch(`/DPDataJSON/${sanitizedFileName}DEP.json`);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error retrieving data:", error);
    return null;
  }
};
