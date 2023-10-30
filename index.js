const express = require("express")
const texSVG = require("texsvg")

const app = express()

const port = 3003

app.get("/", async (_, res) => {
  const latexEquation = decodeURIComponent("CH_%7B2%7D%20OH%20%2B%20%5Cfrac%7B3%7D%7B2%7D%20%20O_%7B2%7D%20%20%28g%29%20%20%5Clongrightarrow%20CO_%7B2%7D%20%28g%29%20%20%2B%20H_%7B2%7D%20O%20%20%20----------%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5CDelta%20H%C2%B0%20%3D-762%20kJ%2Fmol");
  const svg = await texSVG(latexEquation);
  res.set('Content-Type', 'image/svg+xml');
  res.set('Content-Length', svg.length);
  res.set('Content-Disposition', 'inline');
  res.send(svg);
})


app.get("/:latexEquation", async (req, res) => {
  const latexEquation = decodeURIComponent(req.params.latexEquation);

  const svg = await texSVG(latexEquation);
  res.set('Content-Type', 'image/svg+xml');
  res.set('Content-Length', svg.length);
  res.set('Content-Disposition', 'inline');
  res.send(svg);
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
