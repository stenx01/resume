const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Catch-all to serve index.html for SPA behavior (optional)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Use the PORT Railway provides
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
