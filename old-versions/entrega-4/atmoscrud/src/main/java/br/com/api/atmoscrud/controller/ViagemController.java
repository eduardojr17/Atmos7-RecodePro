package br.com.api.atmoscrud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.atmoscrud.model.ResponseModel;
import br.com.api.atmoscrud.model.ViagemModel;
import br.com.api.atmoscrud.services.ViagemServices;

@RestController
@CrossOrigin(origins = "*")
public class ViagemController {

    @Autowired
    private ViagemServices vs;

    @DeleteMapping("/remover/{idViagem}")
    public ResponseEntity<ResponseModel> remover(@PathVariable long idViagem){
        return vs.remover(idViagem);
    }

    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody ViagemModel vm){
        return vs.cadastrarAlterar(vm, "alterar");
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody ViagemModel vm){
        return vs.cadastrarAlterar(vm, "cadastrar");
    }

    @GetMapping("/listar")
    public Iterable<ViagemModel> listar(){
        return vs.listar();
    }

   
    @GetMapping("/")
    public String rota(){
        return "API de Viagem funcionando";
    }
} 
