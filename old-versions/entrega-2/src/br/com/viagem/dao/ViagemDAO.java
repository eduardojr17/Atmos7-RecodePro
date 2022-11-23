package br.com.viagem.dao;

	import java.sql.Connection;
	import java.sql.PreparedStatement;
	import java.sql.ResultSet;
	import java.util.ArrayList;
	import java.util.List;
	import br.com.viagem.factory.ConnectionFactory;
	import br.com.viagem.model.Viagem;

public class ViagemDAO {
	
	//CREATE
	public void save (Viagem viagem) {		

			String sql = "INSERT INTO viagem (origem,destino,dataIda,dataVolta,preco) VALUES (?,?,?,?,?)";
			
			Connection conn = null;
			PreparedStatement pstm = null;
						
			try {
				
				//Criar uma conexão com o banco
				conn = ConnectionFactory.createConnectionToMySQL();
				
				//PreparedStatement, para executar uma query
				pstm = (PreparedStatement) conn.prepareStatement(sql);
				
				//add valores na query
				pstm.setString(1, viagem.getOrigem());
				pstm.setString(2, viagem.getDestino());
				pstm.setString(3, viagem.getDataIda());
				pstm.setString(4, viagem.getDataVolta());
				pstm.setBigDecimal(5, viagem.getPreco());
				
				//Executar query
				pstm.execute();
				
					System.out.println("Viagem cadastrada!");
				
			}catch (Exception e) {
				e.printStackTrace();
			}finally {

				//Fechar conexões
				try {
					if (pstm!=null) {
						pstm.close();
					}
					
					if(conn!=null) {
						conn.close();
					}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	
	public void update(Viagem viagem) {
		
		String sql = "UPDATE viagem SET origem = ?, destino = ?, dataida = ?, datavolta = ?, preco = ?"+
		"WHERE iddestino = ?";
		
		Connection conn = null;
		PreparedStatement pstm = null;
		
		try {

			conn = ConnectionFactory.createConnectionToMySQL();
				
			pstm = (PreparedStatement) conn.prepareStatement(sql);
				
			
			pstm.setString(1, viagem.getOrigem());
			pstm.setString(2, viagem.getDestino());
			pstm.setString(3, viagem.getDataIda());
			pstm.setString(4, viagem.getDataVolta());
			pstm.setBigDecimal(5, viagem.getPreco());
			
			//ID do Registro
			
			pstm.setInt(6, viagem.getIdDestino());
			
			pstm.execute();
			
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			try {
				if (pstm!=null) {
					pstm.close();
				}
				
				if(conn!=null) {
					conn.close();
				}
					
			}catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
		
	
	public void delete (int idDestino) {
		
		String sql = "DELETE FROM viagem WHERE idDestino = ?";
		
		Connection conn = null;
		PreparedStatement pstm = null;
		
		try {
			conn = ConnectionFactory.createConnectionToMySQL();
			
			pstm = conn.prepareStatement(sql);
			
			pstm.setInt(1,idDestino);
			
			pstm.execute();
			
		}catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (pstm != null) {
					pstm.close();
				}
				
				if (conn != null) {
					conn.close();
				}
			}catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	
	//READ
	public List<Viagem> getViagem() {
		
		String sql = "SELECT * FROM viagem";
		
		List<Viagem> viagens = new ArrayList<Viagem>();
		
		Connection conn = null;
		PreparedStatement pstm = null;
		
		// Recuperar os dados do banco
		ResultSet rset = null;
		
		try {
			conn = ConnectionFactory.createConnectionToMySQL();
			
			pstm = (PreparedStatement) conn.prepareStatement(sql);
			
			rset = pstm.executeQuery();
			
			while (rset.next()) {
				
				Viagem viagem = new Viagem();
				
				viagem.setIdDestino(rset.getInt("idDestino"));
				viagem.setOrigem(rset.getString("origem"));
				viagem.setDestino(rset.getString("destino"));
				viagem.setDataIda(rset.getString("dataIda"));
				viagem.setDataVolta(rset.getString("dataVolta"));
				viagem.setPreco(rset.getBigDecimal("preco"));
				
				viagens.add(viagem);
				
			}
				
			}catch (Exception e) {
				e.printStackTrace();
			}finally {
				try {
				
					if (rset!=null) {
						rset.close();
					}
				
					if (pstm!=null) {
						pstm.close();
					}
				
					if (conn!=null) {
						conn.close();
					}
				
			}catch (Exception e) {
				e.printStackTrace();
			}			
			
		}
		
			return viagens;
	}
}