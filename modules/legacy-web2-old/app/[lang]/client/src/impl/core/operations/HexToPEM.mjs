// Date: Sun, 14 Jan 2024
// Second Author: Ryan Laf
// Description:
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

import r from "jsrsasign";
import Operation from "../Operation.tsx";

/**
 * Hex to PEM operation
 */
class HexToPEM extends Operation {
  /**
   * HexToPEM constructor
   */
  constructor() {
    super();

    this.name = "Hex to PEM";
    this.module = "PublicKey";
    this.description =
      "Converts a hexadecimal DER (Distinguished Encoding Rules) string into PEM (Privacy Enhanced Mail) format.";
    this.infoURL = "https://wikipedia.org/wiki/Privacy-Enhanced_Mail";
    this.inputType = "string";
    this.outputType = "string";
    this.args = [
      {
        name: "Header string",
        type: "string",
        value: "CERTIFICATE",
      },
    ];
  }

  /**
   * @param {string} input
   * @param {Object[]} args
   * @returns {string}
   */
  run(input, args) {
    return r.KJUR.asn1.ASN1Util.getPEMStringFromHex(
      input.replace(/\s/g, ""),
      args[0],
    );
  }
}

export default HexToPEM;
