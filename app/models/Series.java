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
public class Series extends Model {
    @Id
    public long id;
    public String serieNo = "";
    public String serieName = "";
    public String fablicationYear = "";

    public boolean deleteStatus = false;
    public String deleteReason = "";
    public String doneBy = "";
    public Timestamp doneAt = new Timestamp(new Date().getTime());

    @ManyToOne(cascade = CascadeType.ALL)
    public Vehicle vehicle;

    public static Model.Finder<Long, Series> find = new Model.Finder<Long, Series>(Long.class, Series.class);
    public static List<Series> all(){
        return find.all();
    }
    public static Series finderById(long id){
        return find.ref(id);
    }
}
