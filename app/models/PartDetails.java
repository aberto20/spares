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
public class PartDetails extends Model {
    @Id
    public long id;
    public String doneBy = "";
    public Timestamp doneAt = new Timestamp(new Date().getTime());

    public boolean deleteStatus = false;

    @ManyToOne(cascade = CascadeType.ALL)
    public Bland bland;

    @ManyToOne(cascade = CascadeType.ALL)
    public SparePart sparePart;

    public static Model.Finder<Long, PartDetails> find = new Model.Finder<Long, PartDetails>(Long.class, PartDetails.class);
    public static List<PartDetails> all(){
        return find.where().not(Expr.eq("delete_status", "1")).findList();
    }
    public static PartDetails finderById(long id){
        return find.ref(id);
    }
    public static PartDetails findBytypeName(String typeName) {
        return find.where().eq("type_name", typeName).findUnique();
    }
}
