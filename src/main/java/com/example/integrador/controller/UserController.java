package com.example.integrador.controller;

import com.example.integrador.model.User;
import com.example.integrador.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.security.Principal;
import java.util.Map;

@Controller
public class UserController {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    @GetMapping("/register")
    public String showRegistrationForm(Model model, Principal principal) {
        if (principal instanceof OAuth2AuthenticationToken) {
            OAuth2AuthenticationToken authToken = (OAuth2AuthenticationToken) principal;
            Map<String, Object> attributes = authToken.getPrincipal().getAttributes();

            // Rellena el formulario con los datos obtenidos de Google
            model.addAttribute("nombre", attributes.get("name"));
            model.addAttribute("correo", attributes.get("email"));
        }
        return "register";
    }

    @PostMapping("/register")
    public String registerUser(String nombre, String correo, String contraseña, String direccion,
                               String telefono, String tipo_usuario, String departamento, String distrito, Model model) {
        if (userRepository.findByCorreo(correo) != null) {
            model.addAttribute("error", "El correo ya está registrado.");
            return "register";
        }

        User newUser = new User();
        newUser.setNombre(nombre);
        newUser.setCorreo(correo);
        newUser.setContraseña(passwordEncoder.encode(contraseña));
        newUser.setDireccion(direccion);
        newUser.setTelefono(telefono);
        newUser.setTipoUsuario(tipo_usuario);
        newUser.setDepartamento(departamento);
        newUser.setDistrito(distrito);

        userRepository.save(newUser);

        // Redirigir al login después del registro
        return "redirect:/login";
    }

    @GetMapping("/login")
    public String showLoginForm() {
        return "login";  // Retorna la vista del formulario de login
    }

    @PostMapping("/login")
    public String loginUser(String correo, String contraseña, Model model) {
        User user = userRepository.findByCorreo(correo);
        if (user == null || !passwordEncoder.matches(contraseña, user.getContraseña())) {
            model.addAttribute("error", "Correo o contraseña incorrectos.");
            return "login";
        }

        // Set the name to the model so it gets passed to the welcome page
        model.addAttribute("nombre", user.getNombre());
        return "welcome"; // Returns the welcome page with the user's name
    }


    @GetMapping("/welcome")
    public String welcome(Model model, Principal principal) {
        if (principal instanceof OAuth2AuthenticationToken) {
            // OAuth2 (Google) login
            OAuth2AuthenticationToken authToken = (OAuth2AuthenticationToken) principal;
            Map<String, Object> attributes = authToken.getPrincipal().getAttributes();
            String correo = (String) attributes.get("email");

            // Verificar si el usuario ya está registrado en la base de datos
            User user = userRepository.findByCorreo(correo);
            if (user != null) {
                model.addAttribute("nombre", user.getNombre());
            } else {
                model.addAttribute("nombre", attributes.get("name"));
            }
        } else if (principal != null) {
            // Manual login (using the Principal to get the username/correo)
            String correo = principal.getName(); // This returns the email for manual login
            User user = userRepository.findByCorreo(correo);
            if (user != null) {
                model.addAttribute("nombre", user.getNombre());
            }
        }
        return "welcome";
    }

}
