# GitBook PDF Generator(s)

Documentation is not finished yet.
Before the documentation is done, you may check the discussion at https://github.com/GitbookIO/gitbook/issues/1470 for ideas.

## Installation

1. `npm install -g gitbook-pdfgen`
2. Install wkhtmltopdf and add wkhtmltopdf to path.
3. Download the sample project at https://github.com/GitbookIO/gitbook/issues/1470
4. run `gitbook-pdfgen` at the project path, which contains book.json. The pdf generated is book_wk.pdf
5. run `gitbook-pdfgen --help` for help of the command line.
6. Modify the book.

## Configuration

* Do the configuration in book.json of the book.
* Check gen_pdf_wk_config_schema.json in the npm package for details. (Sorry I cannot pretty print the schema yet.)
* Check the sample project and wkhtmltopdf help for how to modify the TOC, header and footer.

## Known issues

* If a font-face is not used in the first page (usually README.md), the font will not be embedded correctly in the pdf.
  This is an issue with wkhtmltopdf.
  (Workaround: see the sample project to add some hidden text.)
* Will not work if the book summary is not in the same format as the sample project. (i.e. One part only, no multilanguage.)
* Cannot set a different margin in different pages, including cover.
  (Workaround: to add a real cover to your book, use PDFTK Builder.)
* Will not work if the book contains a book.js instead of book.json.