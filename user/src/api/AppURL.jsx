class AppURL {
  static BaseURL = "http://127.0.0.1:8000/api";
  static VisitorDetails = this.BaseURL + "/getvisitor";
  static PostContact = this.BaseURL + "/postcontact";
  static AllCategoryDetails = this.BaseURL + "/allcategory";
  static ProductListByRemark(Remark) {
    return this.BaseURL + "/productlistbyremark" + Remark;
  }
  static ProductListByCategory(Category) {
    return this.BaseURL + "/productlistbycategory/" + Category;
  }
  static ProductListBySubCategory(Category, SubCategory) {
    return (
      this.BaseURL + "/productlistbysubcategory/" + Category + "/" + SubCategory
    );
  }
}

export default AppURL;
