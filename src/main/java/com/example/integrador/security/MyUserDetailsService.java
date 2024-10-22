package com.example.integrador.security;

import com.example.integrador.model.User;
import com.example.integrador.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public MyUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String correo) throws UsernameNotFoundException {
        User user = userRepository.findByCorreo(correo);
        if (user == null) {
            throw new UsernameNotFoundException("Usuario no encontrado.");
        }

        // El password ya debe estar codificado en la base de datos
        return org.springframework.security.core.userdetails.User.withUsername(user.getCorreo())
                .password(user.getContraseña()) // Asegúrate de que la contraseña esté codificada
                .roles("USER") // Asigna roles si es necesario
                .build();
    }

}
