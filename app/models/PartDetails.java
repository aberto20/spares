package models;

import play.db.ebean.Model;

import javax.persistence.CascadeType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

/**
 * Created by lenovo on 5/20/2017.
 */
public class PartDetails extends Model {
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
    public SparePart sparePart;

    @ManyToOne(cascade = CascadeType.ALL)
    public PartType partType;

    public static Model.Finder<Long, PartDetails> find = new Model.Finder<Long, PartDetails>(Long.class, PartDetails.class);
    public static List<PartDetails> all(){
        return find.all();
    }
    public static PartDetails finderById(long id){
        return find.ref(id);
    }
}