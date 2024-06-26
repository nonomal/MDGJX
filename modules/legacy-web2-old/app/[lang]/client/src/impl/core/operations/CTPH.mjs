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

import Operation from "../Operation.tsx";
import ctphjs from "ctph.js";

/**
 * CTPH operation
 */
class CTPH extends Operation {
  /**
   * CTPH constructor
   */
  constructor() {
    super();

    this.name = "CTPH";
    this.module = "Crypto";
    this.description =
      "Context Triggered Piecewise Hashing, also called Fuzzy Hashing, can match inputs that have homologies. Such inputs have sequences of identical bytes in the same order, although bytes in between these sequences may be different in both content and length.<br><br>CTPH was originally based on the work of Dr. Andrew Tridgell and a spam email detector called SpamSum. This method was adapted by Jesse Kornblum and published at the DFRWS conference in 2006 in a paper 'Identifying Almost Identical Files Using Context Triggered Piecewise Hashing'.";
    this.infoURL =
      "https://forensicswiki.xyz/wiki/index.php?title=Context_Triggered_Piecewise_Hashing";
    this.inputType = "string";
    this.outputType = "string";
    this.args = [];
  }

  /**
   * @param {string} input
   * @param {Object[]} args
   * @returns {string}
   */
  run(input, args) {
    return ctphjs.digest(input);
  }
}

export default CTPH;
