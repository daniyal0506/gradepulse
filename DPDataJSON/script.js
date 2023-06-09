const fs = require("fs");

// Read the JSON data from file
fs.readFile("public/DPDataJSON/Summer2022.json", (err, data) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    // Create an object to store the departments and their courses
    const departments = {};

    // Iterate over each course in the data
    jsonData.forEach((course) => {
      const deptName = course.DEPTNAME;

      // Create a new department entry if it doesn't exist
      if (!departments[deptName]) {
        departments[deptName] = [];
      }

      // Add the course to the department's list of courses
      departments[deptName].push(course);
    });

    // Convert the departments object to JSON format
    const outputJSON = JSON.stringify(departments, null, 4);

    // Write the JSON output to a file
    fs.writeFile("public/DPDataJSON/Summer2022DEP.json", outputJSON, (err) => {
      if (err) {
        console.error("Error writing JSON file:", err);
        return;
      }
      console.log("Output JSON file created successfully!");
    });
  } catch (err) {
    console.error("Error parsing JSON:", err);
  }
});
