package controllers;
import models.*;
import play.data.Form;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.bland;
import views.html.vehicle;
import java.util.List;


/**
 * Created by lenovo on 5/19/2017.
 */
public class Application extends Controller {


      public static Result loginpage(){
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
    public static Result SeriesPage(){
        if(session("userId")==null ||session("userId").equals("") ){
            return ok(views.html.login.render());
        }
        return ok(views.html.series.render());
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
    public static play.mvc.Result loadBlands(){
            List<Bland> bland = Bland.all();
            return ok(Json.toJson(bland));
    }
    public static Result saveBland(){
        Form<Bland> blandForm = Form.form(Bland.class).bindFromRequest();
        Bland bland = blandForm.get();
        Bland b = Bland.findByBlandrname(bland.blandName);
            if(b != null){
                return ok("blandNameExist");
            }
            bland.doneBy = User.findByUsername(session("userId")).username;
            bland.save();
            System.out.println("-------------- \n bland saved successfully");
            List<Bland> blandList = Bland.all();
            return ok(Json.toJson(blandList));
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
    public static Result loadVehicles(){
        List<Vehicle> vehicles = Vehicle.all();
        return ok(Json.toJson(vehicles));
    }
    public static Result saveVehicle(){
        Form<Vehicle> vehicleFrom = Form.form(Vehicle.class).bindFromRequest();
        Vehicle vehicle = vehicleFrom.get();
        Vehicle v = Vehicle.findByVehicleName(vehicle.vehicleName);
        if (v != null){
            return ok("vehicleNameExists");
        }
        long blandId=Long.parseLong(vehicleFrom.field("blandId").value());
        vehicle.bland = Bland.finderById(blandId);
        vehicle.doneBy=User.findByUsername(session("userId")).username;
        System.out.println("------------------- \n vehicle saved successfully");
        vehicle.save();
        List<Vehicle> vehiclesList = Vehicle.all();
        return ok(Json.toJson(vehiclesList));
    }
    public static Result updateVehicle(){
        Form<Vehicle> vehicleForm = Form.form(Vehicle.class).bindFromRequest();
        long id=Long.parseLong(vehicleForm.field("id").value());
        long blandId=Long.parseLong(vehicleForm.field("blandId").value());
        Vehicle vehicle1 = Vehicle.finderById(id);
        vehicle1.vehicleName = vehicleForm.field("vehicleName").value();
        vehicle1.description = vehicleForm.field("description").value();
        vehicle1.fablicationYear =vehicleForm.field("fablicationYear").value();
        vehicle1.doneBy = User.findByUsername(session("userId")).username;
        vehicle1.bland = Bland.finderById(blandId);
        System.out.println("------------------- \n vehicle updated successfully");
        vehicle1.update();
        List<Vehicle> vehicles = Vehicle.all();
        return ok(Json.toJson(vehicles));
    }
    public static Result deleteVehicle(long id){
        Form<Vehicle> vehicleForm = Form.form(Vehicle.class).bindFromRequest();
        Vehicle vehicle1 = Vehicle.finderById(id);
        vehicle1.deleteStatus = true;
        vehicle1.deleteReason =vehicleForm.field("deleteReason").value();
        vehicle1.doneBy = User.findByUsername(session("userId")).username;
        System.out.println("------------------- \n vehicle deleted successfully");
        vehicle1.update();
        List<Vehicle> vehicles = Vehicle.all();
        return ok(Json.toJson(vehicles));
    }
    public static Result loadSeries(){
        List<Series> seriesList = Series.all();
        return ok(Json.toJson(seriesList));
    }
    public static Result saveSeries(){
        Form<Series> seriesForm = Form.form(Series.class).bindFromRequest();
        Series series = seriesForm.get();
        Series s = Series.findBySeries(series.serieName);
        long vehicleId=Long.parseLong(seriesForm.field("vehicleId").value());
        if(s!= null){
            return ok("seriesExists");
        }
        series.vehicle=Vehicle.finderById(vehicleId);
        series.doneBy = User.byUsername(session("userId")).username;
        System.out.println("------------------- \n series saved successfully");
        series.save();
        List<Series> seriesList = Series.all();
        return ok(Json.toJson(seriesList));
    }
    public static Result updateSeries(){
        Form<Series> seriesForm = Form.form(Series.class).bindFromRequest();
        long vehicleId=Long.parseLong(seriesForm.field("vehicleId").value());
        Series series1 = Series.finderById(Long.parseLong(seriesForm.field("id").value()));

        series1.serieNo =seriesForm.field("serieNo").value();
        series1.serieName = seriesForm.field("serieName").value();
        series1.fablicationYear =seriesForm.field("fablicationYear").value();
        series1.doneBy = User.findByUsername(session("userId")).username;
        series1.vehicle = Vehicle.finderById(vehicleId);
        series1.update();
        System.out.println("------------------- \n series updated successfully");
        List<Series> seriesList = Series.all();
        return ok(Json.toJson(seriesList));
    }
    public static Result deleteSeries(long id){
        Form<Series> seriesForm = Form.form(Series.class).bindFromRequest();
        Series series1 = Series.finderById(id);
        series1.deleteStatus = true;
        series1.deleteReason =seriesForm.field("deleteReason").value();
        series1.doneBy =User.byUsername(session("userId")).username;
        series1.update();
        System.out.println("------------------- \n series successfully");
        List<Series> seriesList = Series.all();
        return ok(Json.toJson(seriesList));
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

    public static Result savePartType(){
        Form<PartType> partTypeForm = Form.form(PartType.class).bindFromRequest();
        PartType partType = partTypeForm.get();
        long serieId=Long.parseLong(partTypeForm.field("serieId").value());
        PartType p = PartType.findByPartType(partType.typeName);
        if (p != null){
            return ok("partTypeExists");
        }
        partType.series = Series.finderById(serieId);
        partType.doneBy =User.findByUsername(session("userId")).username;
        System.out.println("------------------- \n part type saved successfully");
        partType.save();
        List<PartType> partTypeList = PartType.all();
        return ok(Json.toJson(partTypeList));
    }
    public static Result updatePartType(){
        Form<PartType> partTypeForm = Form.form(PartType.class).bindFromRequest();
        long id=Long.parseLong(partTypeForm.field("id").value());
        long serieId=Long.parseLong(partTypeForm.field("serieId").value());
        PartType partType1 = PartType.finderById(id);
        partType1.typeName = partTypeForm.field("typeName").value();
        partType1.image =partTypeForm.field("image").value();
        partType1.description =partTypeForm.field("description").value();
        partType1.doneBy = User.byUsername(session("userId")).username;
        partType1.series = Series.finderById(serieId);
        partType1.update();
        System.out.println("------------------- \n part type updated successfully");
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
    public static Result saveSparePart(){
        Form<SparePart> sparePartForm = Form.form(SparePart.class).bindFromRequest();
        SparePart sparePart = sparePartForm.get();
        long partTypeId=Long.parseLong(sparePartForm.field("partTypeId").value());
        SparePart s = SparePart.findByPartName(sparePart.partName);
        if (s != null){
            return ok("partNameExists");
        }
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
        sparePart1.description = sparePartForm.field("description").value();
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
}
