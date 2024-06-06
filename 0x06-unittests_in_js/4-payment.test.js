const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
  it("check that Utils.calculateNumber was called once", function() {
    const spy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(100, 20);
    assert(spy.withArgs("SUM", 100, 20).calledOnce);
    spy.restore();
  });
});