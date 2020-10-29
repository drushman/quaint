initSidebarItems({"enum":[["ConnectionInfo","General information about a SQL connection."],["EncryptMode","TLS mode when connecting to SQL Server."],["IsolationLevel","Controls the locking and row versioning behavior of Transact-SQL statements issued by a connection to SQL Server. Read more from the SQL Server documentation."],["SqlFamily","One of the supported SQL variants."],["SslAcceptMode",""]],"fn":[["sqlite_version","Returns the SQLite version as a string; e.g., `\"3.16.2\"` for version 3.16.2."]],"struct":[["Mssql","A connector interface for the SQL Server database."],["MssqlUrl","Wraps a connection url and exposes the parsing logic used by Quaint, including default values."],["Mysql","A connector interface for the MySQL database."],["MysqlUrl","Wraps a connection url and exposes the parsing logic used by quaint, including default values."],["PostgreSql","A connector interface for the PostgreSQL database."],["PostgresUrl","Wraps a connection url and exposes the parsing logic used by Quaint, including default values."],["ResultRow","An owned version of a `Row` in a `ResultSet`. See ResultRowRef for documentation on data access."],["ResultRowRef","A reference to a `Row` in a `ResultSet`. The columns can be accessed either through their position or using the column name."],["ResultSet","Encapsulates a set of results and their respective column names."],["ResultSetIterator","Thin iterator for ResultSet rows. Might become lazy one day."],["Sqlite","A connector interface for the SQLite database"],["SqliteParams","Wraps a connection url and exposes the parsing logic used by Quaint, including default values."],["SslParams",""],["Transaction","A representation of an SQL database transaction. If not commited, a transaction will be rolled back by default when dropped."]],"trait":[["GetRow",""],["Queryable","Represents a connection or a transaction that can be queried."],["TakeRow",""],["ToColumnNames",""],["TransactionCapable","A thing that can start a new transaction."],["ValueIndex",""]]});