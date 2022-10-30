import Dashboard from "views/Dashboard.js";
import UserProfile from "views/Default/UserProfile.js";
import TableList from "views/Default/TableList.js";
import Typography from "views/Default/Typography.js";
import Icons from "views/Default/Icons.js";
import Maps from "views/Default/Maps.js";
import Notifications from "views/Default/Notifications.js";

import Chamber from "views/common/ChamberList.js";
import Department from "views/common/DepartmentList.js";
import Designation from "views/common/DesignationList.js";
import Doctor from "views/common/DoctorList.js";
import Patient from "views/common/PatientList.js";


import Generic from "views/medicine/GenericList.js";
import MedicineType from "views/medicine/MedicineTypeList.js";
import Strength from "views/medicine/StrengthList.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/chamberList",
    name: "Chamber",
    icon: "nc-icon nc-square-pin",
    component: Chamber,
    layout: "/admin"
  },
  {
    path: "/departmentList",
    name: "Department",
    icon: "nc-icon nc-badge",
    component: Department,
    layout: "/admin"
  },
  {
    path: "/designationList",
    name: "Designation",
    icon: "nc-icon nc-badge",
    component: Designation,
    layout: "/admin"
  },
  {
    path: "/doctorList",
    name: "Doctor",
    icon: "nc-icon nc-single-02",
    component: Doctor,
    layout: "/admin"
  },
  {
    path: "/patientList",
    name: "Patient",
    icon: "nc-icon nc-single-02",
    component: Patient,
    layout: "/admin"
  },
  {
    path: "/genericList",
    name: "Generic",
    icon: "nc-icon nc-bullet-list-67",
    component: Generic,
    layout: "/admin"
  },
  {
    path: "/medicineTypeList",
    name: "MedicineType",
    icon: "nc-icon nc-bullet-list-67",
    component: MedicineType,
    layout: "/admin"
  },
  {
    path: "/strengthList",
    name: "Strength",
    icon: "nc-icon nc-bullet-list-67",
    component: Strength,
    layout: "/admin"
  },
  //,
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "nc-icon nc-circle-09",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "nc-icon nc-notes",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin"
  // },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin"
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
