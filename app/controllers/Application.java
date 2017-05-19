package controllers;

import models.User;
import play.data.Form;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.index;

import java.util.List;

/**
 * Created by lenovo on 5/19/2017.
 */
public class Application extends Controller {
    public static Result home(){
        return ok(index.render());
    }
    public static Result loadUsers(){
        List<User> userList=User.all();
        return ok(Json.toJson(userList));
    }
    public static Result saveUser(){
        Form<User> userForm=Form.form(User.class).bindFromRequest();

        User user=userForm.get();
        User u=User.findByUsername(user.username);
        if (u!=null){
            return ok("usernameExist");
        }
        user.save();

        List<User> userList=User.all();
        return ok(Json.toJson(userList));
    }
    public static Result updateUser(){
        Form<User> userForm=Form.form(User.class).bindFromRequest();
        User user=userForm.get();

        User user1=User.finderById(user.id);
        user1.email=user.email;
        user1.firstName=user.firstName;
        user1.lastName=user.lastName;
        user1.role=user.role;
        user1.phone=user.phone;
        user1.username=user.username;
        user1.password=user.password;
        user1.update();
        List<User> userList=User.all();
        return ok(Json.toJson(userList));
    }
    public static Result disableUser(long id){
        Form<User> userForm=Form.form(User.class).bindFromRequest();
        User user=userForm.get();
        User user1=User.finderById(id);
        user1.deleteStatus=true;
        user1.deleteReason=user.deleteReason;
        user1.update();

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
        List<User> userList=User.all();
        return ok(Json.toJson(userList));
    }
}
