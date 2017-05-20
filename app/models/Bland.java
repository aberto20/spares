package models;

import play.db.ebean.Model;

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
    public String description = "";

    public boolean deleteStatus = false;
    public String deleteReason = "";
    public String doneBy = "";
    public Timestamp doneAt = new Timestamp(new Date().getTime());

    public static Model.Finder<Long, Bland> find = new Model.Finder<Long, Bland>(Long.class, Bland.class);
    public static List<Bland> all(){
        return find.all();
    }
    public static Bland finderById(long id){
        return find.ref(id);
    }
}