const fsp = require('fs-promise');
const jsonschema = require('jsonschema');
const jsonSchemaDefaults = require('json-schema-defaults');
const merge = require('merge');
const path = require('path');

/**
    Load book.json or a specified file, and validate the content.
    And return with mixing with the default values.

    @param {filename} The file containing the Json object
    @return {Object}
*/
function loadConfig(filename = 'book.json') {
  return Promise.all([
    fsp.readJson(filename),
    fsp.readJson(path.join(__dirname, 'gen_pdf_wk_config_schema.json'))
  ])
  .then (([book, schema]) => {
    new jsonschema.Validator().validate(book, schema, {throwError: true});
    return merge.recursive(true, jsonSchemaDefaults(schema), book);
  });
}

module.exports.loadConfig = loadConfig;
