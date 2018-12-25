import express from "express";
import path from "path";
import { config } from "./config";
import serveContent from "./renderers/server";
import data from "./store/testData";

const app = express();

app.use("/public", express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs");

app.get("/", async function(req, res) {
	const pageContent = await serveContent();
	res.render("index", { ...pageContent });
});

app.get("/data", function(req, res) {
	res.send(data);
});

app.listen(config.port, function() {
	console.log(`Server running at ${config.port}`);
});
