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
public class PartType extends Model {
    @Id
    public long id;
    public String typeName = "";
    public String image = "";
    @Column(columnDefinition = "TEXT")
    public String description = "";

    public boolean deleteStatus = false;
    public String deleteReason = "";
    public String doneBy = "";
    public Timestamp doneAt = new Timestamp(new Date().getTime());

    @ManyToOne(cascade = CascadeType.ALL)
    public VehicleModel vehicleModel;

    public static Model.Finder<Long, PartType> find = new Model.Finder<Long, PartType>(Long.class, PartType.class);
    public static List<PartType> all(){
        return find.where().not(Expr.eq("delete_status", "1")).findList();
    }
    public static PartType finderById(long id){
        return find.ref(id);
    }
    public static PartType findByPartType(String typeName) {
        return find.where().eq("type_name", typeName).findUnique();
    }
}
