package controllers;

import play.mvc.*;

import views.html.*;

public class HomeController extends Controller {
    public static Result index(){
        return ok(index.render());
    }
}