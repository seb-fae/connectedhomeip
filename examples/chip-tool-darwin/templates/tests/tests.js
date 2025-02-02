/*
 *
 *    Copyright (c) 2021 Project CHIP Authors
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

const testPath  = '../../../../src/app/tests/suites/';
const TestSuite = require(testPath + 'tests.js');

function getManualTests()
{
  return [];
}

// clang-format off

function getTests() {

  let tests = TestSuite.getTests();

  // TODO: This test needs FindCommissionable
  tests.disable('Test_TC_SC_4_2');

  // TestClusterComplexTypes requires representing nullable optionals in ways
  // that can differentiate missing and null, which Darwin can't right now.
  tests.disable('TestClusterComplexTypes');

  // TODO: TestEvents not supported in the codegen yet.
  tests.disable('TestEvents');

  // TODO: TestDiscovery needs FindCommissionable
  tests.disable('TestDiscovery');

  // TODO: TestConfigVariables not supported properly in codegen yet.
  tests.disable('TestConfigVariables');

  // TODO: TestSystemCommands needs codegen changes or changes to the system
  // command implementation.
  tests.disable('TestSystemCommands');

  // TODO: TestGroupMessaging does not work on Darwin for now.
  tests.disable('TestGroupMessaging');

  return tests;
}

//
// Module exports
//
exports.getTests       = getTests;
exports.getManualTests = getManualTests;
