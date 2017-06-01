package models;

import com.avaje.ebean.Expr;
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
public class SparePart extends Model {
    @Id
    public long id;
    public String partName = "";
    public String description = "";
    public String modelNumber = "";
    public String image = "";
    public String manufacturerPrice = "";
    public String fittingName = "";
    public String originality = "";
    public String fablicationYear = "";

    @ManyToOne(cascade = CascadeType.ALL)
    public PartType partType;

    public boolean deleteStatus = false;
    public String deleteReason = "";
    public String doneBy = "";
    public Timestamp doneAt = new Timestamp(new Date().getTime());


    public static Model.Finder<Long, SparePart> find = new Model.Finder<Long, SparePart>(Long.class, SparePart.class);
    public static List<SparePart> all(){
        return find.where().not(Expr.eq("delete_status", "1")).findList();
    }
    public static SparePart finderById(long id){
        return find.ref(id);
    }
    public static SparePart findByPartName(String partName) {
        return find.where().eq("part_name", partName).findUnique();
    }
    public static SparePart findByPartModel(String partModel) {
        return find.where().eq("model_number", partModel).findUnique();
    }
}
