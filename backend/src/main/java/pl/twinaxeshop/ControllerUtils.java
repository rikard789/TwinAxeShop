package pl.twinaxeshop;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import pl.twinaxeshop.dao.request.ErrorResponse;

import java.time.Instant;

public final class ControllerUtils {
    // 400 Bad Request
    public static final String BAD_REQUEST_CAUSE = "Invalid request syntax or configuration.";
    public static final String BAD_REQUEST_ACTION = "Review and correct your request, then consult the API documentation.";
    public static final String BAD_REQUEST_DECK_TYPE_CHANGE_ACTION = "Ensure that the deckType remains unchanged when updating a deck.";
    public static final String BAD_REQUEST_INVALID_DECK_TYPE_ACTION = "Ensure you are trying to add an item to the proper type of deck.";

    // 401 Unauthorized
    public static final String UNAUTHORIZED_CAUSE = "Authentication is required to access this resource.";
    public static final String UNAUTHORIZED_ACTION = "Please provide valid authentication credentials.";
    public static final String UNAUTHORIZED_CAUSE_EXPIRY = "Your session has expired due to an expired JWT token.";
    public static final String UNAUTHORIZED_ACTION_EXPIRY = "Please log in again to renew your session and obtain a new token.";
    public static final String UNAUTHORIZED_CAUSE_NO_AUTH = "Authentication header is missing.";
    public static final String UNAUTHORIZED_ACTION_NO_AUTH = "Please include an 'Authorization' header with your request.";

    // 404 Not Found
    public static final String NOT_FOUND_CAUSE = "The requested resource was not found.";
    public static final String NOT_FOUND_ACTION = "Verify the request path and try again.";

    private static final String ERROR_REQUEST_URI_ATTR = "jakarta.servlet.error.request_uri";

    // Utility class
    private ControllerUtils() {}

    public static ResponseEntity<Object> createErrorResponse(HttpStatus status, String cause, String action, HttpServletRequest request) {
        String timestamp = Instant.now().toString();

        ErrorResponse response = new ErrorResponse(
                status.value(),
                status.getReasonPhrase(),
                requestUri(request),
                timestamp,
                cause,
                action
        );

        return new ResponseEntity<>(response, status);
    }

    private static String requestUri(HttpServletRequest request) {
        String originalPath = (String) request.getAttribute(ERROR_REQUEST_URI_ATTR);
        if (originalPath == null) {
            originalPath = request.getRequestURI();
        }

        StringBuilder fullPath = new StringBuilder(originalPath);

        String queryString = request.getQueryString();
        if (queryString != null && !queryString.isEmpty()) {
            fullPath.append("?").append(queryString);
        }

        return fullPath.toString();
    }
}