export type Student = {
  id: string;
  name: string;
  code: string;
  major: string;
  gpa: number;
  email?: string;
};

let students: Student[] = [
  { id: '1', name: 'Nguyễn Văn An', code: 'SV001', major: 'Công nghệ thông tin', gpa: 3.5, email: 'an.nv@example.com' },
  { id: '2', name: 'Trần Thị Bình', code: 'SV002', major: 'Kế toán', gpa: 3.8, email: 'binh.tt@example.com' },
  { id: '3', name: 'Lê Hoàng Cường', code: 'SV003', major: 'Quản trị kinh doanh', gpa: 3.2, email: 'cuong.lh@example.com' },
];

type ChangeListener = () => void;
const listeners: ChangeListener[] = [];

function getStudentById(id: string | undefined) {
  if (!id) return undefined;
  return students.find((s) => s.id === String(id));
}

function addStudent(student: Omit<Student, 'id'>) {

  const newId = (students.length + 1).toString();
  const newStudent = { ...student, id: newId };
  
  students = [...students, newStudent];
  notifyListeners();
  return newStudent;
}

function subscribe(listener: ChangeListener) {
  listeners.push(listener);
  return () => {
    const index = listeners.indexOf(listener);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  };
}

function notifyListeners() {
  listeners.forEach(listener => listener());
}

const StudentData = {
  get students() { return [...students]; },  // Return a copy to prevent direct mutations
  getStudentById,
  addStudent,
  subscribe,
};

export default StudentData;
