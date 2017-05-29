package controllers;

import models.User;
import play.mvc.*;

import views.html.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

public class HomeController extends Controller {
    public static Result index(){
        List<User> usersList=User.find.where().eq("role","admin").findList();
        if(usersList.size()<=0){
            User user=new User();
            user.active=true;
            user.doneAt=new Timestamp(new Date().getTime());
            user.doneBy="default";
            user.firstName="Bayingana";
            user.lastName="Abel";
            user.role="admin";
            user.email="aberto20@gmail.com";
            user.password="admin";
            user.username="admin";
            user.phone="0785185421";
            user.save();
        }
        return ok(index.render());
    }
}