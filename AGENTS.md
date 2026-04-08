# AGENTS.md

## Cursor Cloud specific instructions

### Overview
This is **tgju-scrapper**, a single-file Node.js script (`scrap.js`) that fetches live financial/commodity price data from the TGJU API (`call2.tgju.org`).

### Running
- `npm start` or `node scrap.js` — runs the scraper and prints JSON to stdout.
- Requires internet access to `call2.tgju.org`.
- No dev server, no build step, no lint, no test suite.

### Dependencies
- Only runtime dependency is `node-datetime`. Install with `npm install`.
- The script uses Node.js built-in `fetch()` (requires Node >= 18).

### Notes
- There is no test suite or linter configured. Validation is done by running the script and checking for valid JSON output.
- The external API may be geo-restricted or rate-limited; if the script fails with a network error, verify connectivity to `call2.tgju.org`.
