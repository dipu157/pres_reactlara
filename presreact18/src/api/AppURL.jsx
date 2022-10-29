class AppURL {
    static BaseURL = "http://localhost:8000/api"
    static ChamberList = this.BaseURL + "/chamberaddress"
    static ChamberAdd = this.BaseURL + "/storechamberaddress"

    static DepartmentList = this.BaseURL + "/getdepartments"
    static DepartmentAdd = this.BaseURL + "/storedepartment"

    static DesignationList = this.BaseURL + "/getdesignations"
    static DesignationAdd = this.BaseURL + "/storedesignation"

    static DoctorList = this.BaseURL + "/getalldoctors"
    static DoctorAdd = this.BaseURL + "/storedoctor"

    // static ProductListByRemark(Remark) {
    //     return this.BaseURL + "/productlistbyremark/" + Remark;
    // }
   
}

export default AppURL