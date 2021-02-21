import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

// manager related
import ManagerHome from "../views/manager/ManagerHome.vue";
import ManagerStudents from "../views/manager/AddStudent.vue";
import ManagerEvents from "../views/manager/Events.vue";
import ManagerCourses from "../views/manager/Courses.vue";
import ManagerTeachers from "../views/manager/AddTeacher.vue";
import ManagerStudentGroups from "../views/manager/AddStudentGroups.vue";

// student related
import StudentHome from "../views/student/StudentHome.vue";
import StudentCourses from "../views/student/StudentCourses.vue";
import StudentGroups from "../views/student/StudentGroups.vue";

// teacher related
import TeacherHome from "../views/teacher/TeacherHome.vue";
import TeacherCourses from "../views/teacher/TeacherCourses.vue";
import TeacherMarks from "../views/teacher/TeacherMarks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },

  // manager related
  {
    path: "/managerhome",
    name: "ManagerHome",
    component: ManagerHome,
    children: [
      {
        path: "addstudents",
        name: "ManagerStudents",
        component: ManagerStudents,
      },
      {
        path: "events",
        name: "ManagerEvents",
        component: ManagerEvents,
      },
      {
        path: "courses",
        name: "ManagerCourses",
        component: ManagerCourses,
      },
      {
        path: "addteacher",
        name: "ManagerTeachers",
        component: ManagerTeachers,
      },
      {
        path: "addgroups",
        name: "ManagerStudentGroups",
        component: ManagerStudentGroups,
      },
    ],
  },

  // studnet related
  {
    path: "/studenthome",
    name: "StudentHome",
    component: StudentHome,
    children: [
      {
        path: "courses",
        name: "StudentCourses",
        component: StudentCourses,
      },
      {
        path: "mygroups",
        name: "StudentGroups",
        component: StudentGroups,
      },
    ],
  },

  // teacher related
  {
    path: "/teacherhome",
    name: "TeacherHome",
    component: TeacherHome,
    children: [
      {
        path: "courses",
        name: "TeacherCourses",
        component: TeacherCourses,
      },
      {
        path: "marks",
        name: "TeacherMarks",
        component: TeacherMarks,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
