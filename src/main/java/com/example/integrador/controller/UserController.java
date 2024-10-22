package com.example.integrador.controller;

import com.example.integrador.model.User;
import com.example.integrador.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import org.springframework.http.ResponseEntity;

@Controller
@RequestMapping("/api") // Para que todas las rutas estén bajo '/api'
public class UserController {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    // Mostrar el formulario de registro
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

    // Ruta para el registro del usuario
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Map<String, String> payload) {
        String nombre = payload.get("nombre");
        String correo = payload.get("correo");
        String contraseña = payload.get("contraseña");
        String direccion = payload.get("direccion");
        String telefono = payload.get("telefono");
        String tipo_usuario = payload.get("tipo_usuario");
        String departamento = payload.get("departamento");
        String distrito = payload.get("distrito");

        if (userRepository.findByCorreo(correo) != null) {
            return ResponseEntity.badRequest().body("El correo ya está registrado.");
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
        return ResponseEntity.ok("Usuario registrado con éxito.");
    }

    // Ruta para login
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> payload) {
        String correo = payload.get("correo");
        String contraseña = payload.get("contraseña");

        User user = userRepository.findByCorreo(correo);
        if (user == null || !passwordEncoder.matches(contraseña, user.getContraseña())) {
            return ResponseEntity.status(401).body("Correo o contraseña incorrectos.");
        }

        Map<String, String> response = new HashMap<>();
        response.put("nombre", user.getNombre());
        return ResponseEntity.ok(response);
    }

    // Ruta para obtener los datos del usuario autenticado (Google OAuth)
    @GetMapping("/welcome")
    public String welcome(Principal principal, Model model) {
        if (principal instanceof OAuth2AuthenticationToken) {
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
            String correo = principal.getName();
            User user = userRepository.findByCorreo(correo);
            if (user != null) {
                model.addAttribute("nombre", user.getNombre());
            }
        }
        return "welcome";
    }
}
