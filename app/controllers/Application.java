package controllers;
import models.*;
import play.data.Form;
import play.db.ebean.Model;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;
import views.html.bland;
import views.html.vehicle;

import java.io.File;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;


/**
 * Created by lenovo on 5/19/2017.
 */
public class Application extends Controller {


      public static Result loginpage(){
          List<User> usersList=User.find.where().eq("role","admin").findList();
          if(usersList.size()<=0){
              User user=new User();
              user.active=true;
              user.doneAt=new Timestamp(new Date().getTime());
              user.doneBy="default";
              user.firstName="NKUNDIMANA";
              user.lastName="Evalist";
              user.role="admin";
              user.email="nkundimana@gmail.com";
              user.password="admin";
              user.username="admin";
              user.phone="0788885368";
              user.save();
          }
        return ok(views.html.login.render());
    }
    public static Result logout(){
        session().clear();
        return ok(views.html.index.render());
    }
    public static Result loadCurrentUser(){

        User user=User.findByUsername(session("userId"));
        return ok(Json.toJson(user));
    }
    public static Result signin(){
        Form<User>userForm=Form.form(User.class).bindFromRequest();
        User user=userForm.get();
        Boolean Auth=false;
         session().clear();
        for (User u:User.find.where().like("username",user.username).findList()){
            if (u.password.equals(user.password)){
                Auth=true;
            }
        }
        if (Auth){
            System.out.println("---------------------------------------\n Logged in !");
            session("userId",user.username);
            return ok("ok");
        }else {
            return ok("error");
        }

    }
    public static Result adminHome(){
        if(session("userId")==null ||session("userId").equals("") ){
            return ok(views.html.login.render());
        }
        return ok(views.html.admin.render());
    }
    public static Result loadUsers(){
        List<User> userList=User.all();
        return ok(Json.toJson(userList));
    }

    public static Result blandPage(){
        if(session("userId")==null ||session("userId").equals("") ){
            return ok(views.html.login.render());
        }
        return ok(bland.render());
    }
    public static Result VehiclePage(){
        if(session("userId")==null ||session("userId").equals("") ){
            return ok(views.html.login.render());
        }
        return ok(vehicle.render());
    }
    public static Result dashboarAdmin(){
        if(session("userId")==null ||session("userId").equals("") ){
            return ok(views.html.login.render());
        }
        return ok(views.html.admin.render());
    }
    public static Result user(){
        if(session("userId")==null ||session("userId").equals("") ){
            return ok(views.html.login.render());
        }
        return ok(views.html.user.render());
    }
    public static Result sparePart(){
        if(session("userId")==null ||session("userId").equals("") ){
            return ok(views.html.login.render());
        }
        return ok(views.html.sparePart.render());
    }

