package br.com.viagem.aplicacao;

	import br.com.viagem.model.Viagem;
	import br.com.viagem.dao.ViagemDAO;
	import java.math.BigDecimal;

public class Main {

	public static void main(String[] args) {
		
		ViagemDAO viagemDao = new ViagemDAO();
		
		// Inserindo dados no banco --------------------------
		Viagem viagem = new Viagem();
		viagem.setOrigem("São Luiz");
		viagem.setDestino("Curitiba");
		viagem.setDataIda("13/10/2022");
		viagem.setDataVolta("25/10/2022");
		//viagem.setPreco(850.9);
		
		BigDecimal bd1 = new BigDecimal("850.95");
		viagem.setPreco(bd1);
		
		
		viagemDao.save(viagem);
		
		//Atualizar Viagem ------------------------------------
		Viagem vgm1 = new Viagem();
		vgm1.setOrigem("Florianópolis");
		vgm1.setDestino("Rio de Janeiro");
		vgm1.setDataIda("05/09/2022");
		vgm1.setDataVolta("08/09/2022");
		//vgm1.setPreco(953.23);
		
		BigDecimal bd2 = new BigDecimal("850.95");
		viagem.setPreco(bd2);
		
		vgm1.setIdDestino(3); // Numero do registro no Banco
		
		//viagemDao.update(vgm1);
		
		//Deletar Viagem pelo ID -------------------------------
		//viagemDao.delete(6);
		
		
		
		//Visualização dos registros do banco-------------------
		System.out.println(" Viagem || Origem || Destino || Data Ida || Data Volta || Preço ");
		 
		for (Viagem vgm : viagemDao.getViagem()) {
			
			System.out.print("Viagem: "+vgm.getOrigem());
			System.out.print(" - "+vgm.getDestino());
			System.out.print(" - "+vgm.getDataIda());
			System.out.print(" - "+vgm.getDataVolta());
			System.out.print(" - "+vgm.getPreco());	
			System.out.println(" ");	
		}
		
	}

}
