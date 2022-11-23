package br.com.api.atmoscrud.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.atmoscrud.model.ResponseModel;
import br.com.api.atmoscrud.model.ViagemModel;
import br.com.api.atmoscrud.repository.ViagemRepository;

@Service
public class ViagemServices {

    @Autowired
    private ViagemRepository vr;

    @Autowired
    private ResponseModel rm;

    //Método para lista viagens
    public Iterable<ViagemModel> listar(){
        return vr.findAll();
    }

    //Método para cadastrar produtos
    public ResponseEntity<?> cadastrarAlterar(ViagemModel vm, String acao){

        if(vm.getOrigem().equals("")){
            rm.setMensagem("A origem é obrigatória");
            return new ResponseEntity<ResponseModel> (rm, HttpStatus.BAD_REQUEST);

        }else if(vm.getDestino().equals("")){
            rm.setMensagem("O destino é obrigatório");
            return new ResponseEntity<ResponseModel>(rm, HttpStatus.BAD_REQUEST);
        
        }else if(vm.getDataIda().equals("")){
            rm.setMensagem("A data de ida é obrigatória");
            return new ResponseEntity<ResponseModel>(rm, HttpStatus.BAD_REQUEST);
        
        }else if(vm.getDataVolta().equals("")){
            rm.setMensagem("A data de volta é obrigatória");
            return new ResponseEntity<ResponseModel>(rm, HttpStatus.BAD_REQUEST);

        }else if(vm.getPreco().equals("")){
            rm.setMensagem("O preco obrigatório");
            return new ResponseEntity<ResponseModel>(rm, HttpStatus.BAD_REQUEST);

        }else {
            if(acao.equals("cadastrar")){
                return new ResponseEntity<ViagemModel>(vr.save(vm), HttpStatus.CREATED);   
            }else{
                return new ResponseEntity<ViagemModel>(vr.save(vm), HttpStatus.OK); 

            }
            
        }        
    }
    
    //Método para remover produtos
    public ResponseEntity<ResponseModel> remover(long idViagem){
        
        vr.deleteById(idViagem);
        rm.setMensagem("Viagem removida com sucesso!");
        
            return new ResponseEntity<ResponseModel>(rm, HttpStatus.OK);
    }
}
