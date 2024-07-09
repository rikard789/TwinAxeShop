package pl.twinaxeshop;

import pl.twinaxeshop.model.Role;
import pl.twinaxeshop.model.User;

public class TestUtils {

    public static User createUser() {
        User user = new User();
        user.setUserId(1);
        user.setFirstName("John");
        user.setLastName("Doe");
        user.setEmail("john.doe@example.com");
        user.setPassword("securePassword");
        user.setRole(Role.USER);
        return user;
    }
}
