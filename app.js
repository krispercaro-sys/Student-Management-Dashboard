// app.js

import { getStudentsAPI, addStudentsAPI } from './api.js';

// Fields
let localStudent = [];

// DOM Selection
const studentForm = document.querySelector('#studentForm');
const studentTableBody = document.querySelector('#studentTableBody');

/**
 * Dynamically renders table rows or displays an empty state message
 * @param {Array} dataArray 
 */
const renderTable = (dataArray) => {
  studentTableBody.innerHTML = '';

  if (!dataArray || dataArray.length === 0) {
    studentTableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center;">No student records found.</td>
      </tr>
    `;
    return;
  }

  dataArray.forEach((student, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.email}</td>
    `;
    studentTableBody.appendChild(row);
  });
};

// Form submit event handler
studentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#firstName').value.trim();
  const lastName = document.querySelector('#lastName').value.trim();
  const email = document.querySelector('#email').value.trim();

  // Validate that all fields are provided
  if (!firstName || !lastName || !email) {
    alert('Please fill out all input fields!');
    return;
  }

  const studentData = { firstName, lastName, email };

  // Save student to mock database
  addStudentsAPI(studentData);

  // Update local array and re-render
  localStudent = getStudentsAPI();
  renderTable(localStudent);

  // Reset input fields
  studentForm.reset();
});

/**
 * Initializes the application
 */
const initApp = () => {
  localStudent = getStudentsAPI();
  renderTable(localStudent);
};

// Start application
initApp();