    public static Result saveUser(){
        Form<User> userForm=Form.form(User.class).bindFromRequest();
        User user=userForm.get();
        User u=User.findByUsername(user.username);
        User phone=User.findByPhone(user.username);
        User email=User.findByEmail(user.username);
        if (u!=null){
            return ok("usernameExist");
        }
        if (phone!=null){
            return ok("phoneExist");
        }
        if (email!=null){
            return ok("emailExist");
        }
        user.save();

        List<User> userList=User.all();
        System.out.println("----------------------------------\n"+userList);
        return ok(Json.toJson(userList));
    }
    public static Result uploadImage(){
        Http.MultipartFormData body = request().body().asMultipartFormData();
        Http.MultipartFormData.FilePart picture = body.getFile("photo");
        if (picture != null) {
            String fileName = picture.getFilename();
            String contentType = picture.getContentType();
            File file = picture.getFile();
            String text=(new Date().getTime())+ fileName;
            file.renameTo(new File("public/images",text));

            return ok(text);
        } else {
            flash("error", "Missing file");
            return ok("Error");
        }
    }
    public static Result updateUserImage(long id){
        Form<User>userForm=Form.form(User.class).bindFromRequest();


            User user=User.finderById(id);
            user.photo=userForm.field("photo").value();
            user.update();

            return ok("ok");
    }
    public static Result updatePartImage(long id){
        Form<SparePart>sparePartForm=Form.form(SparePart.class).bindFromRequest();
        SparePart sparePart=SparePart.finderById(id);
        sparePart.image=sparePartForm.field("image").value();
        sparePart.update();
            return ok("ok");
    }
    public static Result updateBlandImage(long id){
        Form<Bland> blandForm = Form.form(Bland.class).bindFromRequest();
        Bland bland = Bland.finderById(id);
        bland.image=blandForm.field("image").value();
        bland.update();
            return ok("ok");
    }
    public static Result updateTypeImage(long id){
        Form<PartType>partTypeForm=Form.form(PartType.class).bindFromRequest();


        PartType partType=PartType.finderById(id);
        partType.image=partTypeForm.field("image").value();
        partType.update();

            return ok("ok");

    }
    public static Result updateModelImage(long id){
        Form<VehicleModel>vehicleModelForm=Form.form(VehicleModel.class).bindFromRequest();


        VehicleModel vehicleModel=VehicleModel.finderById(id);
        vehicleModel.image=vehicleModelForm.field("image").value();
        vehicleModel.update();

            return ok("ok");

    }
    public static Result UsernameExist(String username){
        User user=User.findByUsername(username);
       if(user ==null){
           return ok("error");
       }
        return ok("ok");
    }
    public static play.mvc.Result loadBlands(){
            List<Bland> bland = Bland.all();
            return ok(Json.toJson(bland));
    }
    public static play.mvc.Result loadModel(){
        List<VehicleModel> vehicleModels = VehicleModel.all();
        return ok(Json.toJson(vehicleModels));
    }
    public static Result saveBland(){
        Form<Bland> blandForm = Form.form(Bland.class).bindFromRequest();
        Bland bland = blandForm.get();
        Bland b = Bland.findByBlandrname(bland.blandName);
            if(b != null){
                return ok("blandNameExist");
            }
            bland.doneBy = User.findByUsername(session("userId")).username;
            bland.blandName = blandForm.field("blandName").value();
            bland.description = blandForm.field("description").value();
            bland.save();
            System.out.println("-------------- \n bland saved successfully");
            List<Bland> blands = Bland.all();
            return ok(Json.toJson(blands));
    }
    public static Result saveModel(){
        Form<VehicleModel> vehicleModelForm = Form.form(VehicleModel.class).bindFromRequest();
        VehicleModel vehicleModel = vehicleModelForm.get();
        vehicleModel.doneBy = User.findByUsername(session("userId")).username;
        vehicleModel.modelName = vehicleModelForm.field("modelName").value();
        vehicleModel.description = vehicleModelForm.field("description").value();
        vehicleModel.bland = Bland.finderById(Long.parseLong(vehicleModelForm.field("blandId").value()));
        vehicleModel.save();
        System.out.println("-------------- \n Model saved successfully");
        List<VehicleModel> vehicleModels = VehicleModel.all();
        return ok(Json.toJson(vehicleModels));
    }
    public static Result saveAddBland(){
            Form<PartDetails> partDetailsForm = Form.form(PartDetails.class).bindFromRequest();
            PartDetails partDetails = partDetailsForm.get();
            long pId = Long.parseLong(partDetailsForm.field("sparePartId").value());
            long bId = Long.parseLong(partDetailsForm.field("blandId").value());
            partDetails.sparePart = SparePart.finderById(pId);
            partDetails.bland = Bland.finderById(bId);
            partDetails.doneBy = User.findByUsername(session("userId")).username;
            partDetails.save();
            System.out.println("-------------- \n part details saved successfully");
            List<PartDetails> partDetailses = PartDetails.all();
            return ok(Json.toJson(partDetailses));
    }
    public static Result updateBland(){
        Form<Bland> blandForm = Form.form(Bland.class).bindFromRequest();
        long id=Long.parseLong(blandForm.field("id").value());
        Bland bland1 = Bland.finderById(id);
        bland1.blandName = blandForm.field("blandName").value();
        bland1.description = blandForm.field("description").value();
        bland1.doneBy = User.findByUsername(session("userId")).username;
        bland1.update();
        System.out.println("----------------------- \n Bland list after update");
        List<Bland> blandList = Bland.all();
        return ok(Json.toJson(blandList));
    }
    public static Result updateModel(){
        Form<VehicleModel> vehicleModelForm = Form.form(VehicleModel.class).bindFromRequest();
        long id=Long.parseLong(vehicleModelForm.field("id").value());
        VehicleModel vehicleModel = VehicleModel.finderById(id);
        vehicleModel.modelName = vehicleModelForm.field("modelName").value();
        vehicleModel.description = vehicleModelForm.field("description").value();
        vehicleModel.bland = Bland.finderById(Long.parseLong(vehicleModelForm.field("blandId").value()));
        vehicleModel.doneBy = User.findByUsername(session("userId")).username;
        vehicleModel.update();
        System.out.println("----------------------- \n Vehicle mode list after update");
        List<VehicleModel> vehicleModels = VehicleModel.all();
        return ok(Json.toJson(vehicleModels));
    }
    public static Result updateAddBland(){
        Form<PartDetails> partDetailsForm = Form.form(PartDetails.class).bindFromRequest();
        long id = Long.parseLong(partDetailsForm.field("id").value());
        PartDetails partDetails = PartDetails.finderById(id);
        long sId = Long.parseLong(partDetailsForm.field("sparePartId").value());
        partDetails.sparePart = SparePart.finderById(sId);
        partDetails.bland = Bland.finderById(Long.parseLong(partDetailsForm.field("blandId").value()));
        partDetails.doneBy = User.findByUsername(session("userId")).username;
        partDetails.update();
        System.out.println("----------------------- \n part details list after update");
        List<PartDetails> partDetailses = PartDetails.all();
        return ok(Json.toJson(partDetailses));
    }
    public static Result deleteBland(long id){
        Form<Bland> blandForm = Form.form(Bland.class).bindFromRequest();
        Bland bland1 = Bland.finderById(id);
        bland1.deleteStatus = true;
        bland1.doneBy = User.findByUsername(session("userId")).username;
        bland1.deleteReason =blandForm.field("deleteReason").value();
        bland1.save();
        System.out.println("---------------- \n bland deleted succesfully");
        List<Bland> blandList = Bland.all();
        return ok(Json.toJson(blandList));
    }
    public static Result deleteModel(long id){
        Form<VehicleModel> vehicleModelForm = Form.form(VehicleModel.class).bindFromRequest();
        VehicleModel vehicleModel = VehicleModel.finderById(id);
        vehicleModel.deleteStatus = true;
        vehicleModel.doneBy = User.findByUsername(session("userId")).username;
        vehicleModel.deleteReason = vehicleModelForm.field("deleteReason").value();
        vehicleModel.save();
        System.out.println("---------------- \n Vehicle model deleted successfully");
        List<VehicleModel> vehicleModels = VehicleModel.all();
        return ok(Json.toJson(vehicleModels));
    }
    public static Result deleteAddBland(long id){
        Form<PartDetails> partDetailsForm = Form.form(PartDetails.class).bindFromRequest();
        PartDetails partDetails = PartDetails.finderById(id);
        partDetails.deleteStatus = true;
        partDetails.doneBy = User.findByUsername(session("userId")).username;
        partDetails.save();
        System.out.println("---------------- \n Part details deleted successfully");
        List<PartDetails> partDetailses = PartDetails.all();
        return ok(Json.toJson(partDetailses));
    }
    public static Result updateUser(){
        Form<User> userForm=Form.form(User.class).bindFromRequest();
        System.out.println(userForm);
         long id=Long.parseLong(userForm.field("id").value());
        User user1=User.finderById(id);
        user1.email=userForm.field("email").value();
        user1.firstName=userForm.field("firstName").value();
        user1.lastName=userForm.field("lastName").value();
        user1.role=userForm.field("role").value();
        user1.phone=userForm.field("phone").value();
        user1.username=userForm.field("username").value();
        user1.password=userForm.field("password").value();
        user1.update();
        System.out.println("------------------\n user updated successfully");
        List<User> userList=User.all();
        return ok(Json.toJson(userList));
    }
    public static Result disableUser(long id){
        Form<User> userForm=Form.form(User.class).bindFromRequest();
        User user1=User.finderById(id);
        user1.deleteStatus=true;
        user1.deleteReason=userForm.field("deleteReason").value();
        user1.update();
        System.out.println("-------------------- \n user disabled successfully");
        List<User> userList=User.all();
        return ok(Json.toJson(userList));
    }
    public static Result enableUser(long id){
        Form<User> userForm=Form.form(User.class).bindFromRequest();
        User user=userForm.get();
        User user1=User.finderById(id);
        user1.deleteStatus=false;
        user1.deleteReason=user.deleteReason;
        user1.update();
        System.out.println("-------------------- \n user enabled successfully");
        List<User> userList=User.all();
        return ok(Json.toJson(userList));
    }
    public static Result loadPartType(){
        List<PartType> partTypeList = PartType.all();
        return ok(Json.toJson(partTypeList));
    }
    public static Result partTypePage(){
        if(session("userId")==null ||session("userId").equals("") ){
            return ok(views.html.login.render());
        }
        return ok(views.html.partype.render());
    }
    public static Result models(){
        if(session("userId")==null ||session("userId").equals("") ){
            return ok(views.html.login.render());
        }
        return ok(views.html.vehicleModels.render());
    }
    public static Result details(){
        if(session("userId")==null ||session("userId").equals("") ){
            return ok(views.html.login.render());
        }
        return ok(views.html.details.render());

    }
    public static Result savePartType(){
        Form<PartType> partTypeForm = Form.form(PartType.class).bindFromRequest();
        PartType partType = partTypeForm.get();
        partType.vehicleModel = VehicleModel.finderById(Long.parseLong(partTypeForm.field("modelId").value()));
        partType.doneBy =User.findByUsername(session("userId")).username;
        System.out.println("------------------- \n part type saved successfully");
        partType.save();
        List<PartType> partTypeList = PartType.all();
        return ok(Json.toJson(partTypeList));
    }
    public static Result updatePartType(){
        Form<PartType> partTypeForm = Form.form(PartType.class).bindFromRequest();
        long id=Long.parseLong(partTypeForm.field("id").value());
        PartType partType1 = PartType.finderById(id);
        partType1.typeName = partTypeForm.field("typeName").value();
        partType1.image =partTypeForm.field("image").value();
        partType1.description =partTypeForm.field("description").value();
        partType1.doneBy = User.byUsername(session("userId")).username;
        partType1.vehicleModel = VehicleModel.finderById(Long.parseLong(partTypeForm.field("modelId").value()));
        partType1.update();
        System.out.println("------------------- \n Vehicle model updated successfully");
        List<PartType> partTypeList = PartType.all();
        return ok(Json.toJson(partTypeList));
    }
    public static Result deletePartType(long id){
        Form<PartType> partTypeForm = Form.form(PartType.class).bindFromRequest();
        PartType partType1 = PartType.finderById(id);
        partType1.deleteStatus = true;
        partType1.deleteReason =partTypeForm.field("deleteReason").value();
        partType1.doneBy = User.byUsername(session("userId")).username;
        partType1.update();
        System.out.println("------------------- \n part type saved successfully");
        List<PartType> partTypeList = PartType.all();
        return ok(Json.toJson(partTypeList));
    }
    public static Result loadSparePart(){
        List<SparePart> sparePartList = SparePart.all();
        return ok(Json.toJson(sparePartList));
    }
    public static Result loadPartDetails(){
        List<PartDetails> partDetails = PartDetails.all();
        return ok(Json.toJson(partDetails));
    }
    public static Result saveSparePart(){
        Form<SparePart> sparePartForm = Form.form(SparePart.class).bindFromRequest();
        SparePart sparePart = sparePartForm.get();
        long partTypeId=Long.parseLong(sparePartForm.field("partTypeId").value());
        sparePart.partType=PartType.finderById(partTypeId);
        sparePart.doneBy=User.byUsername(session("userId")).username;
        sparePart.save();
        System.out.println("------------------- \n spare part saved successfully");
        List<SparePart> sparePartList = SparePart.all();
        return ok(Json.toJson(sparePartList));
    }
    public static Result updateSparePart(){
        Form<SparePart> sparePartForm = Form.form(SparePart.class).bindFromRequest();
        long id=Long.parseLong(sparePartForm.field("id").value());
        long partTypeId=Long.parseLong(sparePartForm.field("partTypeId").value());
        SparePart sparePart1 = SparePart.finderById(id);
        sparePart1.partName = sparePartForm.field("partName").value();
        sparePart1.country = sparePartForm.field("country").value();
        sparePart1.manufacturer = sparePartForm.field("manufacturer").value();
        sparePart1.modelNumber = sparePartForm.field("modelNumber").value();
        sparePart1.manufacturerPrice =sparePartForm.field("manufacturerPrice").value();
        sparePart1.fittingName = sparePartForm.field("fittingName").value();
        sparePart1.originality = sparePartForm.field("originality").value();
        sparePart1.fablicationYear =sparePartForm.field("fablicationYear").value();
        sparePart1.doneBy = User.findByUsername(session("userId")).username;
        sparePart1.partType=PartType.finderById(partTypeId);

        sparePart1.update();
        System.out.println("------------------- \n spare part updated successfully");
        List<SparePart> sparePartList = SparePart.all();
        return ok(Json.toJson(sparePartList));
    }
    public static Result deleteSparePart(long id){
        Form<SparePart> sparePartForm = Form.form(SparePart.class).bindFromRequest();
        SparePart sparePart1 = SparePart.finderById(id);
        sparePart1.deleteStatus = true;
        sparePart1.deleteReason = sparePartForm.field("deleteReason").value();
        sparePart1.doneBy = User.findByUsername(session("userId")).username;
        sparePart1.update();
        System.out.println("------------------- \n spare part updated successfully");
        List<SparePart> sparePartList = SparePart.all();
        return ok(Json.toJson(sparePartList));
    }
    public static Result vehicleByPartType(long id){
        List<PartType> partTypes = PartType.find.where().eq("vehicle_model_id",id).findList();
        return ok(Json.toJson(partTypes));
    }
    public static Result vehicleByBland(long id){
        List<VehicleModel> vehicleModels = VehicleModel.find.where().eq("bland_id",id).findList();
        return ok(Json.toJson(vehicleModels));
    }
    public static Result vehicleBySparePart(long id){
        List<SparePart> spareParts=SparePart.find.where().eq("part_type_id",id).findList();
        return ok(Json.toJson(spareParts));
    }
    public static Result sparePartByPartType(long id){
        List<SparePart> spareParts=SparePart.find.where().eq("part_type_id",id).findList();
        return ok(Json.toJson(spareParts));
    }
    public static Result modelByBland(long id){
        List<VehicleModel> vehicleModels = VehicleModel.find.where().eq("bland_id",id).findList();
        return ok(Json.toJson(vehicleModels));
    }
    public static Result findByPartModel(String model){
        SparePart sp;
        sp = SparePart.findByPartModel(model);
        if (sp!=null){
            return ok(Json.toJson(sp));
        }else {
            return ok("");
        }

    }
}
