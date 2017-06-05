package models;

import com.avaje.ebean.Expr;
import play.db.ebean.Model;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

/**
 * Created by lenovo on 5/20/2017.
 */
@Entity
public class Vehicle extends Model {
    @Id
    public long id;
    public String vehicleName = "";
    @Column(columnDefinition = "TEXT")
    public String description = "";
    public String image = "";
    public String fablicationYear = "";

    public boolean deleteStatus = false;
    public String deleteReason = "";
    public String doneBy = "";
    public Timestamp doneAt = new Timestamp(new Date().getTime());

    @ManyToOne(cascade = CascadeType.ALL)
    public Bland bland;

    public static Model.Finder<Long, Vehicle> find = new Model.Finder<Long, Vehicle>(Long.class, Vehicle.class);
    public static List<Vehicle> all(){
        return find.where().not(Expr.eq("delete_status", "1")).findList();
    }
    public static Vehicle finderById(long id){
        return find.ref(id);
    }
    public static Vehicle findByVehicleName(String vehicleName) {
        return find.where().eq("vehicle_name", vehicleName).findUnique();
    }
}
