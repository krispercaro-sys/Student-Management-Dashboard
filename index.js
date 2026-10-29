import util from 'util';
import { getStudentsAPI, addStudentsAPI } from './api.js';

function printTestCase(label, data) {
  console.log(
    `${label} ${util.inspect(data, {
      colors: true,
      depth: null,
      compact: false
    })}`
  );
}

// Test Case 1
printTestCase('Initial DB State:', getStudentsAPI());

// Test Case 2
const newStudent = addStudentsAPI({
  firstName: 'Kahayag',
  lastName: 'kabuntagon',
  email: 'kahayag.kabuntagon@example.com'
});
printTestCase('Returned Saved Object:', newStudent);

// Test Case 3
printTestCase('Updated DB State:', getStudentsAPI());