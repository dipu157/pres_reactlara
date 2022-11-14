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
import Supplier from "views/medicine/SupplierList.js";
import Medicine from "views/medicine/MedicineList.js";

import Investigation from "views/prescription/InvestigationList.js";
import Advice from "views/prescription/AdviceList.js";

import OldPrescription from "views/prescription/prescription/PrescriptionList.js";
import NewPrescription from "views/prescription/prescription/NewPrescription.js";

const dashboardRoutes = [
  {
    name: "Prescription",
    icon: "nc-icon nc-stre-down"
  },
  {
    path: "/new_prescription",
    name: "New Prescription",
    icon: "nc-icon nc-notes",
    component: NewPrescription,
    layout: "/admin"
  },
  {
    path: "/old_prescription",
    name: "Old Prescription",
    icon: "nc-icon nc-chart-bar-32",
    component: OldPrescription,
    layout: "/admin"
  },
  {
    name: "Common",
    icon: "nc-icon nc-stre-down"
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
    name: "User",
    icon: "nc-icon nc-stre-down"
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
    name: "Medicine",
    icon: "nc-icon nc-stre-down"
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
    name: "Medicine Type",
    icon: "nc-icon nc-layers-3",
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
  {
    path: "/supplierList",
    name: "Supplier",
    icon: "nc-icon nc-delivery-fast",
    component: Supplier,
    layout: "/admin"
  },
  {
    path: "/medicineList",
    name: "Medicine",
    icon: "nc-icon nc-notes",
    component: Medicine,
    layout: "/admin"
  },
  {
    name: "Investigation & Advice",
    icon: "nc-icon nc-stre-down"
  },
  {
    path: "/investigation",
    name: "Investigation",
    icon: "nc-icon nc-zoom-split",
    component: Investigation,
    layout: "/admin"
  },
  {
    path: "/advice",
    name: "Advice",
    icon: "nc-icon nc-notes",
    component: Advice,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin"
  },
];

export default dashboardRoutes;
