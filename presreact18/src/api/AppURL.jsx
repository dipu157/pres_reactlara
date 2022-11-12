class AppURL {
    static BaseURL = "http://localhost:8000/api"
    static UserData = this.BaseURL + "/user"
    static UserLogin = this.BaseURL + "/login"
    
    static ChamberList = this.BaseURL + "/chamberaddress"
    static ChamberAdd = this.BaseURL + "/storechamberaddress"

    static DepartmentList = this.BaseURL + "/getdepartments"
    static DepartmentAdd = this.BaseURL + "/storedepartment"

    static DesignationList = this.BaseURL + "/getdesignations"
    static DesignationAdd = this.BaseURL + "/storedesignation"

    static DoctorList = this.BaseURL + "/getalldoctors"
    static DoctorAdd = this.BaseURL + "/addnewdoctor"

    static DoctorEdit(id) {
        return this.BaseURL + "/updatedoctor/" + id;
    }

    static PatientList = this.BaseURL + "/getallpatients"
    static PatientAdd = this.BaseURL + "/addnewpatient"
    static PatientEdit(id) {
        return this.BaseURL + "/updatepatient/" + id;
    }
    static PatientSearch(key) {
        return this.BaseURL + "/searchpatients/" + key;
    }

    static GenericList = this.BaseURL + "/getGenerics"
    static GenericAdd = this.BaseURL + "/addgeneric"

    static MedicineTypeList = this.BaseURL + "/getMedicineTypes"
    static MedicineTypeAdd = this.BaseURL + "/addMedicineTypes"

    static StrengthList = this.BaseURL + "/getStrength"
    static StrengthAdd = this.BaseURL + "/addStrength"

    static SupplierList = this.BaseURL + "/getsupplier"
    static SupplierAdd = this.BaseURL + "/addsupplier"

    static MedicineList = this.BaseURL + "/getMedicines"
    static MedicineAdd = this.BaseURL + "/AddMedicines"
    static MedicineSearch(key) {
        return this.BaseURL + "/searchmedicines/" + key;
    }

    static AdviceList = this.BaseURL + "/allgeneralAdvice"
    static AdviceAdd = this.BaseURL + "/addgeneralAdvice"
    static AdviceEdit(id) {
        return this.BaseURL + "/updateadvice/" + id;
    }
    static AdviceSearch(key) {
        return this.BaseURL + "/searchadvices/" + key;
    }

    static InvestigationList = this.BaseURL + "/allinvestigation"
    static InvestigationAdd = this.BaseURL + "/addinvestigation"
    static InvestigationEdit(id) {
        return this.BaseURL + "/updateinvestigation/" + id;
    }
    static InvestigationSearch(key) {
        return this.BaseURL + "/searchinvestigations/" + key;
    }

    static PrescriptionList = this.BaseURL + "/allprescription"
    static PrescriptionAdd = this.BaseURL + "/createPrescription"
   
}

export default AppURL