package models;

import com.avaje.ebean.Expr;
import play.db.ebean.Model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.security.Timestamp;
import java.util.Date;
import java.util.List;

/**
 * Created by Noel on 6/17/2017.
 */
@Entity
public class VehicleModel extends Model {
    @Id
    public long id;
    public String modelName = "";
    public String fabYear = "";
    public String image = "";
    public String description = "";

    public boolean deleteStatus = false;
    public String deleteReason = "";
    public String doneBy = "";
    public java.sql.Timestamp doneAt = new java.sql.Timestamp(new Date().getTime());

    @ManyToOne(cascade = CascadeType.ALL)
    public Bland bland;

    public static Model.Finder<Long, VehicleModel> find = new Model.Finder<Long, VehicleModel>(Long.class, VehicleModel.class);
    public static List<VehicleModel> all(){
        return find.where().not(Expr.eq("delete_status", "1")).findList();
    }
    public static VehicleModel finderById(long id){
        return find.ref(id);
    }
}
