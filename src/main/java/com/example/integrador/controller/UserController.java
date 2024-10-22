package com.example.integrador.controller;

import com.example.integrador.model.User;
import com.example.integrador.repository.UserRepository;<<<<<<<HEAD
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.security.Principal;
import java.util.Map;

@Controller=======
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Controller; // Esto se está utilizando ahora
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@Controller // Cambiar a Controller para que las rutas estén bajo el contexto de la
@RestController // Cambiar a RestController para devolver JSON directamente
@RequestMapping("/api") // Para que todas las rutas estén bajo '/api'
>>>>>>>ed7ccf5(Backend con conexion a React)public class UserController {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    <<<<<<<HEAD @GetMapping("/register")

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
=======
    // Ruta para el registro
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
>>>>>>> ed7ccf5 (Backend con conexion a React)
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

<<<<<<< HEAD
        // Redirigir al login después del registro
        return "redirect:/login";
    }

    @GetMapping("/login")
    public String showLoginForm() {
        return "login"; // Retorna la vista del formulario de login
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
=======
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
    public ResponseEntity<?> welcome(Principal principal) {
        Map<String, String> response = new HashMap<>();

        if (principal instanceof OAuth2AuthenticationToken) {
>>>>>>> ed7ccf5 (Backend con conexion a React)
            OAuth2AuthenticationToken authToken = (OAuth2AuthenticationToken) principal;
            Map<String, Object> attributes = authToken.getPrincipal().getAttributes();
            String correo = (String) attributes.get("email");

<<<<<<< HEAD
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

    =======

    User user = userRepository.findByCorreo(correo);if(user!=null)
    {
        response.put("nombre", user.getNombre());
    }else
    {
        response.put("nombre", (String) attributes.get("name"));
    }}else if(principal!=null){
    String correo = principal.getName();
    User user = userRepository.findByCorreo(correo);if(user!=null)
    {
        response.put("nombre", user.getNombre());
    }}

    return ResponseEntity.ok(response);}>>>>>>>ed7ccf5(
    Backend con
    conexion a React)
}
