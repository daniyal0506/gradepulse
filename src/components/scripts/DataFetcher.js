export const fetchData = async (fileName) => {
  try {
    const sanitizedFileName = fileName.replace(/\s/g, ""); // Remove whitespace from the fileName
    const response = await fetch(`/GDDataJSON/${sanitizedFileName}.json`);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error retrieving data:", error);
    return null;
  }
};
