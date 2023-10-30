const texSVG = require("texsvg")

const getConvertLatexToSVG = async (req, res) => {
    try {
        const latexEquation = decodeURIComponent(req.params.latexEquation);
        const svg = await texSVG(latexEquation);
        res.set('Content-Type', 'image/svg+xml');
        res.set('Content-Length', svg.length);
        res.set('Content-Disposition', 'inline');
        res.send(svg);

    } catch (err) {
        res.status(404);
    }
}

module.exports = getConvertLatexToSVG;
