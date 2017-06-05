package models;

import com.avaje.ebean.Expr;
import play.db.ebean.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

/**
 * Created by lenovo on 5/20/2017.
 */
@Entity
public class Bland extends Model {
    @Id
    public long id;
    public String blandName = "";
    @Column(columnDefinition = "TEXT")
    public String description = "";
    public String image = "";

    public boolean deleteStatus = false;
    public String deleteReason = "";
    public String doneBy = "";
    public Timestamp doneAt = new Timestamp(new Date().getTime());

    public static Model.Finder<Long, Bland> find = new Model.Finder<Long, Bland>(Long.class, Bland.class);
    public static List<Bland> all(){
        return find.where().not(Expr.eq("delete_status", "1")).findList();
    }
    public static Bland finderById(long id){
        return find.ref(id);
    }
    public static Bland findByBlandrname(String blandName) {
        return find.where().eq("bland_name", blandName).findUnique();
    }
}
