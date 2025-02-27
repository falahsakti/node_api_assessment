const filterCommonStudents = (students, teachers) => {
  let commonStudents = students.filter((student) => {
    const studentTeachers = student.Teachers.map((teacher) => teacher.email);

    if (
      teachers &&
      teachers.length > 0 &&
      teachers.every((teacher) => studentTeachers.includes(teacher))
    ) {
      return true;
    } else {
      return false;
    }
  });

  return commonStudents;
};

module.exports = {
  filterCommonStudents,
};
