package models;

import play.db.ebean.Model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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
    public String description = "";

    public boolean deleteStatus = false;
    public String deleteReason = "";
    public String doneBy = "";
    public Timestamp doneAt = new Timestamp(new Date().getTime());

    @ManyToOne(cascade = CascadeType.ALL)
    public Series series;

    public static Model.Finder<Long, PartType> find = new Model.Finder<Long, PartType>(Long.class, PartType.class);
    public static List<PartType> all(){
        return find.all();
    }
    public static PartType finderById(long id){
        return find.ref(id);
    }
}