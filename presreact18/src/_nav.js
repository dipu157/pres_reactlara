import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilNotes,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavTitle,
    name: 'Prescription',
  },
  {
    component: CNavItem,
    name: 'Today`s Appointment',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    to: '/forms/form-control',

  },
  {
    component: CNavItem,
    name: 'Previous Prescriptions',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    to: '/forms/form-control',
  },
  {
    component: CNavTitle,
    name: 'Appointment',
  },
  {
    component: CNavItem,
    name: 'Create Appointment',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    to: '/forms/form-control',

  },
  {
    component: CNavItem,
    name: 'Previous Prescriptions',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    to: '/forms/form-control',
  },
  {
    component: CNavTitle,
    name: 'Settings',
  },
  {
    component: CNavGroup,
    name: 'Chambers',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Chamber',
        to: '/chambers/allChamber',
      },
      {
        component: CNavItem,
        name: 'Add Chamber',
        to: '/chambers/addChamber',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Visiting Fee',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    to: '/forms/select',
  },
  {
    component: CNavGroup,
    name: 'Department',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Department',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Add Department',
        to: '/forms/select',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Designation',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Designation',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Add Designation',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'User',
  },
  {
    component: CNavGroup,
    name: 'Doctor',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Doctor',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Add Doctor',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Patient',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Patient',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Add Patient',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Medicine',
  },
  {
    component: CNavGroup,
    name: 'Generic',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Generic',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Add Generic',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Medicine Types',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All MedicineTypes',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Add MedicineTypes',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Strength',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Strength',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Add Strength',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Supplier',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Supplier',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Add Supplier',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Medicine',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Medicine',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Add Medicine',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Dose',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Dose',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Add Dose',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Duration',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Duration',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Add Duration',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Medicine Advice',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All MedicineAdvice',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Add MedicineAdvice',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Others',
  },
  {
    component: CNavGroup,
    name: 'Investigation',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Investigation',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Add Investigation',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'General Advice',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Advice',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Add Advice',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Template',
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
    ],
  },
]

export default _nav
