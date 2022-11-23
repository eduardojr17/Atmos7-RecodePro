package br.com.api.atmoscrud.repository;
import org.springframework.data.repository.CrudRepository;

import br.com.api.atmoscrud.model.ViagemModel;

@repository
public interface ViagemRepository extends CrudRepository<ViagemModel, Long>{
    
}
