const facultetsData = [
  {
    id: 1,
    faculty: "History department",
    subjects: ["The World History", "History of Rome"],
    countStudents: 44,
  },
  {
    id: 2,
    faculty: "Department of Biology",
    subjects: ["biology", "chemistry"],
    countStudents: 50,
  },
  {
    id: 3,
    faculty: "Faculty of Mathematics",
    subjects: ["mathematics", "geometry", "trigonometry"],
    countStudents: 72,
  },
  {
    id: 4,
    faculty: "Faculty of Design",
    subjects: ["ui", "ux", "graphic design"],
    countStudents: 37,
  },
];

//1. Создать массив всех факультетов.

const faculty = facultetsData.reduce((acc, { faculty }) => {
  return [...acc, faculty];
}, []);

//2. Создать массив всех предметов. Помним, что предметы у нас всегда уникальны (проверку на повторения делать не надо).

const subjects = facultetsData.reduce((acc, { subjects }) => {
  return [...acc, subjects].flat();
}, []);
