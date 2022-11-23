package br.com.viagem.factory;

	import java.sql.Connection;
	import java.sql.DriverManager;
	

public class ConnectionFactory {
	
	private static final String USERNAME = "root";
	private static final String PASSWORD = "atmos1023#";
	private static final String DATABASE_URL = "jdbc:mysql://localhost:3306/atmos";

	
	
	public static Connection createConnectionToMySQL() throws Exception {
		
		//Faz com que a classe seja carregada pela JVM
		//Class.forName("com.mysql.jdbc.Driver");
		Class.forName("com.mysql.cj.jdbc.Driver");
		
		//Conexão com o banco
		Connection connection = DriverManager.getConnection(DATABASE_URL,USERNAME,PASSWORD);
		
		return connection;
	}
	
	
	public static void main(String[] args) throws Exception {
		// Testando acesso ao BD
		
			Connection con = createConnectionToMySQL( );
			
			if (con != null) {
				System.out.println("Está conectado");
				con.close();
			} else {
				System.out.println("Não conectou");
			}
		}
	
}
