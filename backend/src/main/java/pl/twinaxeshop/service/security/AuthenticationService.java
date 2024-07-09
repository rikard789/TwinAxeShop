package pl.twinaxeshop.service.security;

import pl.twinaxeshop.dao.request.SignUpRequest;
import pl.twinaxeshop.dao.request.SignInRequest;
import pl.twinaxeshop.dao.response.JwtAuthenticationResponse;


public interface AuthenticationService {
    JwtAuthenticationResponse signup(SignUpRequest request);

    JwtAuthenticationResponse signin(SignInRequest request);
}
