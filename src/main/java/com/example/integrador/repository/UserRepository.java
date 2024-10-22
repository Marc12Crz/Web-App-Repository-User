package com.example.integrador.repository;

import com.example.integrador.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByCorreo(String correo);
}
