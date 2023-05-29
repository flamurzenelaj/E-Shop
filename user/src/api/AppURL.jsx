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

  static ProductDetails(code){
    return this.BaseURL+"/productdetails/"+code;
  }

  static NotificationHistory = this.BaseURL+"/notification"

  
  static ProductBySearch(searchkey){
    return this.BaseURL+"/search/"+searchkey;
  }

}

export default AppURL;
