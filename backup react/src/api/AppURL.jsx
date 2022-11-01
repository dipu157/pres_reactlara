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

    // static ProductListByRemark(Remark) {
    //     return this.BaseURL + "/productlistbyremark/" + Remark;
    // }
   
}

export default AppURL