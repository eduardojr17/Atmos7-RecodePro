package br.com.api.atmoscrud.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "viagem") 
@Getter
@Setter
public class ViagemModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idViagem;

    private String origem;
    private String destino;
    private String dataIda;
    private String dataVolta;
    private String preco;
    
}
