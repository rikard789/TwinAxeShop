package pl.twinaxeshop.service.security.impl;

import lombok.SneakyThrows;
import pl.twinaxeshop.exception.InvalidLoginDetailsException;
import pl.twinaxeshop.exception.UserAlreadyExistsException;
import pl.twinaxeshop.model.Role;
import pl.twinaxeshop.model.User;
import pl.twinaxeshop.dao.request.SignUpRequest;
import pl.twinaxeshop.dao.request.SignInRequest;
import pl.twinaxeshop.dao.response.JwtAuthenticationResponse;
import pl.twinaxeshop.repository.UserRepository;
import pl.twinaxeshop.service.security.AuthenticationService;
import pl.twinaxeshop.service.security.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @SneakyThrows
    @Override
    public JwtAuthenticationResponse signup(SignUpRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new UserAlreadyExistsException("User with email " + request.getEmail() + " already exists.");
        }

        var user = User.builder().firstName(request.getFirstName()).lastName(request.getLastName())
                .email(request.getEmail()).password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER).build();
        userRepository.save(user);

        var jwt = jwtService.generateToken(user);
        return JwtAuthenticationResponse.builder().token(jwt).build();
    }

    @SneakyThrows
    @Override
    public JwtAuthenticationResponse signin(SignInRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        } catch (Exception e) {
            throw new InvalidLoginDetailsException("Invalid login details provided.");
        }

        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new InvalidLoginDetailsException("Invalid login details provided."));

        var jwt = jwtService.generateToken(user);
        return JwtAuthenticationResponse.builder().token(jwt).build();
    }
}
