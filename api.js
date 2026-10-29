// Declare as an empty array for Test Case 1
export const mockStudentDb = [];

/*
// Previously populated data:
export const mockStudentDb = [
  {
    id: Date.now(),
    firstName: 'ラム',
    lastName: 'ルアブ',
    email: 'leslie.andrews@example.com'
  },
  {
    id: Date.now(),
    firstName: 'キリス',
    lastName: 'カロ',
    email: 'キリスカロ@example.com'
  }
];
*/

export function getStudentsAPI() {
  return mockStudentDb;
}

export function addStudentsAPI(newStudentData) {
  const savedStudent = {
    id: Date.now(),
    ...newStudentData
  };

  mockStudentDb.push(savedStudent);

  return savedStudent;
}
