/**
 * Copyright (c) 2017 Kinvey Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

const soap = require("./soap-client");
const transformers = require("./transformers");

/* This module contains the handlers for each flex data method.  Each handler:
 * 1) Makes a request to an external service via a client
 * 2) Transforms the result, if necessary
 * 3) Returns the result via the completion handler
 */

function getAllHCPCSCodes(context, complete, modules) {
  return complete()
    .setBody([{ _id: 1, name: "Hello World" }])
    .ok()
    .next();
}

function getOneHCPCSCode(context, complete, modules) {
  return complete()
    .setBody({ _id: 1, name: "Hello world" })
    .ok()
    .next();
}

function countHCPCSCodes(context, complete) {
  soap.getHCPCS(null, (err, result) => {
    if (err) {
      return complete()
        .setBody(err)
        .runtimeError()
        .done();
    }
    return complete()
      .setBody({ count: 1 })
      .ok()
      .next();
  });
}

exports.getAllHCPCSCodes = getAllHCPCSCodes;
exports.getOneHCPCSCode = getOneHCPCSCode;
exports.countHCPCSCodes = countHCPCSCodes;
