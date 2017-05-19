import play.Project._

name := "solidality"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  javaJdbc,
  javaEbean,
  cache,
  "org.mindrot" % "jbcrypt" % "0.3m",
  "org.apache.commons" % "commons-email" % "1.4"
)

play.Project.playJavaSettings

libraryDependencies += "mysql" % "mysql-connector-java" % "5.1.27"